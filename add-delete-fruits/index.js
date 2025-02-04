// Add the Edit Button:

let list = document.getElementsByClassName("fruit");

for (let i = 0; i < list.length; i++) {

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Edit");
    btn.appendChild(btnText);
    btn.className = "edit-btn"

    list[i].appendChild(btn)
}

// Implement the code as in video but with one extra 'Edit' button in 'li'

//add functionality

let form = document.querySelector("form");
let ul = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    let inputText = document.getElementById("fruit-to-add")
    let list = document.createElement("li");
    let listText = document.createTextNode(inputText.value)
    list.className = "fruit";

    let btn = document.createElement("button");
    let btnText = document.createTextNode("x");
    btn.appendChild(btnText)
    btn.className = "delete-btn";

    let ebtn = document.createElement("button");
    let ebtnText = document.createTextNode("Edit");
    ebtn.appendChild(ebtnText);
    ebtn.className = "edit-btn"

    list.appendChild(listText)
    list.appendChild(btn);
    list.appendChild(ebtn)
    ul.appendChild(list);
    console.log(1)
})

// delete functionality
let fruits = document.querySelector(".fruits")
fruits.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        let fruitToDelete = event.target.parentElement
        fruits.removeChild(fruitToDelete)
    }
})