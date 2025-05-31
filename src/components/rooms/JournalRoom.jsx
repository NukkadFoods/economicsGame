import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const JournalRoom = ({ transactions, onAttempt }) => {
    const [entries, setEntries] = useState(
        transactions.map(t => ({
            debit: { account: '', amount: '' },
            credit: { account: '', amount: '' }
        }))
    );

    const [errors, setErrors] = useState([]);

    const validateEntry = (entry) => {
        if (!entry.debit.account || !entry.credit.account) {
            return false;
        }
        if (!entry.debit.amount || !entry.credit.amount) {
            return false;
        }
        return parseFloat(entry.debit.amount) === parseFloat(entry.credit.amount);
    };

    const handleChange = (index, type, field, value) => {
        const newEntries = [...entries];
        newEntries[index] = {
            ...newEntries[index],
            [type]: {
                ...newEntries[index][type],
                [field]: value
            }
        };
        setEntries(newEntries);
        // Validate and check solution
        const allValid = newEntries.every(validateEntry);
        if (allValid) {
            // Check if entries match the solutions
            const isCorrect = transactions.every((transaction, idx) => {
                const entry = newEntries[idx];
                return (
                    entry.debit.account === transaction.solution.debit.account &&
                    parseFloat(entry.debit.amount) === transaction.solution.debit.amount &&
                    entry.credit.account === transaction.solution.credit.account &&
                    parseFloat(entry.credit.amount) === transaction.solution.credit.amount
                );
            });
            onAttempt(isCorrect ? "correct" : "incorrect");
        }
    };

    const commonAccounts = [
        'Cash A/c',
        'Bank A/c',
        'Capital A/c',
        'Sales A/c',
        'Purchase A/c',
        'Rent A/c',
        'Salary A/c',
        'Machinery A/c',
        'Furniture A/c',
        'Stock A/c'
    ];

    const handleAccountSelect = (index, type, account) => {
        handleChange(index, type, 'account', account);
    };

    const validateAmount = (value) => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue) && numberValue > 0;
    };

    useEffect(() => {
        const newErrors = entries.map((entry, index) => {
            const errors = [];
            if (entry.debit.amount && !validateAmount(entry.debit.amount)) {
                errors.push('Invalid debit amount');
            }
            if (entry.credit.amount && !validateAmount(entry.credit.amount)) {
                errors.push('Invalid credit amount');
            }
            if (entry.debit.amount && entry.credit.amount &&
                parseFloat(entry.debit.amount) !== parseFloat(entry.credit.amount)) {
                errors.push('Debit and credit amounts must be equal');
            }
            return errors;
        });
        setErrors(newErrors);
    }, [entries]);

    return (
        <div className="journal-room">
            {transactions.map((transaction, index) => (
                <div key={index} className="journal-entry">
                    <div className="transaction-description">
                        {transaction.desc}
                    </div>
                    
                    <div className="entry-form">
                        <div className="entry-row">
                            <div className="account-input">
                                <select
                                    value={entries[index].debit.account}
                                    onChange={e => handleAccountSelect(index, 'debit', e.target.value)}
                                    id={`debit-select-${index}`}
                                >
                                    <option value="">Debit Account</option>
                                    {commonAccounts.map(account => (
                                        <option key={account} value={account}>{account}</option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="number"
                                value={entries[index].debit.amount}
                                placeholder="Amount"
                                onChange={(e) => handleChange(index, 'debit', 'amount', e.target.value)}
                            />
                        </div>
                        
                        <div className="entry-row">
                            <div className="account-input">
                                <select
                                    value={entries[index].credit.account}
                                    onChange={e => handleAccountSelect(index, 'credit', e.target.value)}
                                    id={`credit-select-${index}`}
                                >
                                    <option value="">Credit Account</option>
                                    {commonAccounts.map(account => (
                                        <option key={account} value={account}>{account}</option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="number"
                                value={entries[index].credit.amount}
                                placeholder="Amount"
                                onChange={(e) => handleChange(index, 'credit', 'amount', e.target.value)}
                            />
                        </div>
                        
                        {errors[index] && errors[index].length > 0 && (
                            <div className="error-messages">
                                {errors[index].map((error, i) => (
                                    <div key={i} className="error-message">{error}</div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}

            <div className="hint-section">
                <button 
                    className="hint-button"
                    onClick={() => {/* Add hint functionality */}}
                >
                    Need a hint?
                </button>
            </div>
        </div>
    );
};

JournalRoom.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        desc: PropTypes.string.isRequired,
        solution: PropTypes.shape({
            debit: PropTypes.shape({
                account: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired
            }),
            credit: PropTypes.shape({
                account: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired
            })
        }).isRequired
    })).isRequired,
    onAttempt: PropTypes.func.isRequired
};

export default JournalRoom;
