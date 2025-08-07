import type { FlexDirection, PanelProps } from './Panel.types';

import styles from './Panel.module.css';

function calculateDimensions(
  itemCount: number,
  direction: FlexDirection = 'column',
) {
  const spaceBetween = 60;
  const longerSide = `${itemCount * spaceBetween}px`;
  const shorterSide = '80px';

  let verticalSide = '';
  let horizontalSide = '';

  if (direction === 'row') {
    horizontalSide = longerSide;
    verticalSide = shorterSide;
  } else if (direction === 'column') {
    horizontalSide = shorterSide;
    verticalSide = longerSide;
  }

  return [horizontalSide, verticalSide];
}

export default function Panel({
  items,
  direction = 'row',
}: Readonly<PanelProps>) {
  const [calculatedWidth, calculatedHeight] = calculateDimensions(
    items.length,
    direction,
  );

  return (
    <ul
      className={styles.panel}
      style={{
        flexDirection: direction,
        width: calculatedWidth,
        height: calculatedHeight,
      }}
    >
      {items}
    </ul>
  );
}
