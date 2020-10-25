
// Grabs the squares container
const squareContainer = document.getElementById('squares-ctn');

// Grabs grid size button 
const gridSizeBtn = document.getElementById('grid-size-btn');

// Declares the default square number
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

// Selects the created square-block class
let squareBlock = document.querySelectorAll('.square-block');

// Grabs each class and on mouse hover paints them in black
squareBlock.forEach(squareBlock => squareBlock.addEventListener
    ('mouseenter', e => {
        squareBlock.style.backgroundColor = 'black';
    })
);  

// Resets all squares to default white color
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', e => {
    squareBlock.forEach(squareBlock => {
        squareBlock.style.backgroundColor = 'white';    
    });
});

// Grabs random color button and on click runs randomColor function
const randomColorBtn = document.getElementById('random-color-btn');
randomColorBtn.addEventListener('click', randomColor);

// Color Randomizer
function getRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

// Paints each square randomly calculated from getRandomColor function
function randomColor() {
    squareBlock.forEach(squareBlock => squareBlock.addEventListener('mouseenter', e=> {
        squareBlock.style.backgroundColor = getRandomColor();
        })
    );
};

// Grabs mono color button and on click runs randomColor function
const monoColorBtn = document.getElementById('mono-color-btn');
monoColorBtn.addEventListener('click', monoColor);

// Grabs each square and on mouse hover paints in black
function monoColor() {
    squareBlock.forEach(squareBlock => squareBlock.addEventListener
        ('mouseenter', e => {
            squareBlock.style.backgroundColor = 'black';
        })
    );
};

// Creates number of squares depending on useres input
gridSizeBtn.addEventListener('click', e => {

    // Resets the square container
    squareContainer.innerHTML = '';

    // Asks the user for a number
    squareNumber = prompt('Enter a number between 2 and 100: ');

    // If the user hits cancel create the default square number 
    if(squareNumber == null) {
       squareNumber = 16;
    };

    // Asks the user input a number between 2 - 100 
    if(squareNumber < 2 || squareNumber >= 100 || squareNumber == '') {
        squareNumber = prompt('Try again. Enter a number between 2 amd 100: ');
    };

    // Creates squares depending on users selected number
    squareNumber = createSquares();

    // 
    squareBlock = document.querySelectorAll('.square-block');

    // 
    if(randomColorBtn.clicked == true) {
        randomColor();
    } else {
        monoColor();
    };
});

    




    
