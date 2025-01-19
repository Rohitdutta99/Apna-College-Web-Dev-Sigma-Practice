let arr = [5, 4, 3, 7, 9];

let result = arr.reduce((min, el) => {
    if(el < min){
        return el;
    }
    else{
        return min;
    }
});

console.log("Minimum is: "+result);