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
        
        const touch = e.touches[0];
        if (!touch) return;

        const item = e.target.closest('.matching-item');
        if (!item) return;

        // Don't start drag if item is already matched
        if (item.classList.contains('correct') || item.classList.contains('incorrect')) return;

        const dot = item.querySelector(`.connection-dot.${fromType === 'option' ? 'front' : 'back'}`);
        if (!dot) return;

        // Add dragging class to the item
        item.classList.add('dragging');

        // Get the starting point for the line
        const rect = svgRef.current.getBoundingClientRect();
        const touchX = dot.offsetLeft + dot.offsetWidth / 2;
        const touchY = dot.offsetTop + dot.offsetHeight / 2;

        // Set dragging state with the correct starting point
        setGameState(prev => ({
            ...prev,
            dragging: {
                fromType,
                id,
                startPoint: {
                    x: touchX - rect.left,
                    y: touchY - rect.top
                }
            }
        }));
    }, []);

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
        // Remove hover and dragging classes
        document.querySelectorAll('.matching-item').forEach(item => {
            item.classList.remove('touch-hover', 'dragging');
        });

        if (!gameState.dragging) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        let dropId = id;
        let dropType = toType;

        // Handle touch events
        if (e.type.startsWith('touch')) {
            const touch = e.changedTouches[0];
            if (!touch) {
                setGameState(prev => ({ ...prev, dragging: null }));
                return;
            }

            // Find the element under the touch point
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            if (!targetElement) {
                setGameState(prev => ({ ...prev, dragging: null }));
                return;
            }

            // Find the matching item we're dropping on
            const matchingItem = targetElement.closest('.matching-item');
            if (!matchingItem) {
                setGameState(prev => ({ ...prev, dragging: null }));
                return;
            }

            // Get the type and ID from the matching item
            const actualType = matchingItem.classList.contains('option-item') ? 'option' : 'question';
            const expectedType = gameState.dragging.fromType === 'question' ? 'option' : 'question';

            // Only proceed if dropping on the correct type
            if (actualType !== expectedType || actualType === gameState.dragging.fromType) {
                setGameState(prev => ({ ...prev, dragging: null }));
                return;
            }

            dropId = matchingItem.id.split('-')[1];
            dropType = actualType;
        }

        // Don't allow dropping on the same type
        if (gameState.dragging.fromType === dropType) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        // Determine question and option IDs based on the drag source and drop target
        const questionId = dropType === 'question' ? dropId : gameState.dragging.id;
        const optionId = dropType === 'option' ? dropId : gameState.dragging.id;

        // Find the matching items
        const question = gameState.questions.find(q => q.id === parseInt(questionId));
        const option = gameState.options.find(o => o.id === parseInt(optionId));

        // Validate the connection
        if (!question || !option || question.isMatched || option.isMatched) {
            setGameState(prev => ({ ...prev, dragging: null }));
            return;
        }

        const isCorrect = question.correctAnswer === option.text;

        // Update game state with new connection
        setGameState(prev => {
            // Calculate new score first
            const scoreChange = isCorrect ? 4 : -1;
            const newScore = Math.max(0, prev.score + scoreChange);

            // Update questions and options state
            const newQuestions = prev.questions.map(q =>
                q.id === parseInt(questionId) ? { ...q, isMatched: isCorrect } : q
            );

            const newOptions = prev.options.map(o =>
                o.id === parseInt(optionId) ? { ...o, isMatched: isCorrect } : o
            );

            // Add new connection
            const newConnections = [
                ...prev.connections,
                { questionId: parseInt(questionId), optionId: parseInt(optionId), isCorrect }
            ];

            // Calculate game over condition based on correct matches only
            const correctMatchesCount = newConnections.filter(conn => conn.isCorrect).length;
            const allQuestionsMatched = correctMatchesCount === prev.questions.length;

            console.log('Score:', newScore, 'Correct matches:', correctMatchesCount, 
                'Total questions:', prev.questions.length, 'Game over:', allQuestionsMatched);

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
    }, [gameState]);

    const handleMouseMove = useCallback((e) => {
        if (!gameState.dragging || !svgRef.current) return;
        const svgRect = svgRef.current.getBoundingClientRect();
        handleDragMove({
            x: Math.max(0, Math.min(e.clientX - svgRect.left, svgRect.width)),
            y: Math.max(0, Math.min(e.clientY - svgRect.top, svgRect.height))
        });
    }, [gameState.dragging, handleDragMove]);    const handleTouchMove = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!gameState.dragging || !svgRef.current) return;
        
        const touch = e.touches[0];
        if (!touch) return;
        
        const svgRect = svgRef.current.getBoundingClientRect();
        const point = {
            x: Math.max(0, Math.min(touch.clientX - svgRect.left, svgRect.width)),
            y: Math.max(0, Math.min(touch.clientY - svgRect.top, svgRect.height))
        };

        // Update the dragging line
        const line = document.getElementById('draggingLine');
        if (line) {
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
        }
        
        // Visual feedback - highlight potential target
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetElement) {
            const matchingItem = targetElement.closest('.matching-item');
            if (matchingItem) {
                // Check if this is a valid drop target (opposite type and not already matched)
                const itemType = matchingItem.classList.contains('option-item') ? 'option' : 'question';
                const isValidTarget = itemType !== gameState.dragging.fromType && 
                                    !matchingItem.classList.contains('correct') &&
                                    !matchingItem.classList.contains('incorrect');
                
                // Update hover states
                document.querySelectorAll('.matching-item').forEach(item => 
                    item.classList.remove('touch-hover')
                );
                
                if (isValidTarget) {
                    matchingItem.classList.add('touch-hover');
                }
            }
        } else {
            // Remove all hover states if not over any target
            document.querySelectorAll('.matching-item').forEach(item => 
                item.classList.remove('touch-hover')
            );
        }
    }, [gameState.dragging]);

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