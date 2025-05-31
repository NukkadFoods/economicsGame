import React, { useState, useEffect, useCallback } from 'react';
import '../styles/escape-room.css';
import '../styles/escape-room-components.css';
import '../styles/escape-room-gameover.css';
import AccountTypesRoom from './rooms/AccountTypesRoom';
import SourceDocumentRoom from './rooms/SourceDocumentRoom';
import JournalRoom from './rooms/JournalRoom';
import LedgerRoom from './rooms/LedgerRoom';
import TrialBalanceRoom from './rooms/TrialBalanceRoom';
import EscapeRoomGameOver from './EscapeRoomGameOver';

const ROOM_DATA = {
    1: {
        name: "Hall of Account Types",
        description: "Match each account with its correct type to unlock the door.",
        accounts: [
            { name: "Bank", type: "Asset" },
            { name: "Salary", type: "Income" },
            { name: "Rent", type: "Expense" },
            { name: "Capital", type: "Capital" },
            { name: "Stock", type: "Asset" }
        ],
        types: ["Asset", "Liability", "Capital", "Expense", "Income"],
        solution: "AEECA"
    },
    2: {
        name: "Source Document Vault",
        description: "Match each transaction with its correct source document.",
        transactions: [
            { desc: "Bought goods on credit", document: "Invoice" },
            { desc: "Sold for cash", document: "Cash Memo" },
            { desc: "Paid by cheque", document: "Cheque" },
            { desc: "Returned goods", document: "Debit Note" },
            { desc: "Received advance", document: "Receipt" }
        ],
        solution: "ICCDR"
    },
    3: {
        name: "Journal Jungle",
        description: "Create journal entries for the given transactions.",
        transactions: [
            {
                desc: "Purchased machinery for ₹20,000 in cash",
                solution: {
                    debit: { account: "Machinery A/c", amount: 20000 },
                    credit: { account: "Cash A/c", amount: 20000 }
                }
            },
            {
                desc: "Received rent ₹15,000",
                solution: {
                    debit: { account: "Cash A/c", amount: 15000 },
                    credit: { account: "Rent A/c", amount: 15000 }
                }
            },
            {
                desc: "Paid salary ₹13,000",
                solution: {
                    debit: { account: "Salary A/c", amount: 13000 },
                    credit: { account: "Cash A/c", amount: 13000 }
                }
            }
        ],
        solution: "48000" // Total debit amount
    },
    4: {
        name: "Ledger Lab",
        description: "Find and correct the errors in the ledger.",        entries: [
            {
                account: "Cash A/c",
                entries: [
                    { date: "2025-01-01", particular: "Balance b/d", debit: 10000, credit: null },
                    { date: "2025-01-05", particular: "Sales A/c", debit: null, credit: 5000 }, // Error: Should be debit
                    { date: "2025-01-10", particular: "Purchase A/c", debit: 3000, credit: null }, // Error: Should be credit
                    { date: "2025-01-15", particular: "Rent A/c", debit: null, credit: 2000 }
                ]
            }
        ],
        solution: "10000" // Corrected closing balance
    },
    5: {
        name: "Trial Balance Terminal",
        description: "Find and correct the error in the trial balance.",
        entries: [
            { account: "Capital A/c", debit: null, credit: 50000 },
            { account: "Cash A/c", debit: 30000, credit: null },
            { account: "Furniture A/c", debit: 15000, credit: null },
            { account: "Sales A/c", debit: null, credit: 25000 },
            { account: "Purchase A/c", debit: 20000, credit: null }
        ],
        solution: "10000" // Difference before and after correction
    }
};

