import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ onStartGame }) => {
    const [selectedSubject, setSelectedSubject] = useState('accounts');
    const [selectedGameType, setSelectedGameType] = useState('bubble');
    
    const subjects = [
        { id: 'accounts', name: 'Accounting', icon: '📚', description: 'Master accounting concepts and principles' },
        { id: 'physics', name: 'Physics', icon: '⚡', description: 'Explore the laws of the physical world' },
        { id: 'maths', name: 'Mathematics', icon: '🔢', description: 'Sharpen your mathematical skills' },
        { id: 'gk', name: 'General Knowledge', icon: '🌍', description: 'Test your knowledge across various topics' }
    ];

    const gameTypes = [
        { id: 'bubble', name: 'Bubble Pop', description: 'Pop the correct answer bubbles as they fall' },
        { id: 'dragdrop', name: 'Pick & Drop', description: 'Match pairs by dragging and dropping' }
    ];

    const handleStartGame = () => {
        onStartGame(selectedSubject, selectedGameType);
    };

    return (
        <div className="home-page">
            <div className="home-scroll-container">
                <div className="home-content">
                    <h1 className="title">Educational Games</h1>
                    <p className="subtitle">Learn While Having Fun!</p>
                    
                    <div className="game-type-selection">
                        <h2>Select Game Type</h2>
                        <div className="game-types">
                            {gameTypes.map((type) => (
                                <div
                                    key={type.id}
                                    className={`game-type-card ${selectedGameType === type.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedGameType(type.id)}
                                >
                                    <h3>{type.name}</h3>
                                    <p>{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>                    <div className="subject-selection">
                        <h2>Select Subject</h2>
                        {subjects.map((subject) => (
                            <div
                                key={subject.id}
                                className={`subject-card ${selectedSubject === subject.id ? 'selected' : ''}`}
                                onClick={() => setSelectedSubject(subject.id)}
                            >
                                <span className="subject-icon">{subject.icon}</span>
                                <h3>{subject.name}</h3>
                                <p>{subject.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="features">
                        <div className="feature-item">
                            <span className="feature-icon">📝</span>
                            <p>35+ Questions per Subject</p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🎯</span>
                            <p>Test Your Knowledge</p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">⚡</span>
                            <p>Quick-Paced Learning</p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🏆</span>
                            <p>Track Your Progress</p>
                        </div>
                    </div>

                    <button className="play-button" onClick={handleStartGame}>
                        <span className="play-icon">▶</span>
                        Play {selectedGameType === 'bubble' ? 'Bubble Pop' : 'Pick & Drop'}
                    </button>

                    <div className="instructions">
                        <h2>How to Play</h2>
                        {selectedGameType === 'bubble' ? (
                            <ul>
                                <li>Choose your preferred subject from the options above</li>
                                <li>Answer questions by clicking the correct bubble</li>
                                <li>Use A, B, C, D keys or click the buttons to select answers</li>
                                <li>Score points for correct answers (+4 for correct, -1 for wrong)</li>
                                <li>Watch out for falling bubbles - they fall faster as you progress!</li>
                                <li>Get a high score to improve your grade</li>
                                <li>Challenge yourself to master new concepts</li>
                            </ul>
                        ) : (
                            <ul>
                                <li>Choose your preferred subject from the options above</li>
                                <li>Match the correct pairs by dragging items from one column to another</li>
                                <li>Score points for correct matches (+4 for correct, -1 for wrong)</li>
                                <li>Complete all matches before the timer runs out</li>
                                <li>Get a high score to improve your grade</li>
                                <li>Challenge yourself to master new concepts</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

HomePage.propTypes = {
    onStartGame: PropTypes.func.isRequired
};

export default HomePage;