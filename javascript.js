const grids = document.querySelector(".grids");
const slider = document.querySelector(".grid-slider");
const colorpicker = document.querySelector("#color-picker");
const clearButton = document.querySelector(".clear-button");
const randomColorButton = document.querySelector(".random-color");


//for the function of slider
const displaySliderValue = document.querySelector(".display-slider-value");
displaySliderValue.textContent = `Grids: ${slider.value}`;

slider.addEventListener("input", () => {
    clearGrid();
    displaySliderValue.textContent = `Grids: ${slider.value}`;
    addGrids(slider.value);
});

//for the function of color picking
let color = colorpicker.addEventListener("input", () => {
    console.log(colorpicker.value);
    return colorpicker.value;
})

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

        grids.appendChild(grid);
    }
}

function clearGrid(){
    grids.innerHTML = "";
}

function draw() {

}