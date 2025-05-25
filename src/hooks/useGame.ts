import { useState, useCallback, useEffect } from 'react';
import { questionsBySubject } from '../data/allQuestions';

const INITIAL_FALL_SPEED = 9;
const SPEED_INCREASE_PER_QUESTION = 0.9;

interface Question {
    question: string;
    options: string[];
    correct: number;
}

interface Bubble {
    id: string;
    text: string;
    position: {
        x: number;
        y: number;
    };
    fallSpeed: number;
    isCorrect: boolean;
    isSelected: boolean;
    isExploding: boolean;
    hasFallen: boolean;
}

interface GameState {
    score: number;
    currentQuestionIndex: number;
    gameOver: boolean;
    bubbles: Bubble[];
    currentQuestion: Question | null;
}

const getRandomQuestions = (questions: Question[], count = 10): Question[] => {
    if (!Array.isArray(questions) || questions.length === 0) {
        console.error('Invalid questions array:', questions);
        return [];
    }
    
    console.log('Total available questions:', questions.length);
    const validQuestions = questions.filter(q => 
        q && typeof q.question === 'string' && 
        Array.isArray(q.options) && 
        typeof q.correct === 'number'
    );
    console.log('Valid questions after filtering:', validQuestions.length);
    
    const shuffled = [...validQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    console.log('Selected questions:', selected.length);
    return selected;
};

const createBubbles = (question: Question | null, offset = 0) => {
    if (!question || !Array.isArray(question.options)) {
        console.log('Cannot create bubbles, invalid question:', question);
        return [];
    }
    
    const spacing = 20;
    const startX = spacing + offset;
    
    return question.options.map((option, index) => ({
        id: `bubble-${Date.now()}-${index}`,
        text: option,
        position: {
            x: startX + (index * (100 - spacing * 2) / 3),
            y: -20
        },
        fallSpeed: 5,
        isCorrect: index === question.correct,
        isSelected: false,
        isExploding: false,
        hasFallen: false
    }));
};

const useGame = (subject = 'accounts') => {
    console.log('useGame initializing with subject:', subject);
    const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
    const [gameState, setGameState] = useState<GameState>({
        score: 0,
        currentQuestionIndex: 0,
        gameOver: false,
        bubbles: [],
        currentQuestion: null
    });

    // Initialize or reset game when subject changes
    useEffect(() => {
        console.log('Subject changed to:', subject);
        const questions = questionsBySubject[subject] || questionsBySubject.accounts;
        if (!questions) {
            console.error('No questions available for subject:', subject);
            return;
        }

        const randomQuestions = getRandomQuestions(questions);
        console.log('Selected questions:', randomQuestions);
        if (randomQuestions.length === 0) {
            console.error('No questions available after randomization');
            return;
        }

        setGameQuestions(randomQuestions);
        const firstQuestion = randomQuestions[0];
        const initialBubbles = createBubbles(firstQuestion, 0);
        console.log('Initial bubbles:', initialBubbles);

        setGameState({
            score: 0,
            currentQuestionIndex: 0,
            gameOver: false,
            bubbles: initialBubbles,
            currentQuestion: firstQuestion
        });
    }, [subject]);

    const handleBubbleClick = useCallback((index: number) => {
        if (gameState.gameOver) return;

        setGameState(prev => {
            const bubble = prev.bubbles[index];
            if (!bubble || bubble.isSelected || bubble.hasFallen) return prev;

            const isCorrect = bubble.isCorrect;
            const updatedBubbles = prev.bubbles.map((b, i) => ({
                ...b,
                isSelected: i === index,
                isExploding: i === index
            }));

            setTimeout(() => {
                setGameState(prev => {
                    const newScore = isCorrect ? prev.score + 4 : prev.score - 1;
                    const newQuestionIndex = prev.currentQuestionIndex + 1;
                    
                    if (newQuestionIndex >= gameQuestions.length) {
                        return {
                            ...prev,
                            gameOver: true,
                            score: newScore,
                            currentQuestion: null,
                            bubbles: []
                        };
                    }

                    const nextQuestion = gameQuestions[newQuestionIndex];
                    const newBubbles = createBubbles(nextQuestion);
                    console.log('Next question:', nextQuestion);
                    console.log('New bubbles:', newBubbles);
                    
                    return {
                        ...prev,
                        score: newScore,
                        currentQuestionIndex: newQuestionIndex,
                        currentQuestion: nextQuestion,
                        bubbles: newBubbles
                    };
                });
            }, 1000);

            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver, gameQuestions]);

    const handleLetterClick = useCallback((letter: string) => {
        if (gameState.gameOver) return;
        const letterIndex = ['A', 'B', 'C', 'D'].indexOf(letter);
        if (letterIndex !== -1) {
            handleBubbleClick(letterIndex);
        }
    }, [gameState.gameOver, handleBubbleClick]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const key = event.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(key)) {
            handleLetterClick(key);
        }
    }, [handleLetterClick]);

    const handleBubbleFall = useCallback((bubbleId: string) => {
        if (gameState.gameOver) return;
        
        setGameState(prev => {
            const updatedBubbles = prev.bubbles.map(bubble => 
                bubble.id === bubbleId ? { ...bubble, hasFallen: true } : bubble
            );
            
            const allBubblesHaveFallen = updatedBubbles.every(bubble => bubble.hasFallen);
            
            if (allBubblesHaveFallen) {
                const newQuestionIndex = prev.currentQuestionIndex + 1;
                const newScore = prev.score - 1;
                
                if (newQuestionIndex >= gameQuestions.length) {
                    return {
                        ...prev,
                        gameOver: true,
                        score: newScore,
                        currentQuestion: null,
                        bubbles: []
                    };
                }
                
                const nextQuestion = gameQuestions[newQuestionIndex];
                return {
                    ...prev,
                    score: newScore,
                    currentQuestionIndex: newQuestionIndex,
                    currentQuestion: nextQuestion,
                    bubbles: createBubbles(nextQuestion)
                };
            }
            
            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver, gameQuestions]);

    const restartGame = useCallback(() => {
        const randomQuestions = getRandomQuestions(questionsBySubject[subject]);
        const firstQuestion = randomQuestions[0];
        
        setGameQuestions(randomQuestions);
        setGameState({
            score: 0,
            currentQuestionIndex: 0,
            gameOver: false,
            bubbles: createBubbles(firstQuestion, 0),
            currentQuestion: firstQuestion
        });
    }, [subject]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return {
        ...gameState,
        handleBubbleClick,
        handleLetterClick,
        handleBubbleFall,
        restartGame
    };
};

export default useGame;