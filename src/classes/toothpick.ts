import p5 from "p5";
import { dir } from "../common/enums";
import { variables } from "../common/variables";

export class Toothpick {
  _x: number;
  _y: number;
  _has_neighbors: boolean = false;
  _dir: dir;
  constructor(x: number, y: number, dir: dir) {
    this._x = x;
    this._y = y;
    this._dir = dir;
  }

  show(p5: p5, color?: number) {
    p5.push();
    p5.translate(variables.w_grid / 2, variables.h_grid / 2);
    p5.strokeWeight(2);
    color ? p5.stroke(color) : p5.stroke(255);
    if (this._dir === dir.HORIZONTAL) {
      p5.line(this._x, this._y, this._x + variables.length, this._y);
    } else {
      p5.line(this._x, this._y, this._x, this._y + variables.length);
    }
    p5.pop();
  }

  createNeighbors() {
    let A: Toothpick;
    let B: Toothpick;
    if (this._dir === dir.HORIZONTAL) {
      A = new Toothpick(this._x, this._y - variables.length / 2, dir.VERTICAL);
      B = new Toothpick(
        this._x + variables.length,
        this._y - variables.length / 2,
        dir.VERTICAL
      );
    } else {
      A = new Toothpick(
        this._x - variables.length / 2,
        this._y,
        dir.HORIZONTAL
      );
      B = new Toothpick(
        this._x - variables.length / 2,
        this._y + variables.length,
        dir.HORIZONTAL
      );
    }
    return [A, B];
  }
  same_type(other: this) {
    let mid_x = other._x + variables.length / 2;
    let mid_y = other._y + variables.length / 2;
    if (other._dir === dir.HORIZONTAL) {
      return (
        this._x === mid_x &&
        (other._y === this._y || other._y === this._y + variables.length)
      );
    } else {
      return (
        this._y === mid_y &&
        (other._x === this._x || other._x === this._x + variables.length)
      );
    }
  }
}
