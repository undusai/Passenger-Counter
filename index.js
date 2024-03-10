let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
console.log(saveEl)
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function decrement(){
    count -= 1
    countEl.textContent = count
}


function save(){
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
}

