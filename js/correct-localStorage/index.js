// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();

    // Get user input values
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create an object to store user details
    const userDetails = {
        username: username,
        email: email,
        phone: phone
    };

    // Store the object in local storage as a string
    localStorage.setItem("User Details", JSON.stringify(userDetails));
}


module.exports = handleFormSubmit;