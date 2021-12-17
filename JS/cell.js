let rows = 100;
let cols = 26;

let addColmCont = document.querySelector(".add-colm-cont")
let addRowCont = document.querySelector(".add-row-cont")
let cellCont = document.querySelector(".cell-cont")
let addBar = document.querySelector(".address-bar")

// Creating Serial Number Column
for (let i = 0; i < rows; i++) {
    let addCol = document.createElement("div")
    addCol.innerText = i + 1;
    addColmCont.appendChild(addCol);
}

// Creatiing Column A-Z
for (let i = 0; i < cols; i++) {
    let addRow = document.createElement("div")
    addRow.innerText = String.fromCharCode(i + 65);
    addRowCont.appendChild(addRow);
}

//  //Creating Column after AA-ZZ
// for (let j = 65; j < 91; j++) {
//     for (let i = 0; i < cols; i++) {
//         let addRow = document.createElement("div")
//         addRow.innerText = String.fromCharCode(j, i + 65);
//         addRowCont.appendChild(addRow);
//     }
// }

//creating Grid cells

for (let i = 0; i < rows; i++) {
    let rowCont = document.createElement("div")
    rowCont.setAttribute("class", "row-cont")
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div")
        cell.setAttribute("class", "cell")
        cell.setAttribute("contenteditable","true")
        cell.setAttribute("spellcheck","false")

        // Attributes for cell amd storage
        cell.setAttribute("rid", i)
        cell.setAttribute("cid", j)

        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell,i,j);
    }
    cellCont.appendChild(rowCont);
}
 
function addListenerForAddressBarDisplay(cell,i,j){
    cell.addEventListener("click" , (e)=>{
        let rowID = i+1;
        let colID = String.fromCharCode(j + 65);
        addBar.value = `${colID}${rowID}`
    })
 }

// by Default click on first cell by dom

let firstCell = document.querySelector(".cell");
firstCell.click();
