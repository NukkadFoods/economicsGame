import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const SourceDocumentRoom = ({ transactions, onAttempt }) => {
    const [matches, setMatches] = useState(new Array(transactions.length).fill(''));
    const [draggedDocument, setDraggedDocument] = useState(null);
    const [usedDocuments, setUsedDocuments] = useState(new Set());
    const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const ghostElement = useRef(null);

    useEffect(() => {
        // Create ghost element for drag visualization
        const ghost = document.createElement('div');
        ghost.className = 'dragging-ghost document-item';
        ghost.style.position = 'fixed';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '1000';
        ghost.style.transform = 'translate(-50%, -50%)';
        ghost.style.display = 'none';
        document.body.appendChild(ghost);
        ghostElement.current = ghost;
        return () => {
            if (ghostElement.current) {
                document.body.removeChild(ghostElement.current);
            }
        };
    }, []);

    const handleDragStart = (document, e) => {
        if (usedDocuments.has(document)) return;
        if (e.type === 'touchstart') {
            e.preventDefault();
            const touch = e.touches[0];
            setTouchPosition({ x: touch.clientX, y: touch.clientY });
            if (ghostElement.current) {
                ghostElement.current.textContent = document;
                ghostElement.current.style.display = 'flex';
                ghostElement.current.style.left = `${touch.clientX}px`;
                ghostElement.current.style.top = `${touch.clientY}px`;
            }
        }
        setDraggedDocument(document);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (isDragging && ghostElement.current) {
            const touch = e.touches[0];
            setTouchPosition({ x: touch.clientX, y: touch.clientY });
            ghostElement.current.style.left = `${touch.clientX}px`;
            ghostElement.current.style.top = `${touch.clientY}px`;
            // Highlight drop zones
            const dropZones = document.querySelectorAll('.document-dropzone');
            dropZones.forEach(zone => {
                const rect = zone.getBoundingClientRect();
                if (
                    touch.clientX >= rect.left &&
                    touch.clientX <= rect.right &&
                    touch.clientY >= rect.top &&
                    touch.clientY <= rect.bottom
                ) {
                    zone.classList.add('drag-over');
                } else {
                    zone.classList.remove('drag-over');
                }
            });
        }
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        if (!isDragging) return;
        const { x, y } = touchPosition;
        const dropZones = document.querySelectorAll('.document-dropzone');
        dropZones.forEach((zone, index) => {
            const rect = zone.getBoundingClientRect();
            if (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            ) {
                handleDrop(index);
            }
            zone.classList.remove('drag-over');
        });
        setIsDragging(false);
        if (ghostElement.current) {
            ghostElement.current.style.display = 'none';
        }
    };

    const handleDrop = (index) => {
        if (!draggedDocument || matches[index] !== '') return;
        const newMatches = [...matches];
        newMatches[index] = draggedDocument;
        setMatches(newMatches);
        setUsedDocuments(new Set([...usedDocuments, draggedDocument]));
        setDraggedDocument(null);
        setIsDragging(false);
        if (ghostElement.current) ghostElement.current.style.display = 'none';
        // Check if all matches are made
        if (newMatches.every(match => match !== '')) {
            const isCorrect = transactions.every((transaction, idx) => newMatches[idx] === transaction.document);
            onAttempt(isCorrect ? 'correct' : 'incorrect');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const resetMatch = (index) => {
        const documentToRemove = matches[index];
        const newMatches = [...matches];
        newMatches[index] = '';
        setMatches(newMatches);
        const newUsedDocuments = new Set(usedDocuments);
        newUsedDocuments.delete(documentToRemove);
        setUsedDocuments(newUsedDocuments);
    };

    const availableDocuments = [
        'Invoice',
        'Cash Memo',
        'Cheque',
        'Debit Note',
        'Receipt',
    ];

    return (
        <div className="source-document-room">
            <div className="transactions-container">
                {transactions.map((transaction, index) => (
                    <div key={transaction.desc} className="transaction-slot">
                        <div className="transaction-desc">{transaction.desc}</div>
                        <div
                            className={`document-dropzone ${matches[index] ? 'filled' : ''}`}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(index)}
                        >
                            {matches[index] ? (
                                <>
                                    <span>{matches[index]}</span>
                                    <button className="reset-button" onClick={() => resetMatch(index)}>
                                        ×
                                    </button>
                                </>
                            ) : (
                                'Drop document here'
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="documents-list">
                {availableDocuments.map(doc => (
                    <div
                        key={doc}
                        className={`document-item ${usedDocuments.has(doc) ? 'used' : ''}`}
                        draggable={!usedDocuments.has(doc)}
                        onDragStart={(e) => handleDragStart(doc, e)}
                        onDragEnd={() => setIsDragging(false)}
                        onTouchStart={(e) => handleDragStart(doc, e)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ opacity: usedDocuments.has(doc) ? 0.5 : 1 }}
                    >
                        {doc}
                    </div>
                ))}
            </div>
            <div className="hint-section">
                <button className="hint-button" onClick={() => {}}>
                    Need a hint?
                </button>
            </div>
        </div>
    );
};

SourceDocumentRoom.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            desc: PropTypes.string.isRequired,
            document: PropTypes.string.isRequired,
        })
    ).isRequired,
    onAttempt: PropTypes.func.isRequired,
};

export default SourceDocumentRoom;
