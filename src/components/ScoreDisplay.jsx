import React, { useState, useEffect, useRef } from 'react';

const ScoreDisplay = ({ score }) => {
    const [prevScore, setPrevScore] = useState(score);
    const [showChange, setShowChange] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const scoreChangeTimeoutRef = useRef();
    const updateTimeoutRef = useRef();

    useEffect(() => {
        if (score !== prevScore) {
            // Show score change animation
            setShowChange(true);
            setIsUpdating(true);

            // Clear previous timeouts
            if (scoreChangeTimeoutRef.current) clearTimeout(scoreChangeTimeoutRef.current);
            if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);

            // Hide score change after animation
            scoreChangeTimeoutRef.current = setTimeout(() => {
                setShowChange(false);
            }, 800);

            // Remove update animation class
            updateTimeoutRef.current = setTimeout(() => {
                setIsUpdating(false);
            }, 300);

            setPrevScore(score);
        }
    }, [score, prevScore]);

    const scoreChange = score - prevScore;
    const changeText = scoreChange > 0 ? `+${scoreChange}` : scoreChange;

    return (
        <div className={`score-display ${isUpdating ? 'update' : ''}`}>
            Score: <span>{score}</span>
            {showChange && (
                <div className={`score-change ${scoreChange >= 0 ? 'positive' : 'negative'}`}>
                    {changeText}
                </div>
            )}
        </div>
    );
};

export default ScoreDisplay;
