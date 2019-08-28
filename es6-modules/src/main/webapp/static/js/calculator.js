import { add } from "add";
import { minus } from "minus";
import { multiply } from "multiply";

function calculate(x,y) {
  return function(x,y){
    return add(x,y) + minus(x,y) + multiply(x,y);
  };
}

export {calculate}