import type { Position } from './Position';

export class Pencil {
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(startPosition: Position, endPosition: Position) {
    if (!startPosition.x || !startPosition.y) {
      return;
    }
    if (!endPosition.x || !endPosition.y) {
      return;
    }

    this.ctx.beginPath();

    this.ctx.moveTo(startPosition.x, startPosition.y);
    this.ctx.lineTo(endPosition.x, endPosition.y);

    this.ctx.stroke();
  }
}
