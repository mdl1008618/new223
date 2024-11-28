export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isReady: boolean;
  color: string;
  snake: Point[];
  direction: Direction;
  score: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Food {
  position: Point;
}

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface GameState {
  status: 'lobby' | 'playing' | 'finished';
  players: Player[];
  food: Food[];
  gridSize: { width: number; height: number };
}