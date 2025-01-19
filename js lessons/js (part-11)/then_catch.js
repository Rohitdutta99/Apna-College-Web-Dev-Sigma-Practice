function saveDB(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1
        if (netSpeed > 4) {
            resolve("DATA SAVED, kya bolte public");
        }
        else {
            reject("weak connection. teri toh!");
        }
    });

};

saveDB("any text")
    .then((result) => {
        console.log("data 1 saved");
        console.log("result 1: "+result)
        return saveDB("hello world");
    }).then((result) => {
        console.log("data 2 saved!");
        console.log("result 2: "+result)
        return saveDB("hello to you.");
    }).then((result)=> {
        console.log("data 3 saved!");
        console.log("result 3: "+result)
    }).catch((result) => {
        console.log("error: "+ result);
        console.log("promise rejected.");
    });

// let request = saveDB("any text");
// request.then(()=> {
    //     console.log("promise resolved!");
//     console.log(request);
// })
// .catch(()=> {
//     console.log("promise rejected.");
//     console.log(request);
// })


// compact way to do it

// saveDB("any text")
//     .then(() => {
//         console.log("promise resolved!");
//         // console.log(request);
//     }).catch(() => {
//         console.log("promise rejected.");
//         // console.log(request);
//     });



// let any_name = saveDB("any text");
// any_name.then(()=> {
//     console.log("promise resolved!");    
// })
// .catch(()=> {
    //     console.log("promise rejected.");    
// })
