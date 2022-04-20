// Select color input
// Select size input

//imports elements from the document, and assigns them to variables

let pixelCanvas = document.getElementById('pixelCanvas');
let formSubmit = document.getElementById('sizeSubmit');
let sizePicker = document.getElementById('sizePicker');
let inputColumn = document.getElementById('inputHeight');
let inputRow = document.getElementById('inputWidth');
let colorPicker = document.getElementById('colorPicker');

// function to call clearGrid() to clear the grid then call makeGrid() to make new grid

sizeSubmit.addEventListener('click', (evt) => {
	evt.preventDefault();
	clearGrid();
	makeGrid();
});

// function to assign chosen color to the colorChoice variable

var colorChoice = colorPicker.value;

colorPicker.addEventListener("input", function() {
    colorChoice = colorPicker.value;
});

// function to assign the chosen color into the clicked cell in the grid

function fillColor(event) {
	event.target.style.backgroundColor = colorChoice;
    console.log("changeColor is running!");
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
	for (let y = 0; y < inputHeight.value; y++ ){
		const tableRow = pixelCanvas.insertRow(y) ;
		    for (let x = 0; x < inputWidth.value; x++ ){
				const tableCell = tableRow.insertCell(x) ;
					tableCell.addEventListener('click', fillColor, false);
				}
	}
	console.log("makeGrid is running!");
}

//function to clearGrid() 

function clearGrid(){
	while (pixelCanvas.innerHTML !== '') {
		pixelCanvas.innerHTML = '';
	}
}
