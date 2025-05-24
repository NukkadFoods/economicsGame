import React from 'react';

const QuestionDisplay = ({ question }) => {
    return (
        <div className="question-display">
            {question.question}
        </div>
    );
};

export default QuestionDisplay;
