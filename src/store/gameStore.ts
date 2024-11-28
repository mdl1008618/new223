import { create } from 'zustand';
import { GameState, Player } from '../types/game';

interface GameStore extends GameState {
  addPlayer: (player: Player) => void;
  updatePlayer: (playerId: string, updates: Partial<Player>) => void;
  setGameStatus: (status: GameState['status']) => void;
  resetGame: () => void;
}

const initialState: GameState = {
  status: 'lobby',
  players: [],
  food: [],
  gridSize: { width: 30, height: 30 },
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  addPlayer: (player) =>
    set((state) => ({
      players: [...state.players, player],
    })),
  updatePlayer: (playerId, updates) =>
    set((state) => ({
      players: state.players.map((p) =>
        p.id === playerId ? { ...p, ...updates } : p
      ),
    })),
  setGameStatus: (status) => set({ status }),
  resetGame: () => set(initialState),
}));