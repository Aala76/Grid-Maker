// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    let row = table.insertRow(-1);

    row.insertCell(0);
    numRows += 1;
    if(numRows ==1) numCols ++;
    
    if (numCols > 1) {
        for (let i = 0; i < numCols -1 ; i++){
            row.insertCell(0);
        }
    }
    console.log(numRows , 'rows and' , numCols, 'columns')

}

// Add a column
function addC() {
    if (numRows == 0){
        addR();
    }
    else{
        let rows = document.querySelectorAll("tr");
        for(let i = 0; i < numRows; i++){
            
            let cols = document.createElement("td");
            rows[i].appendChild(cols);
        }
        numCols += 1;
    }

    console.log(numRows , 'rows and' , numCols, 'columns')
}

// Remove a row
function removeR() {
    if(numRows == 0)  alert('No Rows!');
    else{
        let tab = document.getElementById("grid");
        tab.deleteRow(-1)
        numRows -= 1;
        if(numRows == 0) numCols = 0;
    }
    console.log(numRows , 'rows and' , numCols, 'columns')
    
}

// Remove a column
function removeC() {
    if (numCols == 0) alert('No columns!');
    else{
        let row = document.querySelectorAll("tr"); 
        for(let i = 0; i < numRows; i++){
            row[i].deleteCell(-1); 
        }
        numCols -= 1;
        if (numCols == 0){
            let tab = document.getElementById("grid");
            numRows = 0;
            tab.innerHTML = "";
        }
    }
    
    console.log(numRows + ' rows and' , numCols, 'columns')
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function deleteTab(){
    let tab = document.getElementById("grid");
    tab.innerHTML = "";
    numRows = 0;
    numCols = 0;
}