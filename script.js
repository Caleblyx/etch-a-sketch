const container = document.querySelector(".container")

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
            box.addEventListener('mouseover', changeBoxColor)
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeBoxColor(e) {
    this.style.backgroundColor = "black"
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

createGrid(100);
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetPrompt);