import React, { useEffect, useState } from 'react';

const GameOver = ({ score, onRestart }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    
    useEffect(() => {
        setShowConfetti(true);
        return () => setShowConfetti(false);
    }, []);

    const getMessage = (score) => {
        if (score >= 35) return "Outstanding! You're a Master of Accounting!";
        if (score >= 30) return "Excellent! You're an Accounting Expert!";
        if (score >= 25) return "Great job! You have exceptional accounting knowledge!";
        if (score >= 20) return "Well done! You have strong accounting skills!";
        if (score >= 15) return "Good effort! Keep enhancing your accounting expertise!";
        if (score >= 10) return "Nice try! Keep practicing your accounting concepts!";
        return "Keep learning! Every accounting journey starts with a first step!";
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
            {showConfetti && score >= 20 && <div className="confetti-container">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="confetti" 
                         style={{ 
                             left: `${Math.random() * 100}%`,
                             animationDelay: `${Math.random() * 3}s`,
                             backgroundColor: ['#FFD700', '#FFA500', '#32CD32', '#4169E1'][Math.floor(Math.random() * 4)]
                         }} 
                    />
                ))}
            </div>}
            
            <div className="game-over-content">
                <div className="result-header">
                    <h1 className="text-5xl font-bold mb-8 text-white animate-title">Game Over!</h1>
                </div>
                
                <div className="score-section mb-8 animate-score">
                    <div className="score-circle">
                        <span className="final-score">{score}</span>
                        <span className="points-text">points</span>
                    </div>
                    <div className="grade-badge" style={{ 
                        background: `linear-gradient(135deg, ${gradeInfo.color} 0%, ${gradeInfo.color}99 100%)`
                    }}>
                        {gradeInfo.grade}
                        <span className="grade-shine"></span>
                    </div>
                </div>

                <div className="message-section animate-message">
                    <p className="message-text">
                        {getMessage(score)}
                    </p>
                    <div className="stats-section">
                        <div className="stat-item">
                            <span className="stat-label">Final Score</span>
                            <span className="stat-value">{score} pts</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Grade Achieved</span>
                            <span className="stat-value">{gradeInfo.grade}</span>
                        </div>
                    </div>
                </div>

                <button 
                    className="restart-btn animate-button"
                    onClick={onRestart}
                >
                    <span className="restart-icon">↺</span>
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default GameOver;
