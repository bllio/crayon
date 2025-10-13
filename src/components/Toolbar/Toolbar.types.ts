import type { LucideIcon } from 'lucide-react';

import type { PositionPair } from '../../classes/Position';

export interface Tool {
  id: number;
  name: string;
  icon: LucideIcon;
  draw: (positions: PositionPair, ctx: CanvasRenderingContext2D) => void;
}
