
let edit_flag = null;
let prevItems = null;

let capture = document.getElementById("list-items");

capture.addEventListener("click", (e) => {

    //if delete pressed
    if(e.target.innerText == "Delete"){

        let item_to_remove = e.target.parentElement.parentElement
        capture.removeChild(item_to_remove);
        let text = item_to_remove.firstChild.textContent;
        let allTasks = JSON.parse(localStorage.getItem("all-tasks"));

        let updated = allTasks.filter((task) => {
            return task.repres != text
        })

        localStorage.setItem("all-tasks", JSON.stringify(updated))
    }

    //if edit pressed
    if(e.target.innerText == "Edit"){

        let item_to_edit = e.target.parentElement.parentElement   // list element
        let text = item_to_edit.textContent.replace("DeleteEdit", "")
        
        let allTasks = JSON.parse(localStorage.getItem("all-tasks"));

        let grab = allTasks.filter((task) => {
            return task.repres == text;
        })

        document.getElementById("desc").value = grab[0].description
        document.getElementById("amount").value = grab[0].amount
        document.getElementById("cat").value = grab[0].category

        edit_flag = item_to_edit;   /// list item
        prevItems = grab[0];   /// previous text in form of oobject

    }
} )



function handleSubmit(e){
    
    e.preventDefault();

    const itemDetails = {
        "description" : e.target.desc.value,
        "amount": e.target.amount.value,
        "category" : e.target.cat.value,
        "repres" : `Description : ${e.target.desc.value} | Amount : ${e.target.amount.value} | Category : ${e.target.cat.value}`
    }

    if(edit_flag){

        edit_flag.firstChild.textContent = itemDetails.repres;
        let allTasks = JSON.parse(localStorage.getItem("all-tasks")) || [];

        allTasks = allTasks.map((task) => {
            if(task.description == prevItems.description && task.amount == prevItems.amount && task.category == prevItems.category){
                return (itemDetails);
            }
            return task;
        })

        localStorage.setItem("all-tasks", JSON.stringify(allTasks));
        edit_flag = null;
        prevItems = null;
    }
    else{

        let allTasks = JSON.parse(localStorage.getItem("all-tasks")) || [];
        allTasks.push(itemDetails);
        localStorage.setItem("all-tasks", JSON.stringify(allTasks))

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("class", "delete-btn text-white bg-black px-3 py-1")
        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class", "edit-btn mx-5 text-white bg-black px-3 py-1");

        let btnDiv = document.createElement("div");
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.setAttribute('class', "float-right")

        let newItem = document.createElement("li");
        newItem.textContent = `Description : ${itemDetails.description} | Amount : ${itemDetails.amount} | Category : ${itemDetails.category}`
        newItem.appendChild(btnDiv);
        newItem.setAttribute("class", "text-lg mt-5")
        
        let list_items = document.getElementById('list-items')
        list_items.appendChild(newItem);

    }

    e.target.reset();

}



window.addEventListener("DOMContentLoaded", () => {

    let allTasks = JSON.parse(localStorage.getItem("all-tasks")) || [];

    allTasks.forEach(task => {
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("class", "delete-btn text-white bg-black px-3 py-1")
        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class", "edit-btn mx-5 text-white bg-black px-3 py-1");

        let btnDiv = document.createElement("div");
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.setAttribute('class', "float-right")

        let newItem = document.createElement("li");
        newItem.textContent = `Description : ${task.description} | Amount : ${task.amount} | Category : ${task.category}`
        newItem.appendChild(btnDiv);
        newItem.setAttribute("class", "text-lg mt-5")
        
        let list_items = document.getElementById('list-items')
        list_items.appendChild(newItem);
    });
})