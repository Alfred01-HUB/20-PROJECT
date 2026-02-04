const countDisplay = document.getElementById('count')
const button = document.getElementById('clickButton')
console.log(button)

let count = 0

const  incrementCount=()=>{
    count ++
    countDisplay.textContent=count;
}

button.addEventListener('click',incrementCount)
console.log(countDisplay,button)
