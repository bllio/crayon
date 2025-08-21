import Canvas from './components/Canvas/Canvas';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Palette from './components/Palette/Palette';
import Toolbar from './components/Toolbar/Toolbar';

import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Logo />
      <div className={styles.layout}>
        <div>
          <Palette />
        </div>
        <div>
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
