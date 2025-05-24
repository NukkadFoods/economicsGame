import React from 'react';

const Cannon = ({ onLetterClick }) => {
    const letters = ['A', 'B', 'C', 'D'];

    return (
        <div className="cannon">
            {letters.map((letter) => (
                <button
                    key={letter}
                    className="cannon-btn"
                    data-key={letter}
                    onClick={() => onLetterClick(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Cannon;
