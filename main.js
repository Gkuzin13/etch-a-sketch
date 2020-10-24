
// Grabs the squares container
const squareContainer = document.getElementById('squares-ctn');

const gridSizeBtn = document.getElementById('grid-size-btn');

let squareNumber = 16;

squareNumber = createSquares();

// Multiplies the user input value by itself 
function numberMultiply() {
    return squareNumber * squareNumber;
};

// Creates a number of squares calculated from users input
function createSquares() {
    for(i = 1; i <= numberMultiply(); i++) {

        // Creates div 
        let square = document.createElement('div');

        // Adds class to the div
        square.classList.add('square-block');

        // Changes the amount of Rows/Columns from users input
        squareContainer.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`;
        squareContainer.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`; 

        // Appends created div squares
        squareContainer.appendChild(square);    
    };      
};

let squareBlock = document.querySelectorAll('.square-block');
squareBlock.forEach(squareBlock => squareBlock.addEventListener
    ('mouseenter', e => {
        squareBlock.style.backgroundColor = 'black';
    })
);  

// Color Randomizer
function getRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

const resetButton = document.getElementById('reset-btn');
//  Resets all squares to default white color
resetButton.addEventListener('click', e => {
    squareBlock.forEach(squareBlock => {
        squareBlock.style.backgroundColor = 'white';    
    });
});

const randomColorBtn = document.getElementById('random-color-btn');

randomColorBtn.addEventListener('click', randomColor);

function randomColor() {
    squareBlock.forEach(squareBlock => squareBlock.addEventListener('mouseenter', e=> {
        squareBlock.style.backgroundColor = getRandomColor();
        })
    );
};

const monoColorBtn = document.getElementById('mono-color-btn');

monoColorBtn.addEventListener('click', monoColor);

function monoColor() {
    squareBlock.forEach(squareBlock => squareBlock.addEventListener
        ('mouseenter', e => {
            squareBlock.style.backgroundColor = 'black';
        })
    );  
};

gridSizeBtn.addEventListener('click', e => {
    squareContainer.innerHTML = '';
    squareNumber = prompt('Enter a number between 2-100');
    squareNumber = createSquares();
    squareBlock = document.querySelectorAll('.square-block');
    if(randomColorBtn.clicked == true) {
        randomColor();
    } else {
        monoColor();
    };
});

    




    
