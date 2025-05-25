// Import all question sets
import { accountingQuestions } from './accountingQuestions';
import { physicsQuestions } from './physicsQuestions';
import { mathQuestions } from './mathQuestions';
import { gkQuestions } from './gkQuestions';

// Make sure all question sets follow the same format
const normalizeQuestions = (questions = []) => {
    if (!Array.isArray(questions)) {
        console.error('Invalid questions format:', questions);
        return [];
    }

    return questions.map(q => ({
        question: q.question,
        options: Array.isArray(q.options) ? q.options : [],
        correct: typeof q.correctOption === 'number' ? q.correctOption : 
                typeof q.correct === 'number' ? q.correct : 0
    }));
};

// Export question sets by subject
export const questionsBySubject = {
    accounts: normalizeQuestions(accountingQuestions),
    physics: normalizeQuestions(physicsQuestions),
    maths: normalizeQuestions(mathQuestions),
    gk: normalizeQuestions(gkQuestions)
};

// Log available questions for debugging
Object.entries(questionsBySubject).forEach(([subject, questions]) => {
    console.log(`${subject} questions loaded: ${questions.length}`);
    if (questions.length < 40) {
        console.warn(`Warning: ${subject} has fewer than 40 questions (${questions.length})`);
    }
});
