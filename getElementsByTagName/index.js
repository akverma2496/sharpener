let listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontStyle = "italic"
}

listItems[listItems.length - 1].style.color = "blue";