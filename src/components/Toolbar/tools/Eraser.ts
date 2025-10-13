import { Position } from '../../../classes/Position';

export function draw(positions: Position[], ctx: CanvasRenderingContext2D) {
  const [start, end] = positions;

  if (!start.x || !start.y) {
    return;
  }
  if (!end.x || !end.y) {
    return;
  }

  ctx.globalCompositeOperation = 'destination-out';

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
}
