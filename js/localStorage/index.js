// Write your code below:
// Function called when the form is submitted
let form = document.getElementById("appointmentForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Store data in local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
});



