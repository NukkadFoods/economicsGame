import { accountingQuestions } from './accountingQuestions';
import { physicsQuestions } from './physicsQuestions';
import { mathQuestions } from './mathQuestions';
import { gkQuestions } from './gkQuestions';

// Helper function to ensure arrays
const ensureArray = (questions) => {
    if (!Array.isArray(questions)) {
        console.error('Invalid questions format:', questions);
        return [];
    }
    return questions;
};

// Export question sets by subject
export const questionsBySubject = {
    accounts: ensureArray(accountingQuestions),
    physics: ensureArray(physicsQuestions),
    maths: ensureArray(mathQuestions),
    gk: ensureArray(gkQuestions)
};

// Log loaded questions
Object.entries(questionsBySubject).forEach(([subject, questions]) => {
    console.log(`${subject} questions loaded:`, questions.length);
});
