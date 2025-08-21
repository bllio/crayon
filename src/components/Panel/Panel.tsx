import type { FlexDirection, PanelProps, Spacing } from './Panel.types';

import styles from './Panel.module.css';

const panelSpacings: Record<Spacing, number> = {
  small: 60,
  medium: 70,
};

function calculateDimensions(
  itemCount: number,
  direction: FlexDirection = 'column',
  spacing: Spacing = 'small',
) {
  const spaceBetween = spacing ? panelSpacings[spacing] : 60;
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
  spacing = 'small',
}: Readonly<PanelProps>) {
  const [calculatedWidth, calculatedHeight] = calculateDimensions(
    items.length,
    direction,
    spacing,
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
