function createGrid(gridSize) {

    const container = document.getElementById("main-div");

    if (document.querySelectorAll(".square-div").length > 0) {

        const squares = document.querySelectorAll(".square-div");
        squares.forEach(square => {
            square.remove();
        });

        const rows = document.querySelectorAll(".row-div");
        rows.forEach(row => {
            row.remove();
        });
    }

    // Create the gridSize rows divs
    for (i=0; i<gridSize; i++) {

        const row_div = document.createElement("div");
        row_div.className = "row-div"
        container.appendChild(row_div);

    // Create the 16 column divs
        for (j=0; j<gridSize; j++) {
            const square_div = document.createElement("div");
            square_div.className = "square-div"
            square_div.addEventListener("mouseover", () => {square_div.style.backgroundColor = "red";});
            row_div.appendChild(square_div);
        }
    }
};

function main() {

    const gridSize = 16;
    createGrid(gridSize);

    // Get reset button
    const resetButton = document.getElementById("resetButton");

    // Add event listener to reset button
    resetButton.addEventListener("click", () => {
        const squares = document.querySelectorAll(".square-div");
        squares.forEach(square => {
            square.style.backgroundColor = "white";
        });
    });

    // Get size button
    const sizeButton = document.getElementById("sizeButton");

    // Add event listener to size button
    sizeButton.addEventListener("click", () => {
        const newSize = prompt("Enter a new grid size");

        if (newSize >= 100) {
            const newSize = prompt("Size limit is 100, enter a new size");
            createGrid(newSize);
        } else {
            createGrid(newSize);
        }
        
    });
}


main()
