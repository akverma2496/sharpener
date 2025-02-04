// Add input element inside form, before button, to take fruit description
let des = document.createElement("input");
des.id = "description";
let item = document.getElementById("fruit-to-add");
let form = document.querySelector("form")
let hold = item.nextElementSibling
form.insertBefore(des, hold)


// Show the fruit description in italics on the next line
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let list = document.createElement("li");
    let listText = document.createTextNode(item.value)

    let btn = document.createElement("button");
    let btnText = document.createTextNode("x");
    btn.appendChild(btnText)
    btn.className = "delete-btn";

    let para = document.createElement("p");
    let paratext = document.createTextNode(des.value)
    para.appendChild(paratext)
    para.setAttribute("style", "font-style:italic;")

    list.appendChild(listText)
    list.appendChild(para);
    list.appendChild(btn)

    let ul = document.querySelector(".fruits")
    ul.appendChild(list)
})

// Show the fruit description in italics on the next line


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById("filter")

filter.addEventListener("keyup", function (e) {

    const textentered = e.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit")

    for (let i = 0; i < fruitItems.length; i++){

        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();

        const currentFruitDescription = fruitItems[i].firstElementChild.firstChild.textContent.toLowerCase();

        if (currentFruitText.indexOf(textentered) == -1 && 
        currentFruitDescription.indexOf(textentered) == -1) {
            fruitItems[i].style.display = "none";
        }
    }
})
