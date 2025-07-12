import ColorSwatch from '../ColorSwatch/ColorSwatch';

import { colors } from './Palette.constants.ts';
import styles from './Palette.module.css';

export default function Palette() {
  const colorSwatches = colors.map((color) => {
    const idx = colors.indexOf(color);
    return <ColorSwatch key={idx} isActive={false} fill={color} />;
  });

  return <ul className={styles.palette}>{colorSwatches}</ul>;
}
