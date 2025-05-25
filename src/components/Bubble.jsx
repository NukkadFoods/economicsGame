import React, { useEffect, useCallback, useState } from 'react';

const createParticles = (isCorrect) => {
    const particles = [];
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
        const angle = (i * 360) / particleCount;
        const tx = Math.cos((angle * Math.PI) / 180) * 100;
        const ty = Math.sin((angle * Math.PI) / 180) * 100;
        particles.push(
            <div
                key={i}
                className={`burst-particle ${isCorrect ? 'correct' : 'wrong'}`}
                style={{
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                }}
            />
        );
    }
    return particles;
};

const Bubble = ({ 
    text, 
    position, 
    isCorrect, 
    isSelected, 
    optionIndex, 
    fallSpeed, 
    onClick, 
    onFall, 
    id 
}) => {
    const [hasStartedFalling, setHasStartedFalling] = useState(false);
    const [showEffect, setShowEffect] = useState(false);

    useEffect(() => {
        if (!hasStartedFalling) {
            const timer = setTimeout(() => {
                setHasStartedFalling(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [hasStartedFalling]);

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
        animation: hasStartedFalling ? `fall ${fallSpeed}s linear forwards` : 'none'
    };

    const bubbleClass = `bubble ${isSelected ? 'selected' : ''} ${
        isSelected && isCorrect ? 'correct' : isSelected ? 'incorrect' : ''
    }`;

    return (
        <div 
            className={bubbleClass} 
            style={bubbleStyle}
            data-option={optionIndex}
            onClick={onClick}
            onAnimationEnd={handleAnimationEnd}
        >
            <span className="bubble-text">{text}</span>
            {showEffect && isSelected && (
                <>
                    <div className={`explosion ${isCorrect ? 'correct' : 'wrong'}`} />
                    <div className="bubble-burst">
                        {createParticles(isCorrect)}
                    </div>
                    <div className={`ripple ${isCorrect ? 'correct' : 'wrong'}`} />
                    <div className={`floating-score ${isCorrect ? 'score-positive' : 'score-negative'}`}>
                        {isCorrect ? '+4' : '-1'}
                    </div>
                </>
            )}
        </div>
    );
};

export default Bubble;
