let mov_arr = ["3 idiots", "avatar", "avengers", "gtmax", "dahmer", "monsters", "tkss", "lion king", "mufasa", "moana"];
let favourite = mov_arr[Math.floor(Math.random() * 10)];
alert("A random movie has been selected. Start guessing!"+ favourite); // For debugging purposes

// Attach event listener to the form
document.getElementById("mov_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the user's guess
    let guess = document.forms["mov_form"]["movie_name"].value.trim();

    // Check the guess
    if (guess === favourite) {
        alert("Congrats, Your guess is correct: " + guess);
        document.forms["mov_form"]["movie_name"].value = ""; // Clear the input field
    } else if (guess === "quit") {
        alert("Thank You for playing!");
        document.forms["mov_form"]["movie_name"].value = ""; // Clear the input field
    } else {
        alert("Wrong guess! Try again or type 'quit' to exit.");
        document.forms["mov_form"]["movie_name"].value = ""; // Clear the input field
    }
});
