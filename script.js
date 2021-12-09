function createGrid(n) {
    s = 100/n;
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        row.style.height = s.toString() + "%"
        for (let j = 0; j<n; j++) {
            const box = document.createElement('div');
            box.style.width = s.toString() + "%";
            box.classList.add("box");
            box.addEventListener('mouseover', colorBox);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function colorBox(e) {
    this.style.backgroundColor = color;
}

function erase(e){
    if (color == "white") {
        color = "black"
    } else {
        color = "white"
    }
    eraseButton.classList.toggle("selected");
}

function resetPrompt(e) {
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    userInput = prompt("Please input the number of squares you would like per side");
    n = parseInt(userInput, 10);
    if (n===NaN || n>100){
        n = 20;
    }
    console.log(n);
    createGrid(n);
}
let color = "black";
const container = document.querySelector(".container")
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");
resetButton.addEventListener("click", resetPrompt);
eraseButton.addEventListener("click", e => erase())
createGrid(100);

