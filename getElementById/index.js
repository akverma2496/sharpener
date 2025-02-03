let h1tag = document.getElementById("main-heading");
let divtag = document.getElementById("header")
let basketHeading = document.getElementById("basket-heading")
let lastmsg = document.getElementById("thanks")

h1tag.textContent = "Fruit World";
h1tag.style.color = "orange";

divtag.style.backgroundColor = "green";
divtag.style.borderBottom = "2px solid orange"

basketHeading.style.color = "green"

lastmsg.innerHTML = "<p>Please visit us again</p>"