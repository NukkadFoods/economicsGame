import React, { useState } from 'react';

const HomePage = ({ onStartGame }) => {
    const [selectedSubject, setSelectedSubject] = useState('accounts');
    
    const subjects = [
        { id: 'accounts', name: 'Accounting', icon: '📚', description: 'Master accounting concepts and principles' },
        { id: 'physics', name: 'Physics', icon: '⚡', description: 'Explore the laws of the physical world' },
        { id: 'maths', name: 'Mathematics', icon: '🔢', description: 'Sharpen your mathematical skills' },
        { id: 'gk', name: 'General Knowledge', icon: '🌍', description: 'Test your knowledge across various topics' }
    ];

    const handleStartGame = () => {
        onStartGame(selectedSubject);
    };
    return (
        <div className="home-page">
            <div className="home-scroll-container">                <div className="home-content">
                    <h1 className="title">Educational Bubble Pop</h1>
                    <p className="subtitle">Learn While Having Fun!</p>
                    
                    <div className="subject-selection">
                        {subjects.map(subject => (
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
                        Play Now
                    </button>                    <div className="instructions">
                        <h2>How to Play</h2>
                        <ul>
                            <li>Choose your preferred subject from the options above</li>
                            <li>Answer questions by clicking the correct bubble</li>
                            <li>Use A, B, C, D keys or click the buttons to select answers</li>
                            <li>Score points for correct answers (+4 for correct, -1 for wrong)</li>
                            <li>Watch out for falling bubbles - they fall faster as you progress!</li>
                            <li>Get a high score to improve your grade</li>
                            <li>Challenge yourself to master new concepts</li>
                            <li>Try to get all questions right for maximum points</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
