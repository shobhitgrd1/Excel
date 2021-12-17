//Storage
let sheetDB = [];

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor: "#000000",
            value: "",
            formula: "",
        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}

// Selector for cell frop

let bold = document.querySelector('.bold')
let italic = document.querySelector('.italic')
let underline = document.querySelector('.underline')
let fontFamily = document.querySelector('.font-family-prop')
let fontSize = document.querySelector('.font-size-prop')
let fontColor = document.querySelector('.font-color-prop')
let BGcolor = document.querySelector('.font-BgColor-prop')
let alignment = document.querySelectorAll('.alignment')
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];
let justifyAlign = alignment[3];

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

//attach property listner
bold.addEventListener("click", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    //modification
    cellProp.bold = !cellProp.bold; // data change by toggel
    // Ui change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
})

italic.addEventListener("click", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    //modification
    cellProp.italic = !cellProp.italic; // data change by toggel
    // Ui change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
})

underline.addEventListener("click", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    //modification
    cellProp.underline = !cellProp.underline; // data change by toggel
    // Ui change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none";
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
})

fontFamily.addEventListener("change", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);


    cellProp.fontFamily = fontFamily.value;   // data change
    cell.style.fontFamily = cellProp.fontFamily ;
    fontFamily.value = cellProp.fontFamily;
})

fontSize.addEventListener("change", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.fontSize = fontSize.value;   // data change
    cell.style.fontSize = cellProp.fontSize + "px";
    fontSize.value = cellProp.fontSize;
})

fontColor.addEventListener("change", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.fontColor = fontColor.value;   // data change
    cell.style.color = cellProp.fontColor;
    fontColor.value = cellProp.fontColor;
})

BGcolor.addEventListener("change", (e) => {
    let address = addBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.BGcolor = BGcolor.value;   // data change
    cell.style.backgroundColor = cellProp.BGcolor;
    BGcolor.value = cellProp.BGcolor;
})

alignment.forEach((alignElem) => {
    alignElem.addEventListener("click", (e)=>{
        let address = addBar.value;
        let [cell, cellProp] = activecell(address);

        let alignValue = e.target.classList[0];
        cellProp.alignment= alignValue;
        cell.style.textAlign = alignValue;


        switch(alignValue){
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "justify":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = activeColorProp;
                break;
        }

        

    })
})



let allCells = document.querySelectorAll(".cell");
for (let i = 0; i < allCells.length; i++){
    addListenerToAttachCellProperties(allCells[i]);

    
}

function addListenerToAttachCellProperties(cell){
    cell.addEventListener("click", (e) =>{

        let address = addBar.value;
        let [rid, cid] = decodeRC(address);
        let cellProp = sheetDB[rid][cid];


        //apply cell properties
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.fontFamily = cellProp.fontFamily ;
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BGcolor === "#000000" ? "transparent" : cellProp.BGcolor;
        

        

        //APPLY PROPERTIES UI PROPS CONTAINER
        bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
        italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
        underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
        fontColor.value = cellProp.fontColor;
        BGcolor.value = cellProp.BGcolor;
        fontFamily.value = cellProp.fontFamily;
        fontSize.value = cellProp.fontSize;
        switch(cellProp.alignment){
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                justifyAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "justify":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                justifyAlign.style.backgroundColor = activeColorProp;
                break;
        }
    })
}




function activecell(address) {
    let [rid, cid] = decodeRC(address);
    // Access cell and object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}

function decodeRC(address) { //decode rid cid from address
    // if address is "A1"
    let rid = Number(address.slice(1) - 1); // 1-1 =0
    let cid = Number(address.charCodeAt(0)) - 65; // a = 65-65 =0
    return [rid, cid];
}