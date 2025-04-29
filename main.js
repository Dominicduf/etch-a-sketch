// main container
const container = document.getElementById("main-div");


function createLayout() {
    // Create the 16 rows divs
    for (i=0; i<16; i++) {

        const row_div = document.createElement("div");
        row_div.className = "row-div"
        container.appendChild(row_div);

    // Create the 16 column divs
        for (j=0; j<16; j++) {
            const square_div = document.createElement("div");
            square_div.id = "square-div"
            square_div.addEventListener("mouseover", () => {square_div.style.backgroundColor = "red";});
            row_div.appendChild(square_div);
        }
    }

    // Get reset button
    const resetButton = document.getElementById("resetButton");

    // Add event listener to reset button
    resetButton.addEventListener("click", () => {
        const squares = document.querySelectorAll("#square-div");
        squares.forEach(square => {
            square.style.backgroundColor = "white";
        });
    });
}


createLayout()
