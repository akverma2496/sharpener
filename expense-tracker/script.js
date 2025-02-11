
let edit_flag = null;
let prevItems = null;

let capture = document.getElementById("list-items");

capture.addEventListener("click", (e) => {

    //if delete pressed
    if(e.target.innerText == "Delete"){
        let item_to_remove = e.target.parentElement.parentElement
        capture.removeChild(item_to_remove);

        let obj = JSON.parse(item_to_remove.firstChild.textContent);

        let allTasks = JSON.parse(localStorage.getItem("all-tasks"));

        let updated = allTasks.filter((task) => {
            task.desciption != obj.desciption ||
            task.amount != obj.amount ||
            task.category != obj.category
        })

        localStorage.setItem("all-tasks", JSON.stringify(updated))
    }

    //if edit pressed
    if(e.target.innerText == "Edit"){

        let item_to_edit = e.target.parentElement.parentElement
        let text = item_to_edit.textContent.replace("DeleteEdit", "");
        let obj = JSON.parse(text);

        document.getElementById("desc").value = obj.desciption
        document.getElementById("amount").value = obj.amount
        document.getElementById("cat").value = obj.category

        edit_flag = item_to_edit;
        prevItems = obj;

    }
} )

function handleSubmit(e){
    
    e.preventDefault();

    const itemDetails = {
        "desciption" : e.target.desc.value,
        "amount": e.target.amount.value,
        "category" : e.target.cat.value
    }

    if(edit_flag){
        edit_flag.firstChild.textContent = JSON.stringify(itemDetails);
        let allTasks = JSON.parse(localStorage.getItem("all-tasks")) || [];

        allTasks = allTasks.map((task) => {
            if(task.desciption == prevItems.desciption && task.amount == prevItems.amount && task.category == prevItems.category){
                return (itemDetails);
            }
            return task;
        })

        localStorage.setItem("all-tasks", JSON.stringify(allTasks));
        edit_flag = null;
    }
    else{

        let allTasks = JSON.parse(localStorage.getItem("all-tasks")) || [];
        allTasks.push(itemDetails);
        localStorage.setItem("all-tasks", JSON.stringify(allTasks))

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("class", "delete-btn")
        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class", "edit-btn");

        let btnDiv = document.createElement("div");
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(editBtn);

        let newItem = document.createElement("li");
        newItem.textContent = JSON.stringify(itemDetails);
        newItem.appendChild(btnDiv);
        
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
        deleteBtn.setAttribute("class", "delete-btn")
        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class", "edit-btn");

        let btnDiv = document.createElement("div");
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(editBtn);

        let newItem = document.createElement("li");
        newItem.textContent = JSON.stringify(task);
        newItem.appendChild(btnDiv);
        
        let list_items = document.getElementById('list-items')
        list_items.appendChild(newItem);

    });
})