import Canvas from './components/Canvas/Canvas';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Palette from './components/Palette/Palette';

import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Logo />
      <div className={styles.layout}>
        <div className={styles.left}>
          <Palette />
        </div>
        <div className={styles.center}>
          <Canvas />
        </div>
        {/* This fills the right side of the page so that the canvas stays centered. */}
        <div className={styles.right}></div>
      </div>
      <Footer />
    </>
  );
}
