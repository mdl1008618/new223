import React from 'react';
import { useGameStore } from './store/gameStore';
import { Lobby } from './components/Lobby';
import { Game } from './components/Game';

function App() {
  const gameStatus = useGameStore((state) => state.status);

  return (
    <div className="min-h-screen bg-gray-900">
      {gameStatus === 'lobby' ? <Lobby /> : <Game />}
    </div>
  );
}

export default App;