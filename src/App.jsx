import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import HomePage from './components/HomePage';
import './styles/animations.css';
import './styles/components.css';

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);

    return gameStarted ? (
        <GameContainer onBackToHome={() => setGameStarted(false)} />
    ) : (
        <HomePage onStartGame={() => setGameStarted(true)} />
    );
};

export default App;
