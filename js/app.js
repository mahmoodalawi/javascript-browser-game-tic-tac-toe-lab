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
const resetBtnEl = document.getElementById('reset');


// To verify that element are recognized 
// console.log(squareEls);
// console.log(messageEl);
// console.log(resetBtnEl);

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
  

  const checkForTie = () => {
    if(winner === true){
        return;
    }
    if(board.includes('')){
        tie = false;
    } else {
        tie = true;
    }
};

const switchPlayerTurn = () =>{
    if(winner === true){
        return
    } else {
        if(turn === 'X'){
            turn = 'O'
            
        } else if (turn === 'O'){
            turn = 'X'
            
        }
    }
    
}


  const handleClick = (event) => {
    const squareIndex = event.target.id;
     if (board[squareIndex] !== ''){
        
        return;
     }
     if (winner === true){
       return;
     }
    // console.log('Clicked square index:', squareIndex);
    placePiece(squareIndex);
    checkWinner();
    checkForTie();
    switchPlayerTurn();
    render();


  };

  const checkWinner = () => {
    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
      winner = true;
    }
    if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
      winner = true;
    }
    if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      winner = true;
    }
    if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
      winner = true;
    }
    if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      winner = true;
    }
    if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      winner = true;
    }
    if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      winner = true;
    }
    if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      winner = true;
    }
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

  resetBtnEl.addEventListener('click', init);



