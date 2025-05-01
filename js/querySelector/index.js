// Write the code as shown in the video below:
let mainHeading = document.querySelector("#main-heading")
mainHeading.style.textAlign = "right";

let heading = document.querySelector("h2")
heading.style.color = "brown";
heading.style.marginLeft = "30px"

let items = document.querySelector(".fruits");
items.style.backgroundColor = "grey"
items.style.padding = "30px"
items.style.margin = "30px"
items.style.width = "50%"
items.style.borderRadius = "5px";
items.style.listStyleType = "none";

let listItem = document.querySelectorAll(".fruit")

for (let i = 0; i < listItem.length; i++){
    listItem[i].style.backgroundColor = "white"
    listItem[i].style.padding = "10px"
    listItem[i].style.margin = "10px"
    listItem[i].style.bordeRadius = "5px"
}
// Write answer to the questions asked below:
let evenListItems = document.querySelectorAll(".fruit:nth-child(even)");

for (let i = 0; i < evenListItems.length; i++){
    evenListItems[i].style.backgroundColor = "brown"
    evenListItems[i].style.color = "white"
}