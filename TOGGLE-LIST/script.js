// SOURCE OF TRUTH
let items = [];

// SELECT ELEMENTS
const input = document.getElementById("listInput");
const addButton = document.getElementById("addButton");
const DelButton = document.getElementById("DelButton");

const listContainer = document.getElementById("listContainer");

// RENDER FUNCTION
const renderList = () => {
  listContainer.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    // Apply done state styling
    if (item.done) {
      li.classList.add("done");
    }

    // Toggle state on click
    li.addEventListener("click", () => {
      toggleItem(index);
    });

    listContainer.appendChild(li);
  });
};

// ADD ITEM
const addItem = () => {
  const value = input.value.trim();
  if (value === "") return;

  items.push({
    text: value,
    done: false
  });

  renderList();
  input.value = "";
};

const delItem = () => {
  if (items.length === 0) return;

  items.pop();
  renderList();
};

// TOGGLE ITEM STATE
const toggleItem = (index) => {
  items[index].done = !items[index].done;
  renderList();
};


// EVENT LISTENER
addButton.addEventListener("click", addItem);
DelButton.addEventListener("click", delItem);

