function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

saveToDB("Apna College", () => {
    console.log("your data was saved!");
    saveToDB("hello world", () => {
        console.log("success2: data2 saved.");
        saveToDB("Rohit Dutta", () => {
            console.log("success3: data3 saved.");

        }, () => {
            console.log("failure3, weak connection");

        });
    }, () => {
        console.log("failure2, weak connection2");
    });
}, () => {
    console.log("weak connection, data not saved");
});