import React from 'react';

const QuestionDisplay = ({ question }) => {
    console.log('Rendering QuestionDisplay with question:', question);
    return (
        <div className="question-display">
            {question}
        </div>
    );
};

export default QuestionDisplay;
