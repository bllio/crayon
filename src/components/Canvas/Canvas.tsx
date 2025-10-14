import React, { useRef, useState } from 'react';

import { useAppStore } from '../../stores/useAppStore';

import { Position } from '../../classes/Position';

import { tools } from '../Toolbar/tools';

import styles from './Canvas.module.css';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<Position>({
    x: null,
    y: null,
  });
  const activeTool = useAppStore((state) => state.activeTool);
  const activeColor = useAppStore((state) => state.activeColor);
  const lineWidth = useAppStore((state) => state.lineWidth);

  const canvasWidth: number = (window.innerWidth * 70) / 100;
  const canvasHeight: number = (window.innerHeight * 70) / 100;

  const handleMouseDown = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    evt.preventDefault();
    if (!evt.buttons) {
      return;
    }
    if (evt.buttons === 1) {
      setIsDrawing(true);
    }
  };

  const handleMouseUp = () => {
    // Clears previous position so each pencil stroke stays separate.
    setMousePosition({ x: null, y: null });
    setIsDrawing(false);
  };

  const handleMouseMove = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !isDrawing) {
      return;
    }

    ctx.strokeStyle = activeColor;
    ctx.lineWidth = lineWidth;
    // The values for `lineCap` and `lineJoin` should NOT change.
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (!mousePosition.x || !mousePosition.y) {
      setMousePosition({
        x: evt.nativeEvent.offsetX,
        y: evt.nativeEvent.offsetY,
      });
      return;
    }

    const latestMousePosition = new Position(
      evt.nativeEvent.offsetX,
      evt.nativeEvent.offsetY,
    );

    tools[activeTool].draw([mousePosition, latestMousePosition], ctx);
    setMousePosition(latestMousePosition);
  };

  const handleContextMenu = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    // Disables context menu within the canvas because we have no need for it.
    evt.preventDefault();
  };

  return (
    <canvas
      width={canvasWidth}
      height={canvasHeight}
      className={styles.canvas}
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onContextMenu={handleContextMenu}
    ></canvas>
  );
}
