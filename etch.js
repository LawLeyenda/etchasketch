const container = document.getElementById('container');
var btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', (e) => {
    clearDraw();
    
});

    document.addEventListener('DOMContentLoaded', () => {
        createGrid();
        draw();
    });

    function createGrid(){
        for(let i = 0; i < 15*15; i++){
            var placeGrid = document.createElement('div');
            placeGrid.classList.add('grid');
            container.appendChild(placeGrid);
        
        }
    }

    function draw(){
        Array.from(document.querySelectorAll('.grid')).forEach(placeGrid => {
            placeGrid.addEventListener('mouseenter', () => {
                placeGrid.classList.add('changeColor');
            });
        });
    }
    function clearDraw(){
        Array.from(document.querySelectorAll('.grid')).forEach(placeGrid => {
            placeGrid.remove();
        })
        createGrid();
        draw();
    }
