import type { MouseEventHandler } from 'react';

import styles from './ColorSwatch.module.css';

interface ColorSwatchProps {
  fill: string;
  isActive: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ColorSwatch({
  fill,
  isActive = false,
  handleClick,
}: Readonly<ColorSwatchProps>) {
  return (
    <li>
      <button
        className={`
          ${styles['color-swatch']}
          ${isActive ? styles['color-swatch--selected'] : ''}
        `}
        style={{ backgroundColor: fill }}
        onClick={handleClick}
      ></button>
    </li>
  );
}
