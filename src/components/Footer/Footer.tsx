import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        (c) 2025 Syabil Yusoff. All rights reserved.
      </p>
    </div>
  );
}
