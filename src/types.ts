export interface Question {
    question: string;
    options: string[];
    correct: number;
}

export interface Bubble {
    element: HTMLDivElement;
    letter: string;
    correct: boolean;
}

export interface GameState {
    score: number;
    currentQuestionIndex: number;
    gameActive: boolean;
    fallSpeed: number;
    activeBubbles: Array<{
        id: string;
        letter: string;
        correct: boolean;
        position: { left: number };
        text: string;
    }>;
    questionAnswered: boolean;
}
