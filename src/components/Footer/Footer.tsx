import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        (c) 2025 Syabil Yusoff. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
