function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}
let n = prompt("Enter n");
multipleGreet(greet, n);