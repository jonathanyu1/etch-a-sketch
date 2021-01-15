const gridContainer=document.querySelector('.grid-container');

function setGrid(size){
    for (i=0;i<size;i++){
        for (j=0;j<size;j++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }
}

setGrid(4);