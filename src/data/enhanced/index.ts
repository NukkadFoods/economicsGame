import { Question, QuestionBank } from '../../types/question';
import { enhancedAccountingQuestions } from './accountingQuestions';
import { enhancedMathQuestions } from './mathQuestions';
import { enhancedPhysicsQuestions } from './physicsQuestions';
import { enhancedGKQuestions } from './gkQuestions';

export const enhancedQuestionBank: QuestionBank = {
  accounting: enhancedAccountingQuestions,
  math: enhancedMathQuestions,
  physics: enhancedPhysicsQuestions,
  gk: enhancedGKQuestions
};

// Export individual banks
export { enhancedAccountingQuestions } from './accountingQuestions';
export { enhancedMathQuestions } from './mathQuestions';
export { enhancedPhysicsQuestions } from './physicsQuestions';
export { enhancedGKQuestions } from './gkQuestions';

// Helper to get all questions
export const getAllQuestions = (): Question[] => {
  return [
    ...enhancedAccountingQuestions,
    ...enhancedMathQuestions,
    ...enhancedPhysicsQuestions,
    ...enhancedGKQuestions
  ];
};

// Helper to get questions by subject
export const getQuestionsBySubject = (subject: string): Question[] => {
  return enhancedQuestionBank[subject] || [];
};

// Stats
export const questionStats = {
  accounting: enhancedAccountingQuestions.length,
  math: enhancedMathQuestions.length,
  physics: enhancedPhysicsQuestions.length,
  gk: enhancedGKQuestions.length,
  total: enhancedAccountingQuestions.length + 
         enhancedMathQuestions.length + 
         enhancedPhysicsQuestions.length + 
         enhancedGKQuestions.length
};
