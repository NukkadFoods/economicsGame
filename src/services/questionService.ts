import { Question, QuestionHistory, GameSession, Subject, Difficulty } from '../types/question';

const STORAGE_KEY_PREFIX = 'economics_game_';
const HISTORY_KEY = `${STORAGE_KEY_PREFIX}question_history`;
const SESSION_KEY = `${STORAGE_KEY_PREFIX}current_session`;
const AVOID_RECENT_COUNT = 50; // Don't repeat questions within last 50 shown

export class QuestionService {
  /**
   * Select questions intelligently avoiding recently shown ones
   */
  static selectQuestions(
    allQuestions: Question[],
    count: number = 10,
    difficulty?: Difficulty
  ): Question[] {
    // Filter by difficulty if specified
    let availableQuestions = difficulty
      ? allQuestions.filter(q => q.difficulty === difficulty)
      : allQuestions;

    // Get question history
    const history = this.getQuestionHistory();
    const recentQuestionIds = history
      .slice(-AVOID_RECENT_COUNT)
      .map(h => h.questionId);

    // Separate into never-shown, not-recent, and recent
    const neverShown = availableQuestions.filter(
      q => !history.some(h => h.questionId === q.id)
    );
    
    const notRecent = availableQuestions.filter(
      q => !recentQuestionIds.includes(q.id) && 
           history.some(h => h.questionId === q.id)
    );
    
    const recent = availableQuestions.filter(
      q => recentQuestionIds.includes(q.id)
    );

    // Prioritize: never shown > not recent > recent
    const prioritized = [...neverShown, ...notRecent, ...recent];

    // Shuffle and select
    const shuffled = this.shuffleArray(prioritized);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // Update metadata
    return selected.map(q => ({
      ...q,
      metadata: {
        ...q.metadata,
        timesShown: q.metadata.timesShown + 1,
        lastShown: new Date().toISOString()
      }
    }));
  }

  /**
   * Record that a question was shown and answered
   */
  static recordQuestionShown(questionId: string, wasCorrect: boolean): void {
    const history = this.getQuestionHistory();
    history.push({
      questionId,
      shownAt: new Date().toISOString(),
      wasCorrect
    });
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  /**
   * Get question history
   */
  static getQuestionHistory(): QuestionHistory[] {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Clear question history (for testing or reset)
   */
  static clearHistory(): void {
    localStorage.removeItem(HISTORY_KEY);
  }

  /**
   * Get statistics about question usage
   */
  static getQuestionStats(allQuestions: Question[]): {
    totalQuestions: number;
    neverShown: number;
    shownOnce: number;
    shownMultiple: number;
    averageTimesShown: number;
  } {
    const history = this.getQuestionHistory();
    const questionCounts = new Map<string, number>();

    history.forEach(h => {
      questionCounts.set(h.questionId, (questionCounts.get(h.questionId) || 0) + 1);
    });

    const neverShown = allQuestions.filter(q => !questionCounts.has(q.id)).length;
    const shownOnce = Array.from(questionCounts.values()).filter(count => count === 1).length;
    const shownMultiple = Array.from(questionCounts.values()).filter(count => count > 1).length;
    const totalShown = Array.from(questionCounts.values()).reduce((sum, count) => sum + count, 0);
    const averageTimesShown = totalShown / allQuestions.length;

    return {
      totalQuestions: allQuestions.length,
      neverShown,
      shownOnce,
      shownMultiple,
      averageTimesShown: Math.round(averageTimesShown * 100) / 100
    };
  }

  /**
   * Start a new game session
   */
  static startSession(subject: Subject): GameSession {
    const session: GameSession = {
      subject,
      startedAt: new Date().toISOString(),
      score: 0,
      questionsAnswered: 0,
      history: []
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  /**
   * Update current session
   */
  static updateSession(updates: Partial<GameSession>): void {
    const current = this.getCurrentSession();
    if (current) {
      const updated = { ...current, ...updates };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
    }
  }

  /**
   * Complete current session
   */
  static completeSession(): GameSession | null {
    const session = this.getCurrentSession();
    if (session) {
      session.completedAt = new Date().toISOString();
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    }
    return null;
  }

  /**
   * Get current session
   */
  static getCurrentSession(): GameSession | null {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  /**
   * Shuffle array using Fisher-Yates algorithm
   */
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Get questions by difficulty distribution
   */
  static selectQuestionsByDifficulty(
    allQuestions: Question[],
    count: number = 10,
    distribution: { easy: number; medium: number; hard: number } = { easy: 3, medium: 5, hard: 2 }
  ): Question[] {
    const easyQuestions = this.selectQuestions(
      allQuestions.filter(q => q.difficulty === 'easy'),
      distribution.easy,
      'easy'
    );
    
    const mediumQuestions = this.selectQuestions(
      allQuestions.filter(q => q.difficulty === 'medium'),
      distribution.medium,
      'medium'
    );
    
    const hardQuestions = this.selectQuestions(
      allQuestions.filter(q => q.difficulty === 'hard'),
      distribution.hard,
      'hard'
    );

    // Combine and shuffle
    const combined = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    return this.shuffleArray(combined).slice(0, count);
  }

  /**
   * Get user performance statistics
   */
  static getPerformanceStats(): {
    totalAnswered: number;
    correctAnswers: number;
    accuracy: number;
    byDifficulty: {
      easy: { total: number; correct: number; accuracy: number };
      medium: { total: number; correct: number; accuracy: number };
      hard: { total: number; correct: number; accuracy: number };
    };
  } {
    const history = this.getQuestionHistory();
    const totalAnswered = history.length;
    const correctAnswers = history.filter(h => h.wasCorrect).length;
    const accuracy = totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;

    // Note: We'd need to store difficulty in history to calculate by difficulty
    // For now, return placeholder
    return {
      totalAnswered,
      correctAnswers,
      accuracy: Math.round(accuracy * 100) / 100,
      byDifficulty: {
        easy: { total: 0, correct: 0, accuracy: 0 },
        medium: { total: 0, correct: 0, accuracy: 0 },
        hard: { total: 0, correct: 0, accuracy: 0 }
      }
    };
  }
}
