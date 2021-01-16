const gridContainer=document.querySelector('.gridContainer');
let cellColor = 'black';

function setGrid(size){
    // empties cells
    removeCells();
    for (i=0;i<size;i++){
        for (j=0;j<size;j++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
            cell.style.minWidth=(`40/${size}`);
            cell.style.minHeight=(`40/${size}`);
            // figure out how to trigger trail on click
            // cell.addEventListener('click', () => {
            cell.addEventListener('mouseover',()=>{
                cell.style.backgroundColor= `${cellColor}`;
            });
        }
    }
    setGridDimensions(size);
}

function setGridDimensions(size){
    gridContainer.style.gridTemplateColumns = (`repeat(${size},1fr)`);
    gridContainer.style.gridTemplateRows = (`repeat(${size},1fr)`);
}

function removeCells(){
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

// starter grid
setGrid(16);


