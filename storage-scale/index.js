// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page

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

    // Retrieve existing users from local storage or initialize an empty array
    localStorage.setItem(username, JSON.stringify(userDetails));

    // Update the displayed user list
    displayUsers();
}

function displayUsers() {
    const userList = document.getElementById("user-list");

    // Iterate through local storage to retrieve all user objects
    Object.keys(localStorage).forEach(key => {
            let user = JSON.parse(localStorage.getItem(key));
            const listItem = document.createElement("li");
            listItem.textContent = `${user.username} - ${user.email} - ${user.phone}`;
            userList.appendChild(listItem);
    });
}

module.exports = handleFormSubmit