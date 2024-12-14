import p5 from "p5";
import { toothpicks } from "./setup";
import { Toothpick } from "../classes/toothpick";
let workedOn = [];
export const draw = (p5: p5) => {
  let remove_last = toothpicks.shift();
  if (workedOn.length < 3009) {
    if (remove_last) {
      workedOn.push(remove_last);
      if (!remove_last._has_neighbors) {
        const [A, B] = remove_last.createNeighbors();
        if (!check_dis([...workedOn, ...toothpicks], A, p5, "A"))
          toothpicks.push(A);
        if (!check_dis([...workedOn, ...toothpicks], B, p5, "B"))
          toothpicks.push(B);
      }
    }
    if (workedOn.length > 0)
      workedOn.forEach((t, i) => {
        const color = p5.constrain(i * 0.12, 1, 255);
        t?.show(p5, color);
      });
  }
};

function check_dis(w_o: Toothpick[], myself: Toothpick, p5: p5, label: string) {
  let filter = w_o.filter((t) => t.same_type(myself));
  let no_push = false;
  if (filter.length === 2) no_push = true;
  return no_push;
}
