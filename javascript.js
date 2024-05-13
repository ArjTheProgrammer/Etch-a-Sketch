const grids = document.querySelector(".grids");
const slider = document.querySelector(".grid-slider");
const colorpicker = document.querySelector("#color-picker");
const clearButton = document.querySelector(".clear-button");
const randomColorButton = document.querySelector(".random-color");
const body = document.querySelector("body");

let color = "#000000";
let draw = false;

body.addEventListener("mousedown", () => {
    draw = true;
})

body.addEventListener("mouseup", () => {
    draw = false;
})

colorpicker.addEventListener("input", () => {
    color = `${colorpicker.value}`;
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
    addGrids(slider.value);
}

function fillGrid(e){
    e.target.style.backgroundColor = color;
}