let arr = [1,2,3,4,5,6,7,8,9];

// filter function
let newArr = arr.filter((el) => el%2==0); // here, if the element is even then only it gets added to the new array
console.log(newArr);

// filter function
let newArr2 = arr.filter((el) => el%2!=0); // here, if the element is odd then only it gets added to the new array
console.log(newArr2);

//every function
console.log(arr.every((el) => el%2==0)); // returns true or false

//some function
console.log(arr.some((el) => el%2==0)); // returns true or false

// reduce function
let result = arr.reduce((res, el) => (res+el));
console.log(result);

// reduce funtion // Senario-2
let result1 = arr.reduce((res, el) => (res*el));
console.log(result1);
