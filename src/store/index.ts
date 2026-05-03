import { create } from 'zustand';

interface MacbookState {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
}

const useMacbookStore = create<MacbookState>((set) => ({
  color: '#2E2C2E',
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: '#2E2C2E', scale: 0.08 }),
}));

export default useMacbookStore;
