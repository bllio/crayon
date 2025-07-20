import { create } from 'zustand';

import { colors } from '../components/Palette/Palette.constants';

export interface AppState {
  activeColor: string;
  lineWidth: number;
}

export interface AppAction {
  updateActiveColor: (color: string) => void;
  updateLineWidth: (lineWidth: number) => void;
}

export const useAppStore = create<AppState & AppAction>()((set) => ({
  activeColor: colors[0],
  lineWidth: 2,
  updateActiveColor: (color: string) => set(() => ({ activeColor: color })),
  updateLineWidth: (width: number) => set(() => ({ lineWidth: width })),
}));
