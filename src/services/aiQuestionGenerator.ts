import { Question, Subject, Difficulty } from '../types/question';

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export class AIQuestionGenerator {
  /**
   * Check if AI generation is available
   */
  isAvailable(): boolean {
    return GROQ_API_KEY.length > 0;
  }

  /**
   * Generate a single question using Groq AI
   */
  async generateQuestion(
    subject: Subject,
    difficulty: Difficulty,
    templateQuestion?: Question
  ): Promise<Question> {
    if (!GROQ_API_KEY) {
      throw new Error('Groq API key not configured');
    }

    const prompt = this.buildPrompt(subject, difficulty, templateQuestion);

    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: [
            {
              role: 'system',
              content: 'You are an expert educational content creator. Generate high-quality multiple-choice questions in JSON format only. Return ONLY valid JSON, no markdown or extra text.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
          response_format: { type: 'json_object' }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Groq API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const responseText = data.choices?.[0]?.message?.content || '{}';
      const questionData = JSON.parse(responseText);

      // Validate and format the question
      return this.formatQuestion(questionData, subject, difficulty);
    } catch (error) {
      console.error('Error generating question:', error);
      throw new Error(`Failed to generate question: ${error.message}`);
    }
  }

  /**
   * Generate multiple questions
   */
  async generateQuestions(
    subject: Subject,
    difficulty: Difficulty,
    count: number,
    templateQuestions?: Question[]
  ): Promise<Question[]> {
    const questions: Question[] = [];
    
    for (let i = 0; i < count; i++) {
      const template = templateQuestions?.[i % (templateQuestions.length || 1)];
      try {
        const question = await this.generateQuestion(subject, difficulty, template);
        questions.push(question);
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Failed to generate question ${i + 1}:`, error);
      }
    }

    return questions;
  }

  /**
   * Build prompt for AI
   */
  private buildPrompt(
    subject: Subject,
    difficulty: Difficulty,
    templateQuestion?: Question
  ): string {
    const subjectNames = {
      accounting: 'Accounting',
      math: 'Mathematics',
      physics: 'Physics',
      gk: 'General Knowledge'
    };

    const difficultyDescriptions = {
      easy: 'basic concepts, suitable for beginners',
      medium: 'intermediate level, requires understanding of concepts',
      hard: 'advanced level, requires deep knowledge and critical thinking'
    };

    let prompt = `Generate a ${difficulty} level ${subjectNames[subject]} multiple-choice question.

Requirements:
- Difficulty: ${difficultyDescriptions[difficulty]}
- Format: Multiple choice with exactly 4 options
- One correct answer
- Include a clear explanation
- Educational and accurate
- Appropriate topic for ${subjectNames[subject]}

Return ONLY a JSON object with this exact structure:
{
  "question": "The question text",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "topic": "Topic name",
  "explanation": "Why this answer is correct"
}

The "correct" field should be the index (0-3) of the correct option.`;

    if (templateQuestion) {
      prompt += `\n\nUse this as a style reference (but create a completely different question):
Question: ${templateQuestion.question}
Topic: ${templateQuestion.topic}
Difficulty: ${templateQuestion.difficulty}`;
    }

    return prompt;
  }

  /**
   * Format and validate AI-generated question
   */
  private formatQuestion(
    data: any,
    subject: Subject,
    difficulty: Difficulty
  ): Question {
    // Validate required fields
    if (!data.question || !Array.isArray(data.options) || data.options.length !== 4) {
      throw new Error('Invalid question format from AI');
    }

    if (typeof data.correct !== 'number' || data.correct < 0 || data.correct > 3) {
      throw new Error('Invalid correct answer index');
    }

    // Generate unique ID
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const id = `${subject}_${difficulty}_ai_${timestamp}_${random}`;

    return {
      id,
      subject,
      difficulty,
      topic: data.topic || 'AI Generated',
      question: data.question,
      options: data.options,
      correct: data.correct,
      explanation: data.explanation || 'AI generated question',
      source: 'ai-generated',
      metadata: {
        createdAt: new Date().toISOString(),
        timesShown: 0,
        lastShown: null
      }
    };
  }

  /**
   * Validate question quality
   */
  validateQuestion(question: Question): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];

    // Check question length
    if (question.question.length < 10) {
      issues.push('Question too short');
    }
    if (question.question.length > 500) {
      issues.push('Question too long');
    }

    // Check options
    if (question.options.length !== 4) {
      issues.push('Must have exactly 4 options');
    }

    question.options.forEach((option, index) => {
      if (option.length < 1) {
        issues.push(`Option ${index + 1} is empty`);
      }
      if (option.length > 200) {
        issues.push(`Option ${index + 1} is too long`);
      }
    });

    // Check for duplicate options
    const uniqueOptions = new Set(question.options);
    if (uniqueOptions.size !== question.options.length) {
      issues.push('Duplicate options found');
    }

    // Check correct answer
    if (question.correct < 0 || question.correct >= question.options.length) {
      issues.push('Invalid correct answer index');
    }

    // Check explanation
    if (!question.explanation || question.explanation.length < 10) {
      issues.push('Explanation too short or missing');
    }

    return {
      isValid: issues.length === 0,
      issues
    };
  }
}

// Singleton instance
export const aiQuestionGenerator = new AIQuestionGenerator();
