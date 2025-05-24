import React from 'react';

const HomePage = ({ onStartGame }) => {
    return (
        <div className="home-page">
            <div className="home-scroll-container">
                <div className="home-content">
                    <h1 className="title">Accounting Bubble Pop</h1>
                    <p className="subtitle">Learn Accounting Concepts While Having Fun!</p>
                    
                    <div className="features">
                        <div className="feature-item">
                            <span className="feature-icon">📚</span>
                            <p>35+ Accounting Questions</p>
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

                    <button className="play-button" onClick={onStartGame}>
                        <span className="play-icon">▶</span>
                        Play Now
                    </button>

                    <div className="instructions">
                        <h2>How to Play</h2>
                        <ul>
                            <li>Answer accounting questions by clicking the correct bubble</li>
                            <li>Use A, B, C, D keys or click the buttons to select answers</li>
                            <li>Score points for correct answers (+4 for correct, -1 for wrong)</li>
                            <li>Watch out for falling bubbles - they fall faster as you progress!</li>
                            <li>Get a high score to improve your grade</li>
                            <li>Challenge yourself to learn accounting concepts</li>
                            <li>Try to get all questions right for maximum points</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
