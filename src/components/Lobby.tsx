import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from './ui/Button';

export const Lobby: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const { players, addPlayer } = useGameStore();
  const isHost = players.length === 0;

  const handleJoinGame = () => {
    if (!playerName.trim()) return;
    
    addPlayer({
      id: crypto.randomUUID(),
      name: playerName,
      isHost,
      isReady: false,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      snake: [],
      direction: 'RIGHT',
      score: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Snake Game Lobby</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Enter Your Name
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your name..."
            />
          </div>

          <Button
            onClick={handleJoinGame}
            disabled={!playerName.trim()}
            className="w-full"
          >
            Join Game
          </Button>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Players</h2>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between bg-gray-700 p-3 rounded-md"
                >
                  <span>{player.name} {player.isHost && '(Host)'}</span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      player.isReady ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {player.isReady ? 'Ready' : 'Not Ready'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};