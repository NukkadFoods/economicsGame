import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LedgerRoom = ({ entries, onAttempt }) => {
    const styles = {
        ledgerRoom: {
            maxWidth: '900px',
            margin: '0 auto',
            padding: '20px'
        },
        tAccount: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        ledgerTitle: {
            textAlign: 'center',
            borderBottom: '2px solid #333',
            padding: '10px',
            fontSize: '1.2em',
            fontWeight: 'bold'
        },
        th: {
            padding: '10px',
            borderBottom: '2px solid #333',
            backgroundColor: '#f5f5f5'
        },
        td: {
            padding: '10px',
            borderBottom: '1px solid #ddd'
        },
        input: {
            width: '100px',
            padding: '5px',
            marginTop: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            textAlign: 'right'
        },
        instructions: {
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px'
        },
        ul: {
            listStyleType: 'disc',
            paddingLeft: '20px'
        },
        error: {
            color: '#dc3545',
            marginTop: '10px',
            fontSize: '0.9em'
        },
        balance: {
            marginTop: '20px',
            fontWeight: 'bold',
            fontSize: '1.1em',
            textAlign: 'right',
            padding: '10px',
            backgroundColor: '#e9ecef',
            borderRadius: '4px'
        }
    };

    const [ledgerEntries, setLedgerEntries] = useState(entries[0].entries.map(entry => ({
        ...entry,
        debit: entry.debit || null,
        credit: entry.credit || null
    })));
    const [errors, setErrors] = useState([]);
    const [balance, setBalance] = useState(0);

    const calculateBalance = (entries) => {
        return entries.reduce((total, entry) => {
            return total + (parseFloat(entry.debit) || 0) - (parseFloat(entry.credit) || 0);
        }, 0);
    };

    const handleEntryChange = (index, field, value) => {
        // Clear the opposite field when one is filled
        const numValue = value === '' ? null : parseFloat(value);
        if (numValue !== null && isNaN(numValue)) return; // Prevent invalid number inputs

        const newEntries = [...ledgerEntries];
        newEntries[index] = {
            ...newEntries[index],
            [field]: numValue,
            [field === 'debit' ? 'credit' : 'debit']: null // Clear the opposite field
        };
        
        setLedgerEntries(newEntries);
        const newBalance = calculateBalance(newEntries);
        setBalance(newBalance);

        // Validate and check if the balance is correct
        const newErrors = validateEntries(newEntries);
        setErrors(newErrors);
        
        if (newErrors.length === 0) {
            // Check if all entries have been properly filled
            const allEntriesFilled = newEntries.every(entry => 
                (entry.debit !== null && entry.credit === null) || 
                (entry.credit !== null && entry.debit === null)
            );
            
            if (allEntriesFilled) {
                onAttempt(newBalance.toString() === "10000" ? "correct" : "incorrect");
            }
        }
    };

    const validateEntries = (entries) => {
        const errors = [];
        entries.forEach((entry, index) => {
            if (entry.debit !== null && entry.credit !== null) {
                errors.push(`Entry ${index + 1}: Cannot have both debit and credit`);
            }
            if (entry.debit !== null && entry.debit <= 0) {
                errors.push(`Entry ${index + 1}: Debit amount must be positive`);
            }
            if (entry.credit !== null && entry.credit <= 0) {
                errors.push(`Entry ${index + 1}: Credit amount must be positive`);
            }
        });
        return errors;
    };

    useEffect(() => {
        const initialBalance = calculateBalance(ledgerEntries);
        setBalance(initialBalance);
    }, []);

    return (
        <div style={styles.ledgerRoom}>
            <div className="ledger-account">
                <h3 style={styles.ledgerTitle}>Cash Account</h3>
                <table style={styles.tAccount}>
                    <thead>
                        <tr>
                            <th style={styles.th} width="20%">Date</th>
                            <th style={styles.th} width="40%">Particular</th>
                            <th style={styles.th} width="40%">Dr. Amount</th>
                            <th style={styles.th} width="20%">Date</th>
                            <th style={styles.th} width="40%">Particular</th>
                            <th style={styles.th} width="40%">Cr. Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ledgerEntries.map((entry, index) => (
                        <tr key={index} className="ledger-row" style={styles.tr}>
                            <td style={styles.td}>{entry.date}</td>
                            <td style={styles.td}>{entry.particular}</td>
                            <td style={styles.td}>
                                <input
                                    type="number"
                                    value={entry.debit || ''}
                                    onChange={(e) => handleEntryChange(index, 'debit', e.target.value)}
                                    placeholder="Amount"
                                    style={{
                                        ...styles.input,
                                        borderColor: entry.debit ? '#4CAF50' : '#ddd'
                                    }}
                                    min="0"
                                    step="1000"
                                />
                            </td>
                            <td style={styles.td}>{entry.date}</td>
                            <td style={styles.td}>{entry.particular}</td>
                            <td style={styles.td}>
                                <input
                                    type="number"
                                    value={entry.credit || ''}
                                    onChange={(e) => handleEntryChange(index, 'credit', e.target.value)}
                                    placeholder="Amount"
                                    style={{
                                        ...styles.input,
                                        borderColor: entry.credit ? '#4CAF50' : '#ddd'
                                    }}
                                    min="0"
                                    step="1000"
                                />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="6" style={styles.balance}>
                            Current Balance: ₹{balance.toLocaleString()}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div style={styles.instructions}>
                <h4>Instructions:</h4>
                <ul style={styles.ul}>
                    <li>For receiving money (Sales): Enter amount in DEBIT side</li>
                    <li>For paying money (Purchases, Rent): Enter amount in CREDIT side</li>
                    <li>Fix the incorrect entries by entering amounts in the correct side</li>
                    <li>Remember: "Cash Account increases on Debit side and decreases on Credit side"</li>
                    <li>Target Balance: ₹15,000</li>
                </ul>
            </div>

            {errors.length > 0 && (
                <div style={styles.error}>
                    {errors.map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

LedgerRoom.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        entries: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            particular: PropTypes.string.isRequired,
            debit: PropTypes.number,
            credit: PropTypes.number
        })).isRequired
    })).isRequired,
    onAttempt: PropTypes.func.isRequired
};

export default LedgerRoom;
