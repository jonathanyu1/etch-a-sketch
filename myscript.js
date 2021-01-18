const gridContainer=document.querySelector('.gridContainer');
let cell=[]
let cellColor = 'black';
let trailStatus = 'false';
let gridSize=16;

gridContainer.addEventListener('click', () =>{
    toggleTrail();
});

// set slider value and output 
const slider=document.getElementById('slider');
let sliderValue=document.getElementById('sliderValue');
sliderValue.innerHTML = slider.value;
slider.addEventListener('change', ()=> {
    setGrid(slider.value);
});
slider.addEventListener('input', ()=> {
    sliderValue.innerHTML=slider.value;
});


const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=> {
    btn.addEventListener('click', function (e){
        switch(e.target.id){
            case 'clear':
                setGrid(gridSize);
                break;
            case 'eraser':
                cellColor='white';
                break;
            case 'color':
                btn.addEventListener('input',updateColor,false);
                btn.addEventListener('change',updateColor,false);
        }
    });
    
});

function updateColor(e){
    cellColor=e.target.value;
}

function toggleTrail(){
    // if trail is on, turn off for all cells
    if (trailStatus=='true'){
        trailStatus='false';
        cell.forEach(item=>{
            item.removeEventListener('mouseover', enableTrail);
        });
    }
    // if trail is off, turn on for all cells
    else if (trailStatus=='false'){
        trailStatus='true';
        cell.forEach(item=>{
            //item.addEventListener('click', enableTrail);
            item.addEventListener('mouseover', enableTrail);
        });
    }
}


// enables and sets trail to specified cell color
function enableTrail(e){
    e.target.style.backgroundColor=`${cellColor}`;
}

function setGrid(size){
    // empties cells
    removeCells();
    for (i=0;i<size*size;i++){
            cell[i]=document.createElement('div');
            cell[i].classList.add('cell');
            gridContainer.appendChild(cell[i]);
            cell[i].style.minWidth=(`35/${size}`);
            cell[i].style.minHeight=(`35/${size}`);
            // ensures first square clicked is colored in
            cell[i].addEventListener('click', enableTrail);
    }
    setGridDimensions(size);
    gridSize=size;
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

