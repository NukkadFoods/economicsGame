import React, { useState, useEffect, useCallback } from 'react';

const Bubble = ({ text, position, isCorrect, isSelected, optionIndex, fallSpeed, onClick, onFall, id }) => {
    const [showEffect, setShowEffect] = useState(false);
    
    useEffect(() => {
        if (isSelected) {
            setShowEffect(true);
            const timer = setTimeout(() => setShowEffect(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isSelected]);

    const handleAnimationEnd = useCallback((e) => {
        if (e.animationName === 'fall') {
            onFall && onFall(id);
        }
    }, [id, onFall]);

    const bubbleStyle = {
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        transition: 'all 0.3s ease',
        animation: `fall ${fallSpeed}s linear forwards`
    };

    const bubbleClass = `bubble ${isSelected ? 'selected' : ''} ${
        isSelected && isCorrect ? 'correct' : isSelected ? 'incorrect' : ''
    }`;

    const createSparkles = () => {
        const sparkles = [];
        for (let i = 0; i < 8; i++) {
            const angle = (i * 45) * Math.PI / 180;
            const style = {
                left: `${50 + Math.cos(angle) * 100}%`,
                top: `${50 + Math.sin(angle) * 100}%`,
                animation: `sparkle 0.5s ease-out ${i * 0.1}s`
            };
            sparkles.push(<div key={i} className="sparkle" style={style} />);
        }
        return sparkles;
    };

    return (
        <div 
            className={bubbleClass} 
            style={bubbleStyle}
            data-option={optionIndex}
            onClick={onClick}
            onAnimationEnd={handleAnimationEnd}
        >
            {text}            {showEffect && isSelected && (
                <>
                    {isCorrect && (
                        <>
                            <div className="correct-effect" />
                            {createSparkles()}
                        </>
                    )}
                    <div className={`floating-score ${isCorrect ? 'score-positive' : 'score-negative'}`}>
                        {isCorrect ? '+4' : '-1'}
                    </div>
                </>
            )}
        </div>
    );
};

export default Bubble;
