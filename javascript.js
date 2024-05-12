const grids = document.querySelector(".grids");
const slider = document.querySelector(".grid-slider");


function addGrids(N){
    let totalN = N * N;
    let sideLength = grids.offsetWidth / N;

    for (let i = 1; i <= totalN; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.cursor = "cross-hair";
    
        grid.style.height = `${sideLength}px`;
        grid.style.width = `${sideLength}px`;

        grids.appendChild(grid);
    }
}

addGrids(slider.value);

console.log(slider.value);