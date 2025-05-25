import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import HomePage from './components/HomePage';
import './styles/animations.css';
import './styles/components.css';

const App = () => {
    const [gameState, setGameState] = useState({
        started: false,
        subject: 'accounts'
    });

    const handleStartGame = (subject) => {
        console.log('Starting game with subject:', subject);
        setGameState({
            started: true,
            subject: subject || 'accounts'
        });
    };

    const handleBackToHome = () => {
        setGameState({
            started: false,
            subject: 'accounts'
        });
    };

    // Render homepage or game container based on game state
    return gameState.started ? (
        <GameContainer 
            key={gameState.subject} // Force remount when subject changes
            subject={gameState.subject} 
            onBackToHome={handleBackToHome} 
        />
    ) : (
        <HomePage onStartGame={handleStartGame} />
    );
};

export default App;
