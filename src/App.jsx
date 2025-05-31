import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import HomePage from './components/HomePage';
import MatchingGame from './components/MatchingGame';
import EscapeRoom from './components/EscapeRoom';
import './styles/animations.css';
import './styles/components.css';
import './styles/escape-room.css';

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
    };

    // Render homepage or game container based on game state and type
    if (!gameState.started) {
        return <HomePage onStartGame={handleStartGame} />;
    }

    switch (gameState.gameType) {
        case 'bubble':
            return (
                <GameContainer 
                    key={`${gameState.subject}-${gameState.gameType}`}
                    subject={gameState.subject} 
                    onBackToHome={handleBackToHome} 
                />
            );
        case 'dragdrop':
            return (
                <MatchingGame 
                    key={`${gameState.subject}-${gameState.gameType}`}
                    subject={gameState.subject}
                    onBackToHome={handleBackToHome}
                />
            );
        case 'escape':
            return (
                <EscapeRoom
                    key={`${gameState.subject}-${gameState.gameType}`}
                    onBackToHome={handleBackToHome}
                    onComplete={(score) => {
                        // Handle game completion
                        console.log('Escape Room completed with score:', score);
                        setTimeout(handleBackToHome, 3000);
                    }}
                />
            );
        default:
            return <HomePage onStartGame={handleStartGame} />;
    }
};

export default App;
