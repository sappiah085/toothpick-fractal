import p5 from "p5";
import { variables } from "../common/variables";
import { Toothpick } from "../classes/toothpick";
import { dir } from "../common/enums";
export let toothpicks: Toothpick[] = [];
export function setup(p5: p5): void {
  p5.createCanvas(variables.w_grid, variables.h_grid);
  p5.background(0);
  toothpicks.push(new Toothpick(variables.w_grid / 2 - 400, variables.h_grid/2-400, dir.VERTICAL));
}
