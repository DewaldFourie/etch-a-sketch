
let color = 'black';
let click = true;

// Function to add a board to the container taking the input sie of user
// Default = 32x32
function populateBoard (size) {
    // clears the board if there is previous configuration
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    // creates the columns and rows with the size input
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // creates div elements for the area of the board with size
    for( i = 0; i < (size*size); i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

// change the size of the board using above function with parameters 2 and 100
function changeSize(input){
    if ( input >= 2 && input < 100){
        document.querySelector('.error').style.display = 'none'
        populateBoard(input);
    }
    else {
        document.querySelector('.error').style.display = 'flex'
        console.log("ERROR, program crash probability");
    }
}

// function to add color to the square where mouse is pointed
function colorSquare() {
    if (click){
        if (color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }   
}

// Function to change the color of the pointer by listening to buttons in html
function changeColor(choice) {
    color = choice;
}

// Function to reset the board, basically turns all the squares back to white, erases all.
function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

// determine if miouse is clicked = true of false to show if coloring or not. UX helper
document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON'){
        click = !click;
        if (click){
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        }
        else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        }
    }
})

populateBoard(32);