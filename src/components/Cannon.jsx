import React, { useEffect, useCallback } from 'react';

const Cannon = ({ onLetterClick }) => {
    const letters = ['A', 'B', 'C', 'D'];
    const backgroundColors = {
        A: 'bg-red-500',
        B: 'bg-blue-500',
        C: 'bg-green-500',
        D: 'bg-yellow-500'
    };

    const handleButtonClick = useCallback((letter) => {
        console.log('Button clicked:', letter);
        const button = document.querySelector(`[data-key="${letter}"]`);
        if (button) {
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 200);
        }
        onLetterClick(letter);
    }, [onLetterClick]);    const handleKeyPress = useCallback((event) => {
        const key = event.key.toUpperCase();
        if (letters.includes(key)) {
            handleButtonClick(key);
        }
    }, [handleButtonClick, letters]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    return (
        <div className="cannon">
            {letters.map((letter) => (
                <button
                    key={letter}
                    className={`cannon-btn ${backgroundColors[letter]}`}
                    data-key={letter}
                    onClick={() => handleButtonClick(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Cannon;
