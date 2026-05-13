import { Question, Subject, Difficulty } from '../types/question';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface QuestionDB extends DBSchema {
  questions: {
    key: string;
    value: Question;
    indexes: {
      'by-subject': Subject;
      'by-difficulty': Difficulty;
      'by-subject-difficulty': [Subject, Difficulty];
      'by-source': 'static' | 'ai-generated';
    };
  };
}

const DB_NAME = 'EconomicsGameDB';
const DB_VERSION = 1;

export class QuestionDatabase {
  private db: IDBPDatabase<QuestionDB> | null = null;

  /**
   * Initialize the database
   */
  async init(): Promise<void> {
    if (this.db) return;

    this.db = await openDB<QuestionDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Create questions store
        const questionStore = db.createObjectStore('questions', {
          keyPath: 'id'
        });

        // Create indexes
        questionStore.createIndex('by-subject', 'subject');
        questionStore.createIndex('by-difficulty', 'difficulty');
        questionStore.createIndex('by-subject-difficulty', ['subject', 'difficulty']);
        questionStore.createIndex('by-source', 'source');
      }
    });
  }

  /**
   * Add a question to the database
   */
  async addQuestion(question: Question): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    await this.db.put('questions', question);
  }

  /**
   * Add multiple questions
   */
  async addQuestions(questions: Question[]): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const tx = this.db.transaction('questions', 'readwrite');
    await Promise.all([
      ...questions.map(q => tx.store.put(q)),
      tx.done
    ]);
  }

  /**
   * Get all questions for a subject
   */
  async getQuestionsBySubject(subject: Subject): Promise<Question[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return await this.db.getAllFromIndex('questions', 'by-subject', subject);
  }

  /**
   * Get questions by subject and difficulty
   */
  async getQuestionsBySubjectAndDifficulty(
    subject: Subject,
    difficulty: Difficulty
  ): Promise<Question[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return await this.db.getAllFromIndex(
      'questions',
      'by-subject-difficulty',
      [subject, difficulty]
    );
  }

  /**
   * Get AI-generated questions
   */
  async getAIQuestions(): Promise<Question[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return await this.db.getAllFromIndex('questions', 'by-source', 'ai-generated');
  }

  /**
   * Get question by ID
   */
  async getQuestion(id: string): Promise<Question | undefined> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return await this.db.get('questions', id);
  }

  /**
   * Delete a question
   */
  async deleteQuestion(id: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    await this.db.delete('questions', id);
  }

  /**
   * Delete all AI-generated questions
   */
  async clearAIQuestions(): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const aiQuestions = await this.getAIQuestions();
    const tx = this.db.transaction('questions', 'readwrite');
    
    await Promise.all([
      ...aiQuestions.map(q => tx.store.delete(q.id)),
      tx.done
    ]);
  }

  /**
   * Get count of questions by subject
   */
  async getQuestionCount(subject?: Subject): Promise<number> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    if (subject) {
      return await this.db.countFromIndex('questions', 'by-subject', subject);
    }
    return await this.db.count('questions');
  }

  /**
   * Get statistics
   */
  async getStats(): Promise<{
    total: number;
    bySubject: Record<Subject, number>;
    bySource: { static: number; ai: number };
  }> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const [accounting, math, physics, gk, aiQuestions] = await Promise.all([
      this.db.countFromIndex('questions', 'by-subject', 'accounting'),
      this.db.countFromIndex('questions', 'by-subject', 'math'),
      this.db.countFromIndex('questions', 'by-subject', 'physics'),
      this.db.countFromIndex('questions', 'by-subject', 'gk'),
      this.db.countFromIndex('questions', 'by-source', 'ai-generated')
    ]);

    const total = accounting + math + physics + gk;

    return {
      total,
      bySubject: {
        accounting,
        math,
        physics,
        gk
      },
      bySource: {
        static: total - aiQuestions,
        ai: aiQuestions
      }
    };
  }

  /**
   * Export all questions
   */
  async exportQuestions(): Promise<Question[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return await this.db.getAll('questions');
  }

  /**
   * Import questions (replaces existing)
   */
  async importQuestions(questions: Question[]): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const tx = this.db.transaction('questions', 'readwrite');
    await tx.store.clear();
    await Promise.all([
      ...questions.map(q => tx.store.put(q)),
      tx.done
    ]);
  }
}

// Singleton instance
export const questionDatabase = new QuestionDatabase();
