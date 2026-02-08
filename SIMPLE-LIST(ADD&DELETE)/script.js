let items = [];

const input = document.getElementById("listInput");
const addButton = document.getElementById("AddButton");
const listContainer = document.getElementById("empty-list");
const DelButton = document.getElementById("DelButton")

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

const deleteItem = () => {
  if (items.length === 0) return;
  items.pop();
  renderList();
};


DelButton.addEventListener("click",deleteItem)
addButton.addEventListener('click',addItem)
