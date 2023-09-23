let count = 0;

let countEl = document.getElementById("count-ele")
let saveEl = document.getElementById("save-ele")

function increment(){
    count = count + 1
    //console.log(count)
    countEl.innerHTML = count
}

function save(){ 
    let oldCount = count + " - "
   // saveEl.innerHTML += oldCount
    saveEl.textContent += oldCount
    console.log(count)

    //it Displays 0 when after saving of previous entry 
    countEl.innerHTML = 0
    //it Sets count zero
    count = 0  
}