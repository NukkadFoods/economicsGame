export type Subject = 'accounting' | 'math' | 'physics' | 'gk';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionSource = 'static' | 'ai-generated';

export interface Question {
  id: string;
  subject: Subject;
  difficulty: Difficulty;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  source: QuestionSource;
  metadata: {
    createdAt: string;
    timesShown: number;
    lastShown: string | null;
    successRate?: number;
  };
}

export interface QuestionBank {
  [key: string]: Question[];
}

export interface QuestionHistory {
  questionId: string;
  shownAt: string;
  wasCorrect: boolean;
}

export interface GameSession {
  subject: Subject;
  startedAt: string;
  completedAt?: string;
  score: number;
  questionsAnswered: number;
  history: QuestionHistory[];
}
