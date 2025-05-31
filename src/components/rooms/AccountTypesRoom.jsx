import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const AccountTypesRoom = ({ accounts, types, onAttempt }) => {
    const [matches, setMatches] = useState(new Array(accounts.length).fill(''));
    const [draggedItem, setDraggedItem] = useState(null);
    const [usedTypes, setUsedTypes] = useState(new Set());
    const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const draggedElement = useRef(null);
    const ghostElement = useRef(null);

    useEffect(() => {
        // Create ghost element for drag visualization
        const ghost = document.createElement('div');
        ghost.className = 'dragging-ghost account-type';
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
    }, []);    const handleDragStart = (type, e) => {
        if (e.type === 'touchstart') {
            e.preventDefault();
            const touch = e.touches[0];
            setTouchPosition({ x: touch.clientX, y: touch.clientY });
            if (ghostElement.current) {
                ghostElement.current.textContent = type;
                ghostElement.current.style.display = 'flex';
                ghostElement.current.style.left = `${touch.clientX}px`;
                ghostElement.current.style.top = `${touch.clientY}px`;
            }
        } else {
            // For desktop drag
            e.dataTransfer.setData('text/plain', type);
            e.dataTransfer.effectAllowed = 'move';
        }
        setDraggedItem(type);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (isDragging && ghostElement.current) {
            const touch = e.touches[0];
            setTouchPosition({ x: touch.clientX, y: touch.clientY });
            ghostElement.current.style.left = `${touch.clientX}px`;
            ghostElement.current.style.top = `${touch.clientY}px`;

            // Check if we're over a drop zone
            const dropZones = document.querySelectorAll('.account-type-box');
            dropZones.forEach(zone => {
                const rect = zone.getBoundingClientRect();
                if (isInDropZone(rect, touch.clientX, touch.clientY)) {
                    zone.classList.add('drag-over');
                } else {
                    zone.classList.remove('drag-over');
                }
            });
        }
    };

    const handleDrop = (index) => {
        if (draggedItem) {
            const newMatches = [...matches];
            
            // Remove old type if replacing
            if (matches[index] !== '') {
                setUsedTypes(prev => {
                    const updated = new Set(prev);
                    updated.delete(matches[index]);
                    return updated;
                });
            }
            
            // Check if this type can be reused
            const canReuseType = draggedItem === 'Asset' || 
                               !usedTypes.has(draggedItem) || 
                               matches[index] === draggedItem;
            
            if (canReuseType) {
                newMatches[index] = draggedItem;
                setMatches(newMatches);
                
                // Track used types except Asset
                if (draggedItem !== 'Asset') {
                    setUsedTypes(prev => new Set([...prev, draggedItem]));
                }

                // Check if complete
                if (newMatches.every(match => match !== '')) {
                    const isCorrect = newMatches.every(
                        (match, i) => match === accounts[i].type
                    );
                    onAttempt(isCorrect ? "correct" : "incorrect");
                }
            }
        }
        
        // Clean up
        setDraggedItem(null);
        setIsDragging(false);
        if (ghostElement.current) {
            ghostElement.current.style.display = 'none';
        }
        // Remove drag-over class from all drop zones
        document.querySelectorAll('.account-type-box').forEach(zone => {
            zone.classList.remove('drag-over');
        });
    };

    const isInDropZone = (dropZoneRect, x, y) => {
        return (
            x >= dropZoneRect.left &&
            x <= dropZoneRect.right &&
            y >= dropZoneRect.top &&
            y <= dropZoneRect.bottom
        );
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        if (!isDragging) return;

        const { x, y } = touchPosition;
        const dropZones = document.querySelectorAll('.account-type-box');
        
        // Find the dropzone we're over
        dropZones.forEach((zone, index) => {
            const rect = zone.getBoundingClientRect();
            if (isInDropZone(rect, x, y)) {
                handleDrop(index);
            }
            zone.classList.remove('drag-over');
        });

        setIsDragging(false);
        if (ghostElement.current) {
            ghostElement.current.style.display = 'none';
        }
    };    return (
        <div className="account-types-room">
            <div className="accounts-container">
                {accounts.map((account, index) => (
                    <div
                        key={account.name}
                        className={`account-slot ${isDragging ? 'dragging' : ''}`}
                    >
                        <div className="account-name">{account.name}</div>
                        <div 
                            className={`account-type-box ${matches[index] ? 'filled' : ''}`}
                            data-index={index}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.add('drag-over');
                            }}
                            onDragLeave={(e) => {
                                e.currentTarget.classList.remove('drag-over');
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.remove('drag-over');
                                const type = e.dataTransfer.getData('text/plain');
                                handleDrop(index);
                            }}
                        >
                            {matches[index] || 'Drop type here'}
                        </div>
                    </div>
                ))}
            </div>

            <div className="types-container">
                {types.map(type => (
                    <div
                        key={type}
                        className="account-type"
                        draggable="true"
                        onDragStart={(e) => handleDragStart(type, e)}
                        onDragEnd={() => setIsDragging(false)}
                        onTouchStart={(e) => handleDragStart(type, e)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
};

AccountTypesRoom.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAttempt: PropTypes.func.isRequired
};

export default AccountTypesRoom;
