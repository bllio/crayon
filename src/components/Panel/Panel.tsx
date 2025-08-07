import type { PanelProps } from './Panel.types';

import styles from './Panel.module.css';

export default function Panel({ items }: Readonly<PanelProps>) {
  return <ul className={styles.panel}>{items}</ul>;
}
