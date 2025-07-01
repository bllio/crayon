import React, { useRef, useState } from 'react';

import { Pencil } from '../../classes/Pencil';
import { Position } from '../../classes/Position';

import styles from './Canvas.module.css';

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<Position>({
    x: null,
    y: null,
  });

  const canvasWidth: number = (window.innerWidth * 70) / 100;
  const canvasHeight: number = (window.innerHeight * 70) / 100;

  const handleMouseDown = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    evt.preventDefault();
    if (!evt.buttons) {
      return;
    }
    if (evt.buttons === 1) {
      setIsDrawing(true);
    } else if (evt.buttons === 2) {
      // TODO: Temporary solution for clearing the canvas. Move this into a keybind later.
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    if (!mousePosition.x || !mousePosition.y) {
      setMousePosition({
        x: evt.nativeEvent.offsetX,
        y: evt.nativeEvent.offsetY,
      });
      return;
    }

    const currentMousePosition = new Position(
      evt.nativeEvent.offsetX,
      evt.nativeEvent.offsetY,
    );
    const pencil = new Pencil(ctx);
    pencil.draw(mousePosition, currentMousePosition);
    setMousePosition(currentMousePosition);
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
