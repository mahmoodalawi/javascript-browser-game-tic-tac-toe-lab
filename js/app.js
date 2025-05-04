/*-------------------------------- Constants --------------------------------*/



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
    board.forEach((valueXO, index)) => {
      squareEls[index].textContent = valueXO;
    };
  }; 

  const render = () => {
    updateBoard();
    updateMessage();
  };



  init();

/*----------------------------- Event Listeners -----------------------------*/



