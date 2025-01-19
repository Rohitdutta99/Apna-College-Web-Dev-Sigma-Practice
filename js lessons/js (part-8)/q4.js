const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((el) => el*2)];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));
