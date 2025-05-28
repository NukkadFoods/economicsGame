import React, { useState, useEffect, useRef } from 'react';
import { questionsBySubject } from '../data/allQuestions';
import ScoreDisplay from './ScoreDisplay';
import GameOver from './GameOver';

const MatchingGame = ({ subject, onBackToHome }) => {
    const [gameState, setGameState] = useState({
        score: 0,
        questions: [],
        options: [],
        connections: [],
        dragging: null,
        gameOver: false
    });
    
    const svgRef = useRef(null);

    const initializeGame = () => {
        const selectedSubject = subject || 'accounts';
        const allQuestions = questionsBySubject[selectedSubject] || questionsBySubject.accounts;
        
        if (!allQuestions || !Array.isArray(allQuestions)) {
            console.error('No valid questions found for subject:', subject);
            return;
        }

        // Randomly select 8 questions
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffledQuestions.slice(0, 8).map((q, index) => ({
            id: index,
            question: q.question,
            correctAnswer: q.options[q.correct !== undefined ? q.correct : q.correctOption],
            isMatched: false
        }));

        // Create and shuffle options
        const shuffledOptions = selectedQuestions.map((q, index) => ({
            id: index,
            text: q.correctAnswer,
            isMatched: false
        })).sort(() => Math.random() - 0.5);

        setGameState(prev => ({
            ...prev,
            questions: selectedQuestions,
            options: shuffledOptions,
            connections: [],
            score: 0,
            gameOver: false
        }));
    };

    // Initialize game on mount or subject change
    useEffect(() => {
        initializeGame();
    }, [subject]);

    const handleRestart = () => {
        initializeGame();
    };

    const handleItemClick = (item) => {
        if (gameState.matchedPairs.has(item.id)) return;

        if (!gameState.selectedItem) {
            // First selection
            setGameState(prev => ({ ...prev, selectedItem: item }));
        } else if (gameState.selectedItem.id === item.id && gameState.selectedItem.type !== item.type) {
            // Successful match
            setGameState(prev => ({
                ...prev,
                score: prev.score + 4,
                selectedItem: null,
                matchedPairs: new Set([...prev.matchedPairs, item.id])
            }));

            // Check if game is over
            if (gameState.matchedPairs.size === gameState.pairs.length / 2 - 1) {
                setGameState(prev => ({ ...prev, gameOver: true }));
            }
        } else {
            // Wrong match
            setGameState(prev => ({
                ...prev,
                score: prev.score - 1,
                selectedItem: null
            }));
        }
    };    const handleDragStart = (e, fromType, id) => {
        // Prevent dragging if item is already matched
        const isAlreadyMatched = fromType === 'question' 
            ? gameState.questions.find(q => q.id === id)?.isMatched
            : gameState.options.find(o => o.id === id)?.isMatched;
        
        if (isAlreadyMatched) return;

        const dot = e.target;
        const dotRect = dot.getBoundingClientRect();
        const svgRect = svgRef.current.getBoundingClientRect();
        
        const startPoint = {
            x: dotRect.left - svgRect.left + dotRect.width / 2,
            y: dotRect.top - svgRect.top + dotRect.height / 2
        };
        
        setGameState(prev => ({
            ...prev,
            dragging: { fromType, id, startPoint }
        }));
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (gameState.dragging) {
                handleDragMove(e);
            }
        };

        const handleMouseUp = () => {
            setGameState(prev => ({ ...prev, dragging: null }));
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [gameState.dragging]);

    const handleDragMove = (e) => {
        if (!gameState.dragging || !svgRef.current) return;

        const svgRect = svgRef.current.getBoundingClientRect();
        const currentPoint = {
            x: Math.max(0, Math.min(e.clientX - svgRect.left, svgRect.width)),
            y: Math.max(0, Math.min(e.clientY - svgRect.top, svgRect.height))
        };

        const line = document.getElementById('draggingLine');
        if (line) {
            if (gameState.dragging.fromType === 'option') {
                line.setAttribute('x1', gameState.dragging.startPoint.x);
                line.setAttribute('y1', gameState.dragging.startPoint.y);
                line.setAttribute('x2', currentPoint.x);
                line.setAttribute('y2', currentPoint.y);
            } else {
                line.setAttribute('x1', currentPoint.x);
                line.setAttribute('y1', currentPoint.y);
                line.setAttribute('x2', gameState.dragging.startPoint.x);
                line.setAttribute('y2', gameState.dragging.startPoint.y);
            }
        }
    };

    const handleDragEnd = (e, toType, id) => {
        if (!gameState.dragging || gameState.dragging.fromType === toType) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        const questionId = toType === 'question' ? id : gameState.dragging.id;
        const optionId = toType === 'option' ? id : gameState.dragging.id;

        const question = gameState.questions.find(q => q.id === questionId);
        const option = gameState.options.find(o => o.id === optionId);

        if (!question || !option) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        // Check if either item is already matched
        if (question.isMatched || option.isMatched) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        const isCorrect = question.correctAnswer === option.text;
        const newScore = isCorrect ? gameState.score + 4 : Math.max(0, gameState.score - 1);
        
        setGameState(prev => {
            const newQuestions = prev.questions.map(q =>
                q.id === questionId ? { ...q, isMatched: isCorrect } : q
            );

            const newOptions = prev.options.map(o =>
                o.id === optionId ? { ...o, isMatched: isCorrect } : o
            );

            const newConnections = [
                ...prev.connections,
                { questionId, optionId, isCorrect }
            ];

            const correctMatches = newConnections.filter(conn => conn.isCorrect).length;
            const allQuestionsMatched = correctMatches === prev.questions.length;

            return {
                ...prev,
                score: newScore,
                dragging: null,
                questions: newQuestions,
                options: newOptions,
                connections: newConnections,
                gameOver: allQuestionsMatched
            };
        });
    };

    const getConnectionPoints = (questionId, optionId) => {
        const svgRect = svgRef.current.getBoundingClientRect();
        const questionElement = document.getElementById(`question-${questionId}`);
        const optionElement = document.getElementById(`option-${optionId}`);

        if (!questionElement || !optionElement || !svgRect) return null;

        const questionDot = questionElement.querySelector('.connection-dot.back');
        const optionDot = optionElement.querySelector('.connection-dot.front');

        if (!questionDot || !optionDot) return null;

        const questionRect = questionDot.getBoundingClientRect();
        const optionRect = optionDot.getBoundingClientRect();

        return {
            x1: optionRect.left - svgRect.left + optionRect.width / 2,
            y1: optionRect.top - svgRect.top + optionRect.height / 2,
            x2: questionRect.left - svgRect.left + questionRect.width / 2,
            y2: questionRect.top - svgRect.top + questionRect.height / 2
        };
    };    const restartGame = () => {
        // The useEffect will handle re-initialization when we reset these values
        setGameState(prev => ({
            ...prev,
            questions: [],
            options: [],
            connections: [],
            score: 0,
            dragging: null,
            gameOver: false
        }));
    };    return (
        <div className="matching-game">
            <button className="back-to-home-btn" onClick={onBackToHome}>
                <span className="home-icon">←</span>
                Back to Home
            </button>
            
            <ScoreDisplay score={gameState.score} />

            {gameState.gameOver ? (
                <GameOver 
                    score={gameState.score}
                    onRestart={handleRestart}
                    onBackToHome={onBackToHome}
                />
            ) : (
                <div className="matching-container">
                    <div className="column questions">
                        {gameState.questions.map((item, index) => {                            const connection = gameState.connections.find(conn => conn.questionId === item.id);
                            const className = connection
                                ? connection.isCorrect ? 'correct' : 'incorrect'
                                : '';
                            
                            return (
                                <div
                                    id={`question-${item.id}`}
                                    key={item.id}
                                    className={`matching-item ${className}`}
                                    onMouseUp={(e) => handleDragEnd(e, 'question', item.id)}
                                >
                                    <div className="item-content">
                                        <span className="item-number">{index + 1}.</span>
                                        {item.question}
                                    </div>
                                    <span 
                                        className="connection-dot back"
                                        onMouseDown={(e) => handleDragStart(e, 'question', item.id)}
                                    ></span>
                                </div>
                            );
                        })}
                    </div>

                    <svg ref={svgRef} className="connections-svg">
                        {gameState.connections.map(conn => {
                            const points = getConnectionPoints(conn.questionId, conn.optionId);
                            return points && (
                                <line
                                    key={`${conn.questionId}-${conn.optionId}`}
                                    {...points}
                                    className={`connection-line ${conn.isCorrect ? 'correct' : 'incorrect'}`}
                                />
                            );
                        })}
                        {gameState.dragging && (
                            <line 
                                id="draggingLine" 
                                className="connection-line dragging"
                            />
                        )}
                    </svg>

                    <div className="column options">
                        {gameState.options.map((item) => {                            const connection = gameState.connections.find(conn => conn.optionId === item.id);
                            const className = connection
                                ? connection.isCorrect ? 'correct' : 'incorrect'
                                : '';
                            
                            return (
                                <div
                                    id={`option-${item.id}`}
                                    key={item.id}
                                    className={`matching-item option-item ${className}`}
                                    onMouseUp={(e) => handleDragEnd(e, 'option', item.id)}
                                >
                                    <span 
                                        className="connection-dot front"
                                        onMouseDown={(e) => handleDragStart(e, 'option', item.id)}
                                    ></span>
                                    <div className="item-content">
                                        {item.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchingGame;
