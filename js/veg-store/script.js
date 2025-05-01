
function handleSubmit(e) {

    e.preventDefault();

    const itemDetails = {
        "name": e.target.desc.value,
        "amount": e.target.amount.value,
        "quantity": e.target.quantity.value,
    }

    console.log(itemDetails);

    axios.post('https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data', itemDetails)
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });

    e.target.reset();

}

function deleteItem(button){
    
    axios.delete(`https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data/${button.class}`)
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
}

function buyItem(button){

    let item = document.getElementsByClassName(button.className)
    console.log(item[0].value)

    axios.get(`https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data/${button.className}`)
    .then((response) => {
        
        let updated_value = parseInt(response.data.quantity) - parseInt(item[0].value)

        if(updated_value == 0){
            return axios.delete(`https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data/${button.className}`)
        }

        let update_data = {"name": response.data.name, "amount": response.data.amount, "quantity": updated_value}
        return axios.put(`https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data/${button.className}`, update_data)
    })
    .then(() => {
        console.log("Everything successful")
        window.location.reload();
    })
    .catch((error) => {
        console.log(error)
    })
}

window.addEventListener("DOMContentLoaded", () => {

    axios.get('https://crudcrud.com/api/a659bf06386c49e9932330c13fccde75/data')
        .then((response) => {
            document.getElementById("total").innerText = response.data.length;
            let ul = document.getElementById("list-items")

            for (let i = 0; i < response.data.length; i++) {

                let child = `<li>${response.data[i].name}<span>  RS ${response.data[i].amount}</span> <span>${response.data[i].quantity} KG</span> <input class=${response.data[i]._id}></input> <button onclick="buyItem(this)" class=${response.data[i]._id}>Buy</button> <button onclick="deleteItem(this)" class=${response.data[i]._id}>Delete</button></li>`

                ul.innerHTML = ul.innerHTML + child;
            }
        })
        .catch((error) => {
            console.log(error);
        });
})