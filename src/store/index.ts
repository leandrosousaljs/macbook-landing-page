import { create } from 'zustand';

interface MacbookState {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}

const DEFAULT_COLOR = '#ADB5BD';
const DEFAULT_SCALE = 0.08;
const DEFAULT_TEXTURE = 'videos/feature-1.mp4';

const useMacbookStore = create<MacbookState>((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color) => set({ color }),

  scale: DEFAULT_SCALE,
  setScale: (scale) => set({ scale }),

  texture: DEFAULT_TEXTURE,
  setTexture: (texture) => set({ texture }),

  reset: () => set({ color: DEFAULT_COLOR, scale: DEFAULT_SCALE, texture: DEFAULT_TEXTURE }),
}));

export default useMacbookStore;
