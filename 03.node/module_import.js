// <Common JS>
// const moduleData = require("./math");
// const addData = moduleData.add(1, 2);

// <ES Module>
import {add, sub} from "./math.js";
import multiply from "./math.js";
console.log(multiply(2, 3));
console.log(add(1, 2));
console.log(sub(3, 2));
