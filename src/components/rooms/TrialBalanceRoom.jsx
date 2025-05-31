import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TrialBalanceRoom = ({ entries, onAttempt }) => {
    const [balanceEntries, setBalanceEntries] = useState(entries.map(entry => ({
        ...entry,
        debit: entry.debit || null,
        credit: entry.credit || null
    })));
    const [totals, setTotals] = useState({ debit: 0, credit: 0 });
    const [originalDifference, setOriginalDifference] = useState(null);

    useEffect(() => {
        // Calculate initial difference for the solution
        const initialDebit = entries.reduce((sum, entry) => sum + (entry.debit || 0), 0);
        const initialCredit = entries.reduce((sum, entry) => sum + (entry.credit || 0), 0);
        setOriginalDifference(Math.abs(initialDebit - initialCredit));
    }, [entries]);

    const calculateTotals = (entries) => {
        return entries.reduce(
            (acc, entry) => ({
                debit: acc.debit + (parseFloat(entry.debit) || 0),
                credit: acc.credit + (parseFloat(entry.credit) || 0)
            }),
            { debit: 0, credit: 0 }
        );
    };

    const handleValueChange = (index, type, value) => {
        const numValue = value === '' ? null : parseFloat(value);
        const newEntries = [...balanceEntries];
        newEntries[index] = {
            ...newEntries[index],
            [type]: numValue
        };
        setBalanceEntries(newEntries);

        const newTotals = calculateTotals(newEntries);
        setTotals(newTotals);        // Check if the difference has been corrected
        const newDifference = Math.abs(newTotals.debit - newTotals.credit);
        if (newDifference === 0 && originalDifference !== null) {
            // Compare with expected solution (10000)
            onAttempt(originalDifference === 10000 ? "correct" : "incorrect");
        }
    };

    return (
        <div className="trial-balance-room">
            <table className="trial-balance-table">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Debit (₹)</th>
                        <th>Credit (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {balanceEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.account}</td>
                            <td className="amount-cell">
                                <input
                                    type="number"
                                    value={entry.debit || ''}
                                    onChange={(e) => handleValueChange(index, 'debit', e.target.value)}
                                    placeholder="0.00"
                                />
                            </td>
                            <td className="amount-cell">
                                <input
                                    type="number"
                                    value={entry.credit || ''}
                                    onChange={(e) => handleValueChange(index, 'credit', e.target.value)}
                                    placeholder="0.00"
                                />
                            </td>
                        </tr>
                    ))}
                    <tr className="total-row">
                        <td>Total</td>
                        <td className="amount-cell">₹{totals.debit.toFixed(2)}</td>
                        <td className="amount-cell">₹{totals.credit.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

            {totals.debit !== totals.credit && (
                <div className="error-message">
                    Debit and Credit totals must be equal!
                    Current difference: ₹{Math.abs(totals.debit - totals.credit).toFixed(2)}
                </div>
            )}

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

TrialBalanceRoom.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        account: PropTypes.string.isRequired,
        debit: PropTypes.number,
        credit: PropTypes.number
    })).isRequired,
    onAttempt: PropTypes.func.isRequired
};

export default TrialBalanceRoom;
