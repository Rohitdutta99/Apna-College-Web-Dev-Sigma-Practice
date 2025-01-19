// function success(){
//     console.log("data saved!");
// }

// function failure(){
//     console.log("weak connection.");
    
// }

function savedata(data){
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1
        if (netSpeed > 4){
            resolve("data saved!");
        }
        else{
            reject("weak connection.");
        }
    });

};

