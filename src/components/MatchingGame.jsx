import React, { useState, useEffect, useRef, useCallback } from 'react';
import { questionsBySubject } from '../data/allQuestions';
import ScoreDisplay from './ScoreDisplay';
import GameOver from './GameOver';
import '../styles/matching-game.css';

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

    const initializeGame = useCallback(() => {
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
    }, [subject]);    // Initialize game on mount or subject change    
    useEffect(() => {
        initializeGame();
    }, [initializeGame]);

    const handleRestart = useCallback(() => {
        initializeGame();
    }, [initializeGame]);

    const getConnectionPoints = useCallback((item, fromType) => {
        if (!svgRef.current || !item) return null;
        const svgRect = svgRef.current.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const dot = item.querySelector(`.connection-dot.${fromType === 'option' ? 'front' : 'back'}`);
        const dotRect = dot ? dot.getBoundingClientRect() : itemRect;
        
        return {
            x: fromType === 'option' ? dotRect.left - svgRect.left + dotRect.width / 2 : dotRect.right - svgRect.left - dotRect.width / 2,
            y: dotRect.top - svgRect.top + dotRect.height / 2
        };
    }, []);

    const handleDragStart = useCallback((e, fromType, id) => {
        const isAlreadyMatched = fromType === 'question' 
            ? gameState.questions.find(q => q.id === id)?.isMatched
            : gameState.options.find(o => o.id === id)?.isMatched;
        
        if (isAlreadyMatched) return;

        const item = e.target.closest('.matching-item');
        if (!item) return;

        const dot = item.querySelector(`.connection-dot.${fromType === 'option' ? 'front' : 'back'}`);
        if (!dot) return;

        const startPoint = getConnectionPoints(item, fromType);
        if (!startPoint) return;

        // Add active state class
        item.classList.add('dragging');

        setGameState(prev => ({
            ...prev,
            dragging: { fromType, id, startPoint }
        }));
    }, [gameState.questions, gameState.options, getConnectionPoints]);    const handleTouchStart = useCallback((e, fromType, id) => {
        e.preventDefault(); // Prevent scrolling while dragging
        e.stopPropagation(); // Stop event bubbling
        
        const touch = e.touches[0] || e.changedTouches[0];
        if (!touch) return;

        const item = e.target.closest('.matching-item');
        if (!item) return;

        // Don't start drag if item is already matched correctly
        const isMatched = item.classList.contains('correct');
        if (isMatched) return;

        const dot = item.querySelector(`.connection-dot.${fromType === 'option' ? 'front' : 'back'}`);
        if (!dot) return;

        // Add dragging class to the item
        item.classList.add('dragging');

        // Create a synthetic event with client coordinates from the touch
        const syntheticEvent = {
            target: dot,
            clientX: touch.clientX,
            clientY: touch.clientY
        };

        handleDragStart(syntheticEvent, fromType, id);
    }, [handleDragStart]);

    const handleDragMove = useCallback((point) => {
        if (!gameState.dragging || !svgRef.current) return;
        
        const line = document.getElementById('draggingLine');
        if (!line) return;

        if (gameState.dragging.fromType === 'option') {
            line.setAttribute('x1', String(gameState.dragging.startPoint.x));
            line.setAttribute('y1', String(gameState.dragging.startPoint.y));
            line.setAttribute('x2', String(point.x));
            line.setAttribute('y2', String(point.y));
        } else {
            line.setAttribute('x1', String(point.x));
            line.setAttribute('y1', String(point.y));
            line.setAttribute('x2', String(gameState.dragging.startPoint.x));
            line.setAttribute('y2', String(gameState.dragging.startPoint.y));
        }
    }, [gameState.dragging]);    const handleDragEnd = useCallback((e, toType, id) => {
        // Remove any touch-hover classes first
        document.querySelectorAll('.matching-item').forEach(item => 
            item.classList.remove('touch-hover')
        );

        if (!gameState.dragging || gameState.dragging.fromType === toType) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }
        
        // For touch events, find the element we're hovering over
        if (e.type.startsWith('touch')) {
            const touch = e.changedTouches[0];
            if (touch) {
                const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                if (targetElement) {
                    const matchingItem = targetElement.closest('.matching-item');
                    if (matchingItem) {
                        // Get the opposite type from what we started dragging
                        const expectedType = gameState.dragging.fromType === 'question' ? 'option' : 'question';
                        const actualType = matchingItem.classList.contains('option-item') ? 'option' : 'question';
                        
                        // Only proceed if we're dropping on the correct type
                        if (actualType === expectedType) {
                            id = matchingItem.id.split('-')[1];
                            toType = actualType;
                        } else {
                            setGameState(prev => ({ ...prev, dragging: null }));
                            return;
                        }
                    } else {
                        setGameState(prev => ({ ...prev, dragging: null }));
                        return;
                    }
                } else {
                    setGameState(prev => ({ ...prev, dragging: null }));
                    return;
                }
            } else {
                setGameState(prev => ({ ...prev, dragging: null }));
                return;
            }
        }

        const questionId = toType === 'question' ? id : gameState.dragging.id;
        const optionId = toType === 'option' ? id : gameState.dragging.id;

        const question = gameState.questions.find(q => q.id === questionId);
        const option = gameState.options.find(o => o.id === optionId);

        if (!question || !option || question.isMatched || option.isMatched) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        const isCorrect = question.correctAnswer === option.text;
        
        setGameState(prev => {
            // Calculate new score first
            const scoreChange = isCorrect ? 4 : -1;
            const newScore = Math.max(0, prev.score + scoreChange);

            // Update questions and options state
            const newQuestions = prev.questions.map(q =>
                q.id === questionId ? { ...q, isMatched: isCorrect } : q
            );

            const newOptions = prev.options.map(o =>
                o.id === optionId ? { ...o, isMatched: isCorrect } : o
            );

            // Add new connection
            const newConnections = [
                ...prev.connections,
                { questionId, optionId, isCorrect }
            ];

            // Calculate game over condition based on correct matches only
            const correctMatchesCount = newConnections.filter(conn => conn.isCorrect).length;
            const allQuestionsMatched = correctMatchesCount === prev.questions.length;

            console.log('Score:', newScore, 'Correct matches:', correctMatchesCount, 'Total questions:', prev.questions.length, 'Game over:', allQuestionsMatched);

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
    }, [gameState.dragging, gameState.questions, gameState.options]);    const handleMouseMove = useCallback((e) => {
        if (!gameState.dragging || !svgRef.current) return;
        const svgRect = svgRef.current.getBoundingClientRect();
        handleDragMove({
            x: Math.max(0, Math.min(e.clientX - svgRect.left, svgRect.width)),
            y: Math.max(0, Math.min(e.clientY - svgRect.top, svgRect.height))
        });
    }, [gameState.dragging, handleDragMove]);    const handleTouchMove = useCallback((e) => {
        e.preventDefault();
        if (!gameState.dragging || !svgRef.current) return;
        
        const touch = e.touches[0] || e.changedTouches[0];
        if (!touch) return;
        
        const svgRect = svgRef.current.getBoundingClientRect();
        const point = {
            x: Math.max(0, Math.min(touch.clientX - svgRect.left, svgRect.width)),
            y: Math.max(0, Math.min(touch.clientY - svgRect.top, svgRect.height))
        };
        
        // Update the dragging line
        handleDragMove(point);
        
        // Visual feedback - highlight potential target
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetElement) {
            const matchingItem = targetElement.closest('.matching-item');
            if (matchingItem) {
                // Only highlight valid drop targets (opposite type from what we're dragging)
                const itemType = matchingItem.classList.contains('option-item') ? 'option' : 'question';
                if (itemType !== gameState.dragging.fromType && !matchingItem.classList.contains('correct')) {
                    document.querySelectorAll('.matching-item').forEach(item => 
                        item.classList.remove('touch-hover')
                    );
                    matchingItem.classList.add('touch-hover');
                }
            }
        } else {
            // Remove highlight if not over a valid target
            document.querySelectorAll('.matching-item').forEach(item => 
                item.classList.remove('touch-hover')
            );
        }
    }, [gameState.dragging, handleDragMove]);

    useEffect(() => {
        if (!gameState.dragging) return;
        
        const handleGlobalMouseMove = (e) => handleMouseMove(e);
        const handleGlobalMouseUp = () => setGameState(prev => ({ ...prev, dragging: null }));
        const handleGlobalTouchMove = (e) => handleTouchMove(e);
        const handleGlobalTouchEnd = () => setGameState(prev => ({ ...prev, dragging: null }));

        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
        document.addEventListener('touchend', handleGlobalTouchEnd);
        document.addEventListener('touchcancel', handleGlobalTouchEnd);

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('touchmove', handleGlobalTouchMove);
            document.removeEventListener('touchend', handleGlobalTouchEnd);
            document.removeEventListener('touchcancel', handleGlobalTouchEnd);
        };
    }, [gameState.dragging, handleMouseMove, handleTouchMove]);

    return (
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
                        {gameState.questions.map((item, index) => {
                            const connection = gameState.connections.find(conn => conn.questionId === item.id);
                            const className = connection ? (connection.isCorrect ? 'correct' : 'incorrect') : '';
                            
                            return (
                                <div
                                    id={`question-${item.id}`}
                                    key={item.id}
                                    className={`matching-item ${className}`}
                                    onMouseDown={(e) => handleDragStart(e, 'question', item.id)}
                                    onMouseUp={(e) => handleDragEnd(e, 'question', item.id)}
                                    onTouchStart={(e) => handleTouchStart(e, 'question', item.id)}
                                    onTouchEnd={(e) => handleDragEnd(e, 'question', item.id)}
                                >
                                    <div className="item-content">
                                        <span className="item-number">{index + 1}.</span>
                                        {item.question}
                                    </div>
                                    <span className="connection-dot back"></span>
                                </div>
                            );
                        })}
                    </div>

                    <svg ref={svgRef} className="connections-svg">
                        {gameState.connections.map(conn => {
                            const questionEl = document.getElementById(`question-${conn.questionId}`);
                            const optionEl = document.getElementById(`option-${conn.optionId}`);
                            if (!questionEl || !optionEl) return null;
                            
                            const startPoint = getConnectionPoints(optionEl, 'option');
                            const endPoint = getConnectionPoints(questionEl, 'question');
                            if (!startPoint || !endPoint) return null;

                            return (
                                <line
                                    key={`${conn.questionId}-${conn.optionId}`}
                                    x1={startPoint.x}
                                    y1={startPoint.y}
                                    x2={endPoint.x}
                                    y2={endPoint.y}
                                    className={`connection-line ${conn.isCorrect ? 'correct' : 'incorrect'}`}
                                />
                            );
                        })}
                        {gameState.dragging && (
                            <line 
                                id="draggingLine"
                                className="connection-line dragging"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="0"
                            />
                        )}
                    </svg>

                    <div className="column options">
                        {gameState.options.map((item) => {
                            const connection = gameState.connections.find(conn => conn.optionId === item.id);
                            const className = connection ? (connection.isCorrect ? 'correct' : 'incorrect') : '';
                            
                            return (
                                <div
                                    id={`option-${item.id}`}
                                    key={item.id}
                                    className={`matching-item option-item ${className}`}
                                    onMouseDown={(e) => handleDragStart(e, 'option', item.id)}
                                    onMouseUp={(e) => handleDragEnd(e, 'option', item.id)}
                                    onTouchStart={(e) => handleTouchStart(e, 'option', item.id)}
                                    onTouchEnd={(e) => handleDragEnd(e, 'option', item.id)}
                                >
                                    <span className="connection-dot front"></span>
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