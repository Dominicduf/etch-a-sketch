// main container
const container = document.createElement("div");
container.id = "main-div"
document.body.appendChild(container);


for (i=0; i<16; i++) {
    const square_div = document.createElement("div");
    square_div.className = "square-div"
    container.appendChild(square_div);
}