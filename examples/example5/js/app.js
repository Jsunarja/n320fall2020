//create references for object and elements in object
let mainRect = document.getElementById("rectangle");
let rectY = Number(mainRect.getAttribute("y"));
let rectX = Number(mainRect.getAttribute("x"));

//button function to move rectangle
function moveRect() {
	rectY -= 10;
	mainRect.setAttribute("y", rectY);

	rectX -= 10;
	mainRect.setAttribute("x", rectX);
}
