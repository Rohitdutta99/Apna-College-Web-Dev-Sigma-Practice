// let n = 5;

// for(let i=1; i<=n; i++){
//     console.log("hello: ",i);
// }

// console.log(process.argv);

const cal_sum = require("./math_prob.js");
const args = process.argv;
let c = parseFloat(args[2]);

for(let i=3; i<args.length-1; i++){
    c += parseFloat(args[i]);
}
console.log(c);
console.log(args[args.length-1]);


console.log(cal_sum(parseFloat(c), parseFloat(args[args.length-1])));




