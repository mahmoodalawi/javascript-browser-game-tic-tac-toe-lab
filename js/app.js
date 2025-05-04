/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 3, 6],
    
  ];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

// To verify that element are recognized 
// console.log(squareEls);
// console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
  };


const updateMessage = () =>{
    if(winner === false && tie === false){
        messageEl.textContent = `It is ${turn} turn!`
    } else if (winner === false && tie === true){
        messageEl.textContent = 'Its a tie!';
    } else {
        messageEl.textContent = `Congratulations ${turn}, You win!`
    }
}


const updateBoard = () => {
    board.forEach((valueXO, index) => {
      squareEls[index].textContent = valueXO;
    });
  };
  
  const placePiece = (index) => {
    board[index] = turn;
    // console.log(board); 
  };
  


  const handleClick = (event) => {
    const squareIndex = event.target.id;
     if (board[squareIdx] !== ''){
        
        return;
     }
     if (winner === true){
       return;
     }
    // console.log('Clicked square index:', squareIndex);
    placePiece(squareIndex);

  };

  const checkForWinner = () => {
    
  };

  const render = () => {
    updateBoard();
    updateMessage();
  };



  init();

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
  });


