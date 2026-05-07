import { create } from 'zustand';

interface MacbookState {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  reset: () => void;
}

const DEFAULT_COLOR: string = '#2E2C2E';
const DEFAULT_SCALE: number = 0.08;

const useMacbookStore = create<MacbookState>((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color: string) => set({ color }),

  scale: DEFAULT_SCALE,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: DEFAULT_COLOR, scale: DEFAULT_SCALE }),
}));

export default useMacbookStore;
