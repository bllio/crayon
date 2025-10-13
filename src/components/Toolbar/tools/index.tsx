import { LucideEraser, LucidePencil } from 'lucide-react';

import type { Tool } from '../Toolbar.types';

import * as Pencil from './Pencil';
import * as Eraser from './Eraser';

export const tools: Tool[] = [
  // DON'T change the existing `id`s, they're used for list keys.
  {
    id: 0,
    name: 'pencil',
    icon: LucidePencil,
    draw: Pencil.draw,
  },
  {
    id: 1,
    name: 'eraser',
    icon: LucideEraser,
    draw: Eraser.draw,
  },
];
