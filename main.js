// main container
const container = document.getElementById("main-div");
for (i=0; i<16; i++) {

    const row_div = document.createElement("div");
    row_div.className = "row-div"
    container.appendChild(row_div);

    for (j=0; j<16; j++) {
        const square_div = document.createElement("div");
        square_div.className = "square-div"
        row_div.appendChild(square_div);
    }

}