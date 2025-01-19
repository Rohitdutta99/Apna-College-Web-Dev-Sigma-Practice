//Square and sum the array elements using the arrow function and then find the average of the array.
let nums = [1, 2, 3, 4, 5];

let square = nums.map((nums) => nums*nums);
console.log(...square);

let sum = nums.reduce((acc, el) => acc+el);
console.log(sum);

let avg = sum / nums.length;
console.log(avg);