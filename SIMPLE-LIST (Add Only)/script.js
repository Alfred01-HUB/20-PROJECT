let items = [];

const input = document.getElementById("listInput");
const addButton = document.getElementById("AddButton");
const listContainer = document.getElementById("empty-list");


const  renderList = ()=>{
    listContainer.innerHTML=""

    items.forEach((itemText)=>{
    const createItem = document.createElement("li")
    createItem.textContent=itemText
    listContainer.appendChild(createItem);
    })
}

const addItem = ()=>{
    const addedList = input.value

    if (addedList ==="")return;
    items.push(addedList);
    renderList()
    input.value= ""
}

addButton.addEventListener('click',addItem)
