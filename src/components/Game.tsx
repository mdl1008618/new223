import React, { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { players, food, gridSize } = useGameStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 20;
    canvas.width = gridSize.width * cellSize;
    canvas.height = gridSize.height * cellSize;

    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snakes
    players.forEach(player => {
      ctx.fillStyle = player.color;
      player.snake.forEach(segment => {
        ctx.fillRect(
          segment.x * cellSize,
          segment.y * cellSize,
          cellSize - 1,
          cellSize - 1
        );
      });
    });

    // Draw food
    ctx.fillStyle = '#ff4444';
    food.forEach(f => {
      ctx.fillRect(
        f.position.x * cellSize,
        f.position.y * cellSize,
        cellSize - 1,
        cellSize - 1
      );
    });
  }, [players, food, gridSize]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          className="border-4 border-gray-700 rounded-lg"
        />
        <div className="flex justify-between text-white">
          {players.map(player => (
            <div key={player.id} className="text-center">
              <span style={{ color: player.color }}>{player.name}</span>
              <p>Score: {player.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};