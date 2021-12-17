for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e) =>{
            let address = addBar.value;
            let [activeCell, cellProp] = activecell(address);
            let enteredData = activeCell.innerText;

            cellProp.value = enteredData;
            console.log(cellProp);
        })
    }
}

let formulaBar = document.querySelector(".formula-bar");

formulaBar.addEventListener("keydown", (e)=>{
    let inputFormula = formula.value;
    if(e.key === "Emter" && inputFormula){
        let evaluatedValue = evaluateFormula(inputFormula);

    }
})

function evaluateFormula(formula){
    return eval(formula);   // from eval method it auto identify calculation
}

function setCellUIAndCellProp(evaluatedValue, formula){
    
}