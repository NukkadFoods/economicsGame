import React from 'react';
import Bubble from './Bubble';
import Cannon from './Cannon';
import QuestionDisplay from './QuestionDisplay';
import ScoreDisplay from './ScoreDisplay';
import GameOver from './GameOver';
import useGame from '../hooks/useGame';

const GameContainer = ({ onBackToHome }) => {    const {
        bubbles,
        score,
        currentQuestion,
        handleKeyPress,
        handleLetterClick,
        handleBubbleClick,
        handleBubbleFall,
        gameOver,
        restartGame
    } = useGame();

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    return (
        <div className="game-container">
            <button className="back-button" onClick={onBackToHome}>
                ←
            </button>
            <div className="game-header">
                <ScoreDisplay score={score} />
                {!gameOver && currentQuestion && (
                    <QuestionDisplay question={currentQuestion} />
                )}
            </div>
            
            {!gameOver ? (
                <>
                    <div className="game-area">
                        {bubbles.map((bubble, index) => (                            <Bubble
                                key={bubble.id}
                                id={bubble.id}
                                text={bubble.text}
                                position={bubble.position}
                                isCorrect={bubble.isCorrect}
                                isSelected={bubble.isSelected}
                                optionIndex={index}
                                fallSpeed={bubble.fallSpeed}
                                onClick={() => handleBubbleClick(index)}
                                onFall={handleBubbleFall}
                            />
                        ))}
                    </div>
                    <Cannon onLetterClick={handleLetterClick} />
                </>
            ) : (
                <GameOver score={score} onRestart={restartGame} />
            )}
        </div>
    );
};

export default GameContainer;