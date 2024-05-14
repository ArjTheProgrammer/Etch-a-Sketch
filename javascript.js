const grids = document.querySelector(".grids");
const slider = document.querySelector(".grid-slider");
const colorpicker = document.querySelector("#color-picker");
const clearButton = document.querySelector(".clear-button");
const randomColorButton = document.querySelector(".random-color");
const body = document.querySelector("body");

let color = "#000000";
let draw = false;
let clickRandomButton = false;


//events that happen in the projects
body.addEventListener("mousedown", () => {
    draw = true;
})

body.addEventListener("mouseup", () => {
    draw = false;
})

colorpicker.addEventListener("input", () => {
    color = `${colorpicker.value}`;
})

clearButton.addEventListener("click", () => {
    clearGrid();
    addGrids(slider.value);
})

randomColorButton.addEventListener("click", () => {
    updateRandomButton();
})
//for the function of slider
const displaySliderValue = document.querySelector(".display-slider-value");
displaySliderValue.textContent = `Grids: ${slider.value}`;
addGrids(slider.value);

slider.addEventListener("input", () => {
    clearGrid();
    displaySliderValue.textContent = `Grids: ${slider.value}`;
    addGrids(slider.value);
});

function addGrids(N){
    let totalN = N * N;
    let width = grids.offsetWidth / N;

    let height = grids.offsetHeight / N;

    for (let i = 1; i <= totalN; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.cursor = "cross-hair";
    
        grid.style.height = `${height}px`;
        grid.style.width = `${width}px`;

        grid.addEventListener("mouseover", (e) => {
            if (draw){
                fillGrid(e);
            }
        });
        grids.appendChild(grid);
    }
}

function clearGrid(){
    grids.innerHTML = "";
}

function fillGrid(e){
    if (clickRandomButton == true){
        e.target.style.backgroundColor = randomColor();
    }
    else {
        e.target.style.backgroundColor = color;
    }
}


function randomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#';

    for (let i = 1 ; i <= 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function selected(e){
    e.style.backgroundColor = "red";
}

function updateRandomButton(){
    if (clickRandomButton == true){
        randomColorButton.style.backgroundColor = "white";
        clickRandomButton = false;
    }
    else {
        randomColorButton.style.backgroundColor = "red";
        clickRandomButton = true;
    }
}