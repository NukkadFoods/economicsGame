import { useState, useCallback, useEffect } from 'react';

const INITIAL_FALL_SPEED = 9; // 3x normal speed
const SPEED_INCREASE_PER_QUESTION = 0.9 // Moderate speed increase per question

const allQuestions = [
    {
        question: "Which accounting equation is correct?",
        options: ["Assets = Liabilities + Equity", "Assets + Liabilities = Equity", "Equity = Assets + Liabilities", "Liabilities = Assets + Equity"],
        correct: 0
    },
    {
        question: "When a company makes a cash sale, what accounts are affected?",
        options: ["Cash and Revenue", "Cash and Accounts Receivable", "Revenue and Accounts Receivable", "Cash and Expenses"],
        correct: 0
    },
    {
        question: "What type of account is Accounts Receivable?",
        options: ["Liability", "Asset", "Revenue", "Expense"],
        correct: 1
    },
    {
        question: "Which financial statement shows a company's financial position at a specific point in time?",
        options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Retained Earnings Statement"],
        correct: 1
    },
    {
        question: "Under double-entry accounting, what must be true?",
        options: ["Credits = Debits", "Assets = Liabilities", "Revenue > Expenses", "Equity > Liabilities"],
        correct: 0
    },
    {
        question: "What is the normal balance for Accounts Payable?",
        options: ["Debit", "Credit", "Both", "Neither"],
        correct: 1
    },
    {
        question: "Which accounting concept states a business will continue operating indefinitely?",
        options: ["Going Concern", "Business Entity", "Monetary Unit", "Time Period"],
        correct: 0
    },
    {
        question: "What is the primary purpose of a trial balance?",
        options: ["Calculate profit", "Check debits equal credits", "Record transactions", "Prepare tax returns"],
        correct: 1
    },
    {
        question: "Which statement shows the financial performance over a period?",
        options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Equity"],
        correct: 1
    },
    {
        question: "What does a credit balance in Accounts Receivable mean?",
        options: ["Normal balance", "Overpayment by customer", "Outstanding customer debt", "Advance payment"],
        correct: 1
    },
    {
        question: "Which account typically has a debit balance?",
        options: ["Revenue", "Expenses", "Accounts Payable", "Unearned Revenue"],
        correct: 1
    },
    {
        question: "What is depreciation?",
        options: ["Cash expense", "Allocation of asset cost", "Market value decrease", "Maintenance cost"],
        correct: 1
    },
    {
        question: "Which is a contra account?",
        options: ["Cash", "Allowance for Bad Debts", "Accounts Receivable", "Notes Payable"],
        correct: 1
    },
    {
        question: "What does the matching principle require?",
        options: ["Equal debits and credits", "Expenses match revenues", "Assets match liabilities", "Cash equals income"],
        correct: 1
    },
    {
        question: "What is working capital?",
        options: ["Fixed Assets", "Current Assets - Current Liabilities", "Total Assets", "Net Income"],
        correct: 1
    },
    {
        question: "Which is not a current asset?",
        options: ["Cash", "Inventory", "Equipment", "Accounts Receivable"],
        correct: 2
    },
    {
        question: "What is the purpose of adjusting entries?",
        options: ["Correct errors", "Update account balances", "Record daily transactions", "Close accounts"],
        correct: 1
    },
    {
        question: "When is revenue typically recognized?",
        options: ["When cash is received", "When earned", "At year end", "When invoiced"],
        correct: 1
    },
    {
        question: "What is petty cash used for?",
        options: ["Major purchases", "Small expenses", "Payroll", "Investments"],
        correct: 1
    },
    {
        question: "What is the accounting cycle?",
        options: ["Fiscal year", "Recording process", "Audit period", "Budget period"],
        correct: 1
    },
    {
        question: "Which ratio measures a company's ability to pay short-term debts?",
        options: ["Debt ratio", "Current ratio", "Profit margin", "Return on assets"],
        correct: 1
    },
    {
        question: "What is meant by liquidity?",
        options: ["Profitability", "Ability to pay debts", "Cash only", "Asset value"],
        correct: 1
    },
    {
        question: "What is materiality in accounting?",
        options: ["Size matters", "All amounts matter", "Physical existence", "Cash basis"],
        correct: 0
    },
    {
        question: "What is a subsidiary ledger?",
        options: ["Main ledger", "Detailed records", "Trial balance", "Journal entry"],
        correct: 1
    },
    {
        question: "What is accrual accounting?",
        options: ["Cash basis", "When earned/incurred", "Bank reconciliation", "Year-end only"],
        correct: 1
    },
    {
        question: "What is a purchase return?",
        options: ["Buying goods", "Returning goods to supplier", "Sales return", "Customer return"],
        correct: 1
    },
    {
        question: "What is a bank reconciliation?",
        options: ["Deposit slip", "Balance comparison", "Bank statement", "Check register"],
        correct: 1
    },
    {
        question: "What is goodwill?",
        options: ["Customer service", "Intangible asset", "Cash equivalent", "Current asset"],
        correct: 1
    },
    {
        question: "What is an audit trail?",
        options: ["Bank path", "Documentation path", "Money trail", "Asset path"],
        correct: 1
    },
    {
        question: "What is a fiscal year?",
        options: ["Calendar year", "Accounting year", "Tax year", "Budget year"],
        correct: 1
    },
    {
        question: "What is a journal entry?",
        options: ["Diary", "Transaction record", "Ledger summary", "Balance sheet"],
        correct: 1
    },
    {
        question: "What is the cost principle?",
        options: ["Market value", "Original cost", "Current cost", "Replacement cost"],
        correct: 1
    },
    {
        question: "What is an asset's book value?",
        options: ["Market price", "Cost less depreciation", "Purchase price", "Selling price"],
        correct: 1
    },
    {
        question: "What is a reversing entry?",
        options: ["Error correction", "Accrual reversal", "Normal entry", "Closing entry"],
        correct: 1
    },
    {
        question: "What is involved in closing entries?",
        options: ["Asset accounts", "Revenue/Expense accounts", "Liability accounts", "Cash accounts"],
        correct: 1
    },
    {
        question: "What is meant by internal control?",
        options: ["External audit", "Safeguard assets", "Bank control", "Government control"],
        correct: 1
    }
];

// Function to randomly select 10 questions
const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
};

const questions = getRandomQuestions();

const useGame = () => {
    const [gameState, setGameState] = useState({
        score: 0,
        currentQuestionIndex: 0,
        gameOver: false,
        bubbles: [],
        currentQuestion: questions[0],
    });    const generateBubbles = useCallback((question) => {
        if (!question) return [];
        
        const spacing = 20; // percentage of screen width
        const startX = spacing; // start position
        
        return question.options.map((option, index) => ({
            id: `bubble-${Date.now()}-${index}`,
            text: option,            position: {
                x: startX + (index * (100 - spacing * 2) / 3), // Evenly space bubbles horizontally
                y: -20 // Start above the screen
            },
            fallSpeed: Math.random() * 0.15 + INITIAL_FALL_SPEED - (gameState.currentQuestionIndex * SPEED_INCREASE_PER_QUESTION), // Moderate random variation in speed
            isCorrect: index === question.correct,
            isSelected: false,
            hasFallen: false // Track if bubble has hit bottom
        }));
    }, []);const handleBubbleClick = useCallback((index) => {
        if (gameState.gameOver) return;

        setGameState(prev => {
            const isCorrect = index === prev.currentQuestion.correct;
            
            // Update bubbles to show which one was selected
            const updatedBubbles = prev.bubbles.map((bubble, i) => ({
                ...bubble,
                isSelected: i === index
            }));

            // Wait for animation before moving to next question
            setTimeout(() => {
                setGameState(prev => {
                    const newScore = isCorrect ? prev.score + 4 : prev.score - 1;
                    const newQuestionIndex = prev.currentQuestionIndex + 1;

                    // Check if game is over
                    if (newQuestionIndex >= questions.length) {
                        return {
                            ...prev,
                            gameOver: true,
                            score: newScore,
                            currentQuestion: null,
                            bubbles: []
                        };
                    }

                    // If game is not over, proceed to next question
                    return {
                        ...prev,
                        score: newScore,
                        currentQuestionIndex: newQuestionIndex,
                        currentQuestion: questions[newQuestionIndex],
                        bubbles: generateBubbles(questions[newQuestionIndex])
                    };
                });
            }, 1000); // Wait 1 second for animation

            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver, generateBubbles]);

    const handleLetterClick = useCallback((letter) => {
        if (gameState.gameOver) return;
        const letterIndex = ['A', 'B', 'C', 'D'].indexOf(letter);
        handleBubbleClick(letterIndex);
    }, [gameState.gameOver, handleBubbleClick]);

    const handleKeyPress = useCallback((event) => {
        const key = event.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(key)) {
            handleLetterClick(key);
        }
    }, [handleLetterClick]);    const restartGame = useCallback(() => {
        const newQuestions = getRandomQuestions();
        setGameState({
            score: 0,
            currentQuestionIndex: 0,
            gameOver: false,
            bubbles: generateBubbles(newQuestions[0]),
            currentQuestion: newQuestions[0]
        });
    }, [generateBubbles]);    const handleBubbleFall = useCallback((bubbleId) => {
        if (gameState.gameOver) return;

        setGameState(prev => {
            const updatedBubbles = prev.bubbles.map(bubble => {
                if (bubble.id === bubbleId && !bubble.hasFallen) {
                    return { ...bubble, hasFallen: true };
                }
                return bubble;
            });

            const allBubblesHaveFallen = updatedBubbles.every(bubble => bubble.hasFallen);
            
            if (allBubblesHaveFallen) {
                const newQuestionIndex = prev.currentQuestionIndex + 1;
                const newScore = prev.score - 1; // Deduct only one point for missing the question

                // Check if game is over
                if (newQuestionIndex >= questions.length) {
                    return {
                        ...prev,
                        gameOver: true,
                        score: newScore,
                        currentQuestion: null,
                        bubbles: []
                    };
                }

                // Move to next question
                return {
                    ...prev,
                    score: newScore,
                    currentQuestionIndex: newQuestionIndex,
                    currentQuestion: questions[newQuestionIndex],
                    bubbles: generateBubbles(questions[newQuestionIndex])
                };
            }

            return {
                ...prev,
                bubbles: updatedBubbles
            };
        });
    }, [gameState.gameOver]);

    useEffect(() => {
        // Initialize the bubbles for the first question
        setGameState(prev => ({
            ...prev,
            bubbles: generateBubbles(prev.currentQuestion)
        }));
    }, [generateBubbles]);

    return {
        ...gameState,
        handleKeyPress,
        handleLetterClick,
        handleBubbleClick,
        handleBubbleFall,
        restartGame
    };
};

export default useGame;
