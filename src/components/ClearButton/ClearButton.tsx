import { LucideTrash2 } from 'lucide-react';

import styles from './ClearButton.module.css';

interface ClearButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export default function ClearButton({ canvasRef }: ClearButtonProps) {
  const canvasWidth: number = (window.innerWidth * 70) / 100;
  const canvasHeight: number = (window.innerHeight * 70) / 100;

  const handleClick = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  return (
    <button className={styles['icon-btn']} onClick={handleClick}>
      <LucideTrash2 color="#dc2626" />
    </button>
  );
}
