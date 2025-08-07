import ColorSwatch from '../ColorSwatch/ColorSwatch';
import Panel from '../Panel/Panel';

import { useAppStore } from '../../stores/useAppStore.ts';

import { colors } from './Palette.constants.ts';

export default function Palette() {
  const activeColor = useAppStore((state) => state.activeColor);
  const updateActiveColor = useAppStore((state) => state.updateActiveColor);

  const colorSwatches = colors.map((color) => {
    const idx = colors.indexOf(color);
    return (
      <ColorSwatch
        key={idx}
        fill={color}
        isActive={activeColor === colors[idx]}
        handleClick={() => updateActiveColor(colors[idx])}
      />
    );
  });

  return <Panel items={colorSwatches} direction="column"></Panel>;
}
