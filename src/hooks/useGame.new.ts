import { useState, useCallback, useEffect } from 'react';
import { questionsBySubject } from '../data/allQuestions';

const INITIAL_FALL_SPEED = 15; // Increased by 1.5x to make bubbles fall slower
const SPEED_INCREASE_PER_QUESTION = 0.5; // Adjusted to maintain relative acceleration rate with new base speed

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

const getRandomQuestions = (subjectQuestions: Question[], count = 10): Question[] => {
    if (!Array.isArray(subjectQuestions) || subjectQuestions.length === 0) {
        console.error('No questions available:', subjectQuestions);
        return [];
    }
    console.log(`Total questions before shuffle: ${subjectQuestions.length}`);
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    console.log(`Selected ${selected.length} questions`);
    return selected;
};

const createBubbles = (question: Question | null, currentQuestionIndex: number): Bubble[] => {    if (!question || !Array.isArray(question.options)) return [];      
    const spacing = -6; // Minimal spacing between bubbles
    const startX = 13; // Negative value to move bubbles more to the left
    
    return question.options.map((option, index) => ({
        id: `bubble-${Date.now()}-${index}`,
        text: option,
        position: {
            x: startX + (index * (50 - spacing * 2) / 3), // Using only 50% of screen width to keep bubbles far left
            y: -20
        },
        fallSpeed: Math.random() * 0.15 + INITIAL_FALL_SPEED - (currentQuestionIndex * SPEED_INCREASE_PER_QUESTION),
        isCorrect: index === question.correct,
        isSelected: false,
        isExploding: false,
        hasFallen: false
    }));
};

const useGame = (subject = 'accounts') => {
    // Initialize game questions and state
    const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
    const [gameState, setGameState] = useState<GameState>({
        score: 0,
        currentQuestionIndex: 0,
        gameOver: false,
        bubbles: [],
        currentQuestion: null
    });

    // Reset game when subject changes
    useEffect(() => {
        console.log('Subject changed to:', subject);
        const questions = questionsBySubject[subject] || questionsBySubject.accounts;
        console.log(`Found ${questions?.length || 0} questions for ${subject}`);
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

        // Create initial bubbles after we have our first question
        setGameState({
            score: 0,
            currentQuestionIndex: 0,
            gameOver: false,
            bubbles: createBubbles(firstQuestion, 0),
            currentQuestion: firstQuestion
        });
    }, [subject]);

    const generateBubbles = useCallback((question: Question | null): Bubble[] => {
        return createBubbles(question, gameState.currentQuestionIndex);
    }, [gameState.currentQuestionIndex]);

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
                    return {
                        ...prev,
                        score: newScore,
                        currentQuestionIndex: newQuestionIndex,
                        currentQuestion: nextQuestion,
                        bubbles: generateBubbles(nextQuestion)
                    };
                });
            }, 1000);

            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver, generateBubbles, gameQuestions]);

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

    const restartGame = useCallback(() => {
        const questions = questionsBySubject[subject] || questionsBySubject.accounts;
        const newQuestions = getRandomQuestions(questions);
        const firstQuestion = newQuestions[0];
        
        if (!firstQuestion) {
            console.error('No questions available for restart');
            return;
        }

        setGameQuestions(newQuestions);
        setGameState({
            score: 0,
            currentQuestionIndex: 0,
            gameOver: false,
            bubbles: createBubbles(firstQuestion, 0),
            currentQuestion: firstQuestion
        });
    }, [subject]);

    const handleBubbleFall = useCallback((bubbleId: string) => {
        if (gameState.gameOver) return;

        setGameState(prev => {
            const updatedBubbles = prev.bubbles.map(bubble => 
                bubble.id === bubbleId && !bubble.hasFallen 
                    ? { ...bubble, hasFallen: true }
                    : bubble
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
                    bubbles: generateBubbles(nextQuestion)
                };
            }

            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver, generateBubbles, gameQuestions]);

    useEffect(() => {
        // Add keyboard event listener
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return {
        ...gameState,
        handleKeyPress,
        handleLetterClick,
        handleBubbleClick,
        handleBubbleFall,
        restartGame
    };
};

export default useGame;