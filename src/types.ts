export interface Question {
    question: string;
    options: string[];
    correct: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface Bubble {
    id: string;
    text: string;
    position: Position;
    fallSpeed: number;
    isCorrect: boolean;
    isSelected: boolean;
    isExploding: boolean;
    hasFallen: boolean;
}

export interface GameState {
    score: number;
    currentQuestionIndex: number;
    gameOver: boolean;
    bubbles: Bubble[];
    currentQuestion: Question | null;
}
