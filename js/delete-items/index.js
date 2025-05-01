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

    // Store each user separately using their username as the key
    localStorage.setItem(username, JSON.stringify(userDetails));

    // Update the displayed user list
    displayUsers();
}

function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Clear previous list

    Object.keys(localStorage).forEach(key => {
        let user = JSON.parse(localStorage.getItem(key));
        if (user && user.username) { // Ensure valid data
            const listItem = document.createElement("li");
            listItem.textContent = `${user.username} - ${user.email} - ${user.phone} `;
            
            // Create a delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.onclick = function () {
                localStorage.removeItem(user.username); // Remove from local storage
                displayUsers(); // Refresh the list
            };
            
            listItem.appendChild(deleteButton);
            userList.appendChild(listItem);
        }
    });
}

// Display users when the page loads
module.exports = handleFormSubmit;
