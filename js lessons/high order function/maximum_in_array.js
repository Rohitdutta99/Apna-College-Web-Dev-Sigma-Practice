let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

let result = arr.reduce((max, el) => {
    if (el > max){
        return el;
    }
    else{
        return max;
    }
});

console.log("Max Element: "+result);

