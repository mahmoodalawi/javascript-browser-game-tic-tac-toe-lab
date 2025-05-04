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

  init();

/*----------------------------- Event Listeners -----------------------------*/



