// Write your code below:
let firstDiv = document.getElementById("header")
let smallHead = document.createElement("h3")
let smallHeadText = document.createTextNode("Buy high quality organic fruits online")

firstDiv.appendChild(smallHead);
smallHead.appendChild(smallHeadText);
smallHead.style.fontStyle = "italic";

let para = document.createElement("p");
let paratext = document.createTextNode("Total fruits: 4");
para.appendChild(paratext);
para.id = "fruits-total";

firstDiv.nextElementSibling.appendChild(para)


