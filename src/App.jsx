import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import HomePage from './components/HomePage';
import MatchingGame from './components/MatchingGame';
import './styles/animations.css';
import './styles/components.css';

const App = () => {
    const [gameState, setGameState] = useState({
        started: false,
        subject: 'accounts',
        gameType: 'bubble'
    });

    const handleStartGame = (subject, gameType) => {
        console.log('Starting game with subject:', subject, 'and type:', gameType);
        setGameState({
            started: true,
            subject: subject || 'accounts',
            gameType: gameType || 'bubble'
        });
    };

    const handleBackToHome = () => {
        setGameState({
            started: false,
            subject: 'accounts'
        });
    };    // Render homepage or game container based on game state and type
    return gameState.started ? (
        gameState.gameType === 'bubble' ? (
            <GameContainer 
                key={`${gameState.subject}-${gameState.gameType}`}
                subject={gameState.subject} 
                onBackToHome={handleBackToHome} 
            />
        ) : (
            <MatchingGame 
                key={`${gameState.subject}-${gameState.gameType}`}
                subject={gameState.subject}
                onBackToHome={handleBackToHome}
            />
        )
    ) : (
        <HomePage onStartGame={handleStartGame} />
    );
};

export default App;