const EscapeRoom = ({ onComplete, onBackToHome }) => {
    const [currentRoom, setCurrentRoom] = useState(1);
    const [mounted, setMounted] = useState(false);
    const [gameState, setGameState] = useState({
        startTime: null,
        score: 0,
        attempts: {},
        completed: false,
        errors: 0,
        showGameOver: false,
        finalScore: 0
    });
    const [userInput, setUserInput] = useState({});
    const [feedback, setFeedback] = useState("");    const handleAttempt = useCallback((attempt) => {
        // Check if the attempt matches the expected solution or is marked as correct
        const isCorrect = attempt === "correct" || attempt === ROOM_DATA[currentRoom].solution;
        
        if (isCorrect) {
            const timeSpent = (new Date() - gameState.startTime) / 1000 / 60; // in minutes
            const bonusPoints = timeSpent <= 10 ? 10 : 0;
            const newScore = gameState.score + 10 + bonusPoints;

            setGameState(prev => {
                const newState = {
                    ...prev,
                    score: newScore,
                    attempts: { ...prev.attempts, [currentRoom]: true }
                };

                // Set completed if this was the last room
                if (currentRoom >= 5) {
                    newState.completed = true;
                }

                return newState;
            });

            setFeedback("Correct! Moving to next room...");            // Handle room transition or game completion
            if (currentRoom >= 5) {
                setGameState(prev => ({
                    ...prev,
                    showGameOver: true,
                    finalScore: newScore
                }));
            } else {
                setTimeout(() => setCurrentRoom(prev => prev + 1), 1000);
            }
        } else {
            setGameState(prev => ({
                ...prev,
                score: Math.max(0, prev.score - 2),
                errors: prev.errors + 1
            }));
            setFeedback("Incorrect. Try again!");
        }
    }, [currentRoom, gameState.startTime, gameState.score, onComplete]);

    const renderRoom = useCallback(() => {
        const room = ROOM_DATA[currentRoom];
        if (!room) return null;

        return (
            <div className="escape-room">
                <h2>{room.name}</h2>
                <p>{room.description}</p>
                <div className="room-content">                {currentRoom === 1 && (
                        <AccountTypesRoom
                            accounts={room.accounts}
                            types={room.types}
                            onAttempt={(result) => handleAttempt(result)}
                        />
                    )}
                    {currentRoom === 2 && (
                        <SourceDocumentRoom
                            transactions={room.transactions}
                            onAttempt={(attempt) => handleAttempt(attempt)}
                        />
                    )}                    {currentRoom === 3 && (
                        <JournalRoom
                            transactions={room.transactions}
                            onAttempt={(attempt) => handleAttempt(attempt)}
                        />
                    )}
                    {currentRoom === 4 && (
                        <LedgerRoom
                            entries={room.entries}
                            onAttempt={(attempt) => handleAttempt(attempt)}
                        />
                    )}                    {currentRoom === 5 && (
                        <TrialBalanceRoom
                            entries={room.entries}
                            onAttempt={(attempt) => handleAttempt(attempt)}
                        />
                    )}
                </div>
                {feedback && <div className={`feedback ${feedback.includes('Correct') ? 'success' : 'error'}`}>{feedback}</div>}
            </div>
        );
    }, [currentRoom, userInput, feedback, handleAttempt]);    // Component mount and cleanup
    useEffect(() => {
        setMounted(true);
        if (!gameState.startTime) {
            setGameState(prev => ({ ...prev, startTime: new Date() }));
        }
        return () => setMounted(false);
    }, []);

    // Prevent rendering until component is mounted
    if (!mounted) {
        return null;
    }    return (
        <div className="escape-room-game">
            {gameState.showGameOver ? (
                <EscapeRoomGameOver 
                    score={gameState.finalScore}
                    onBackToHome={onBackToHome}
                />
            ) : (
                <>
                    <button className="back-to-home-btn" onClick={onBackToHome}>
                        <span className="home-icon">←</span>
                        Back to Home
                    </button>
                    
                    <div className="game-header">
                        <div className="score">Score: {gameState.score}</div>
                        <div className="room-indicator">Room {currentRoom} of 5</div>
                        <div className="errors">Errors: {gameState.errors}</div>
                    </div>            {renderRoom()}
                </>
            )}
        </div>
    );
};

export default EscapeRoom;
