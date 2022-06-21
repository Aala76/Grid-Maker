// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

function setCellColors() {
    let cell = document.querySelectorAll("td");
    for (var i = 0; i < cell.length; i++) {
        cell[i].onclick = function(){
            this.style.backgroundColor = colorSelected;
        }
    }
}


// Add a row
function addR() {
    let table = document.getElementById("grid");
    let row = table.insertRow(-1);

    row.insertCell(0);
    numRows += 1;
    if (numRows == 1) numCols++;

    if (numCols > 1) {
        for (let i = 0; i < numCols - 1; i++) {
            row.insertCell(0);
        }
    }
    console.log(numRows, 'rows and', numCols, 'columns')

}

// Add a column
function addC() {
    if (numRows == 0) {
        addR();
    }
    else {
        let rows = document.querySelectorAll("tr");
        for (let i = 0; i < numRows; i++) {

            let cols = document.createElement("td");
            rows[i].appendChild(cols);
        }
        numCols += 1;
    }

    console.log(numRows, 'rows and', numCols, 'columns')
}

// Remove a row
function removeR() {
    if (numRows == 0) alert('No Rows!');
    else {
        let tab = document.getElementById("grid");
        tab.deleteRow(-1)
        numRows -= 1;
        if (numRows == 0) numCols = 0;
    }
    console.log(numRows, 'rows and', numCols, 'columns')

}

// Remove a column
function removeC() {
    if (numCols == 0) alert('No columns!');
    else {
        let row = document.querySelectorAll("tr");
        for (let i = 0; i < numRows; i++) {
            row[i].deleteCell(-1);
        }
        numCols -= 1;
        if (numCols == 0) {
            let tab = document.getElementById("grid");
            numRows = 0;
            tab.innerHTML = "";
        }
    }

    console.log(numRows + ' rows and', numCols, 'columns')
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    if (colorSelected == null) alert("Select a Color");
    let cell = document.querySelectorAll("td"); 
    for(let i = 0; i < cell.length; i++){
        let col = window.getComputedStyle(cell[i]).backgroundColor;
        if (col == 'rgb(255, 255, 255)'){ 
            cell[i].style.backgroundColor = colorSelected;
        }
        
    }
}

// Fill all cells
function fillAll(){
    if (colorSelected == null) alert("Select a Color");
    let cell = document.querySelectorAll("td"); 
    for(let i = 0; i < cell.length; i++){
        cell[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    
    let cell = document.querySelectorAll("td"); 
    for(let i = 0; i < cell.length; i++){
        cell[i].style.backgroundColor = 'rgb(255, 255, 255)';

    }
}

function deleteTab() {
    let tab = document.getElementById("grid");
    tab.innerHTML = "";
    numRows = 0;
    numCols = 0;
    colorSelected = null;
}

