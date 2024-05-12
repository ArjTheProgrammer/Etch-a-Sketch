const grids = document.querySelector(".grids");
const slider = document.querySelector(".grid-slider");

const displaySliderValue = document.querySelector(".display-slider-value");
displaySliderValue.textContent = `Grids: ${slider.value}`;

slider.addEventListener("input", () => {
    clearGrid();
    displaySliderValue.textContent = `Grids: ${slider.value}`;
    addGrids(slider.value);
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