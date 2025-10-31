import { useRef } from 'react';

import Canvas from '../Canvas/Canvas';
import ClearButton from '../ClearButton/ClearButton';
import Palette from '../Palette/Palette';
import Panel from '../Panel/Panel';
import Toolbar from '../Toolbar/Toolbar';

import { useAppStore } from '../../stores/useAppStore';

import styles from './Workspace.module.css';

export default function Workspace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeTool = useAppStore((state) => state.activeTool);

  return (
    <div className={styles.layout}>
      <div
        className={`${styles.layout__left} ${activeTool !== 0 ? styles['layout__left--hidden'] : ''}`}
      >
        <Palette />
      </div>
      <div className={styles.layout__center}>
        <Canvas canvasRef={canvasRef} />
      </div>
      <div className={styles.layout__right}>
        <Toolbar />
        <Panel
          items={[
            // TODO: See if there's a cleaner way of doing this.
            <li key={0}>
              <ClearButton canvasRef={canvasRef} />
            </li>,
          ]}
          direction="column"
          spacing="medium"
        />
      </div>
    </div>
  );
}
