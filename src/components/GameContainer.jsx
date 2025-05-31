import React, { useEffect, useState } from 'react';
import Bubble from './Bubble';
import Cannon from './Cannon';
import QuestionDisplay from './QuestionDisplay';
import ScoreDisplay from './ScoreDisplay';
import GameOver from './GameOver';
import useGame from '../hooks/useGame.new.ts';

// Display an error if loading takes too long
const LOADING_TIMEOUT = 5000;

const GameContainer = ({ onBackToHome, subject }) => {
    console.log('GameContainer rendering with subject:', subject);

    const {
        bubbles,
        score,
        currentQuestion,
        gameOver,
        handleBubbleClick: handleBubbleAction,
        handleBubbleFall,
        handleLetterClick,
        restartGame
    } = useGame(subject);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log('GameContainer useEffect triggered');
        console.log('Current question:', currentQuestion);
        console.log('Bubbles:', bubbles);
        console.log('Game over:', gameOver);

        const timer = setTimeout(() => {
            if (!currentQuestion) {
                console.error('Questions failed to load after timeout');
                setError('Failed to load questions. Please try again.');
            }
            setIsLoading(false);
        }, LOADING_TIMEOUT);

        if (currentQuestion) {
            console.log('Question loaded successfully:', currentQuestion);
            setIsLoading(false);
            setError(null);
        }

        return () => clearTimeout(timer);
    }, [subject, currentQuestion, bubbles, gameOver]);

    const handleBubbleClick = (index) => {
        handleBubbleAction(index);
    };    return (
        <div className="game-container">
            <button className="back-to-home-btn" onClick={onBackToHome}>
                <span className="home-icon">&#8592;</span>
                Back to Home
            </button>
            <ScoreDisplay score={score} />

            {/* Loading state */}
            {isLoading && (
                <div className="loading-message">Loading questions...</div>
            )}

            {/* Error state */}
            {error && (
                <div className="error-message">{error}</div>
            )}

            {/* Question display */}
            {!isLoading && !error && currentQuestion && !gameOver && (
                <QuestionDisplay question={currentQuestion.question} />
            )}
            
            {!gameOver ? (
                <>                    <div className="game-area">
                        {bubbles && bubbles.map((bubble, index) => (
                            <Bubble
                                key={bubble.id}
                                {...bubble}
                                optionIndex={index}
                                onClick={() => handleBubbleClick(index)}
                                onFall={() => handleBubbleFall(bubble.id)}
                            />
                        ))}
                    </div>
                    <Cannon onLetterClick={handleLetterClick} />
                </>
            ) : (
                <GameOver
                    score={score}
                    onRestart={restartGame}
                    onBackToHome={onBackToHome}
                />
            )}
        </div>
    );
};

export default GameContainer;