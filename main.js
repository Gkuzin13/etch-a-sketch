
// Grabs the squares container
const squareContainer = document.getElementById('squares-ctn');

// Asks the user for a number
let userInputNumber = prompt('How many squares would you like?');
// Calls createSquares function
userInputNumber = createSquares();

// Multiplies the user input value by itself 
function numberMultiply() {
    return userInputNumber * userInputNumber;
};

// Creates a number of squares calculated from users input
function createSquares() {
    //
    for(i = 1; i <= numberMultiply(); i++) {
        // Creates div 
        let square = document.createElement('div');
        // Adds class to the div
        square.classList.add('square-block');

        // Changes the amount of Rows/Columns from users input
        squareContainer.style.gridTemplateRows = `repeat(${userInputNumber}, 1fr)`;
        squareContainer.style.gridTemplateColumns = `repeat(${userInputNumber}, 1fr)`;

        // Appends created div squares
        squareContainer.appendChild(square);              
    };
};

// Color Randomizer
function getRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

// Grabs the square-block class name
const squareBlock = document.querySelectorAll('.square-block');

// Applies style whenever the user hovers the mouse over the blocks
squareBlock.forEach(squareBlock => squareBlock.addEventListener
    ('mouseenter', e => {
        squareBlock.style.backgroundColor = getRandomColor();
        squareBlock.style.transition = 'all 0.2s';
    })
);        

// Grabs the reset button 
const resetButton = document.getElementById('reset-btn');
//  Resets all squares to default white color
resetButton.addEventListener('click', e => {
    squareBlock.forEach(squareBlock => {
        squareBlock.style.backgroundColor = 'white';
        squareBlock.style.transition = 'all 0.2s';
    })
}); 
    


    
