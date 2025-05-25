import React, { useEffect, useState } from 'react';

const GameOver = ({ score, onRestart, onBackToHome }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    
    useEffect(() => {
        setShowConfetti(true);
        return () => setShowConfetti(false);
    }, []);

    const handleRestart = () => {
        setShowConfetti(false);
        onRestart();
    };

    const handleBackToHome = () => {
        setShowConfetti(false);
        onBackToHome();
    };

    const getMessage = (score) => {
        if (score >= 35) return "Outstanding! You're a Master!";
        if (score >= 30) return "Excellent! You're an Expert!";
        if (score >= 25) return "Great job! You have exceptional knowledge!";
        if (score >= 20) return "Well done! You have strong skills!";
        if (score >= 15) return "Good effort! Keep enhancing your expertise!";
        if (score >= 10) return "Nice try! Keep practicing!";
        return "Keep learning! Every journey starts with a first step!";
    };

    const getGrade = (score) => {
        if (score >= 35) return { grade: "A+", color: "#FFD700" };
        if (score >= 30) return { grade: "A", color: "#FFA500" };
        if (score >= 25) return { grade: "B", color: "#32CD32" };
        if (score >= 20) return { grade: "C", color: "#4169E1" };
        if (score >= 15) return { grade: "D", color: "#8B4513" };
        return { grade: "E", color: "#CD5C5C" };
    };

    const gradeInfo = getGrade(score);

    return (
        <div className="game-over">
            {showConfetti && score >= 20 && (
                <div className="confetti-container">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="confetti" 
                            style={{ 
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                backgroundColor: ['#FFD700', '#FFA500', '#32CD32', '#4169E1'][Math.floor(Math.random() * 4)]
                            }} 
                        />
                    ))}
                </div>
            )}
            
            <div className="game-over-content">
                <div className="result-header">
                    <h1>Game Over!</h1>
                </div>
                
                <div className="score-section">
                    <div className="score-circle">
                        <span className="final-score">{score}</span>
                        <span className="points-text">points</span>
                    </div>

                    <div className="grade-badge" style={{ backgroundColor: gradeInfo.color }}>
                        <div className="grade-shine"></div>
                        {gradeInfo.grade}
                    </div>
                </div>

                <div className="message-section">
                    <p className="message-text">{getMessage(score)}</p>
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-label">Final Score</span>
                        <span className="stat-value">{score}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Grade</span>
                        <span className="stat-value">{gradeInfo.grade}</span>
                    </div>
                </div>

                <button className="restart-btn" onClick={handleRestart}>
                    <span className="restart-icon">↺</span>
                    Play Again
                </button>

                <button className="back-to-home-btn" onClick={handleBackToHome}>
                    <span className="home-icon">←</span>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default GameOver;
