const countDisplay = document.getElementById("count");
const increase = document.getElementById("increment");
const restart = document.getElementById("reset");
const decrement = document.getElementById("decrement");

let count = 0;

const incrementCount = () => {
  count++;
  countDisplay.textContent = count;
};

const reset = () => {
  count = 0;
  countDisplay.textContent = count;
};

const decrementCount = () => {
  if (count > 0) {
    // Only decrease if above 0
    count--;
    countDisplay.textContent = count;
  }
};

increase.addEventListener("click", incrementCount);
restart.addEventListener("click", reset);
decrement.addEventListener("click", decrementCount);
