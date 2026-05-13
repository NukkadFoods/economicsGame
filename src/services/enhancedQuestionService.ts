import { Question, Subject, Difficulty } from '../types/question';
import { enhancedQuestionBank } from '../data/enhanced';
import { questionDatabase } from './questionDatabase';
import { aiQuestionGenerator } from './aiQuestionGenerator';

export class EnhancedQuestionService {
  /**
   * Get all questions for a subject (static + AI-generated)
   */
  async getAllQuestions(subject: Subject): Promise<Question[]> {
    // Get static questions
    const staticQuestions = enhancedQuestionBank[subject] || [];
    
    // Get AI-generated questions from IndexedDB
    const aiQuestions = await questionDatabase.getQuestionsBySubject(subject);
    
    // Combine and return
    return [...staticQuestions, ...aiQuestions];
  }

  /**
   * Get questions by subject and difficulty
   */
  async getQuestionsByDifficulty(
    subject: Subject,
    difficulty: Difficulty
  ): Promise<Question[]> {
    // Get static questions
    const staticQuestions = (enhancedQuestionBank[subject] || [])
      .filter(q => q.difficulty === difficulty);
    
    // Get AI-generated questions
    const aiQuestions = await questionDatabase.getQuestionsBySubjectAndDifficulty(
      subject,
      difficulty
    );
    
    return [...staticQuestions, ...aiQuestions];
  }

  /**
   * Generate and store new AI questions
   */
  async generateAndStoreQuestions(
    subject: Subject,
    difficulty: Difficulty,
    count: number
  ): Promise<{ success: number; failed: number; questions: Question[] }> {
    if (!aiQuestionGenerator.isAvailable()) {
      throw new Error('AI question generation not available. Please configure GROQ API key.');
    }

    // Get template questions from static bank
    const templateQuestions = (enhancedQuestionBank[subject] || [])
      .filter(q => q.difficulty === difficulty);

    if (templateQuestions.length === 0) {
      throw new Error(`No template questions found for ${subject} - ${difficulty}`);
    }

    // Generate questions
    const generatedQuestions = await aiQuestionGenerator.generateQuestions(
      subject,
      difficulty,
      count,
      templateQuestions
    );

    // Validate and store
    const validQuestions: Question[] = [];
    let failedCount = 0;

    for (const question of generatedQuestions) {
      const validation = aiQuestionGenerator.validateQuestion(question);
      
      if (validation.isValid) {
        await questionDatabase.addQuestion(question);
        validQuestions.push(question);
      } else {
        console.warn('Invalid question generated:', validation.issues);
        failedCount++;
      }
    }

    return {
      success: validQuestions.length,
      failed: failedCount,
      questions: validQuestions
    };
  }

  /**
   * Get question statistics
   */
  async getStats(): Promise<{
    static: Record<Subject, number>;
    ai: Record<Subject, number>;
    total: Record<Subject, number>;
  }> {
    const dbStats = await questionDatabase.getStats();
    
    const staticCounts = {
      accounting: enhancedQuestionBank.accounting?.length || 0,
      math: enhancedQuestionBank.math?.length || 0,
      physics: enhancedQuestionBank.physics?.length || 0,
      gk: enhancedQuestionBank.gk?.length || 0
    };

    const totalCounts = {
      accounting: staticCounts.accounting + dbStats.bySubject.accounting,
      math: staticCounts.math + dbStats.bySubject.math,
      physics: staticCounts.physics + dbStats.bySubject.physics,
      gk: staticCounts.gk + dbStats.bySubject.gk
    };

    return {
      static: staticCounts,
      ai: dbStats.bySubject,
      total: totalCounts
    };
  }

  /**
   * Check if AI generation is available
   */
  isAIAvailable(): boolean {
    return aiQuestionGenerator.isAvailable();
  }

  /**
   * Clear all AI-generated questions
   */
  async clearAIQuestions(): Promise<void> {
    await questionDatabase.clearAIQuestions();
  }

  /**
   * Export all questions (static + AI)
   */
  async exportAllQuestions(): Promise<Record<Subject, Question[]>> {
    const subjects: Subject[] = ['accounting', 'math', 'physics', 'gk'];
    const result: Record<string, Question[]> = {};

    for (const subject of subjects) {
      result[subject] = await this.getAllQuestions(subject);
    }

    return result as Record<Subject, Question[]>;
  }
}

// Singleton instance
export const enhancedQuestionService = new EnhancedQuestionService();
