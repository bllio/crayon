import { create } from 'zustand';

import { tools } from '../components/Toolbar/tools';
import { colors } from '../components/Palette/Palette.constants';

export interface AppState {
  activeTool: number;
  activeColor: string;
  lineWidth: number;
}

export interface AppAction {
  updateActiveTool: (selectedTool: number) => void;
  updateActiveColor: (color: string) => void;
  updateLineWidth: (lineWidth: number) => void;
}

export const useAppStore = create<AppState & AppAction>()((set) => ({
  activeTool: tools[0].id,
  activeColor: colors[0],
  lineWidth: 2,
  updateActiveTool: (tool: number) => set(() => ({ activeTool: tool })),
  updateActiveColor: (color: string) => set(() => ({ activeColor: color })),
  updateLineWidth: (width: number) => set(() => ({ lineWidth: width })),
}));
