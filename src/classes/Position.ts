export class Position {
  public x: number | null = null;
  public y: number | null = null;

  constructor(x: number | null, y: number | null) {
    this.x = x;
    this.y = y;
  }
}

export type PositionPair = [Position, Position];
