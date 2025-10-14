import Canvas from './components/Canvas/Canvas';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Palette from './components/Palette/Palette';
import Toolbar from './components/Toolbar/Toolbar';

import { useAppStore } from './stores/useAppStore';

import styles from './App.module.css';

export default function App() {
  const activeTool = useAppStore((state) => state.activeTool);

  return (
    <>
      <Logo />
      <div className={styles.layout}>
        <div
          className={`${styles.layout__left} ${activeTool !== 0 ? styles['layout__left--hidden'] : ''}`}
        >
          <Palette />
        </div>
        <div className={styles.layout__center}>
          <Canvas />
        </div>
        <div>
          <Toolbar />
        </div>
      </div>
      <Footer />
    </>
  );
}
