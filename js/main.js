 /*----- constants -----*/
    const COLORS = {
     0: 'red',
     1: 'black'
     }

let player1 = 0
let player2 = 1
let board
let redScore =12;
let blackScore =12;

function init() {
 board = [
   [ null,1,null,1,null,1,null,1]
   [ 1,null,1,null,1,null,1,null]
   [null,1,null,1,null,1,null,1]
   [null,null,null,null,null,null,null,null]
   [null,null,null,null,null,null,null,null]
   [null,0,null,0,null,0,null,0]
   [0,null,0,null,0,null,0,null]
   [null,0,null,0,null,0,null,0]
]
turn =1
winner=null
render()
}

function render() {
    renderboard()
    rendermessage()
    rendercontrols()
    rendermovement()
}


const checkerboard=document.querySelector("#checkers-board")
console.log('this is checkerboard', checkerboard)
let redpiece = document.querySelectorAll('.redpiece')
let blackpiece =document.querySelectorAll('.blackpiece')



//Add black pieces to white spaces and red pieces to brown spaces.
// function addPiece() {
//     console.log('checkerboard', checkerboard)
// for (let i = 0; i <= 7; i++) {
//     for (let j = 0; j <= 7; j++) {
//       const square = document.getElementById(`c${j}r${i}`);
//       console.log('square', square)
//       if ((i + j) % 2 === 0 && i <= 2) { // Place black pieces
//         const piece = blackPiece.cloneNode(true);
//         square.appendChild(piece);
//       } else if ((i + j) % 2 === 0 && i >= 5) { // Place red pieces
//         const piece = redPiece.cloneNode(true);
//         square.appendChild(piece);
//       }
//     }
//   }
// } 
// addPiece()


function renderBoard() {
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            console.log(cellVal, rowIdx)
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(`c${j}r${i}`)
        })
    })
}
            
        
        

// function moveChecker (board, fromRow, fromCol, toRow, toCol) {
//     if (!isValidMove(board, fromRow, fromCol, toRow, toCol)) {
//         console.log("Invalid move!");
//         return false;
//     }
        
//     board[toRow][toCol] = board[fromRow][fromCol];
//     board[fromRow][fromCol] = null; // set the old position to an empty square
  
//     return true;
    
// }




//event listener
function givesPiecesEventListeners() {
    if (player1) {
        for(let i =0; i< redpiece.length; i++) {
            redsPieces[i].addEventListener("click", getPlayerPieces)
        }
     } else {
            for (let i =0; i<blackpiece.length; i++) {
                blackpiece[i].addEventListener("click", getPlayerPieces)
            }
        }
    }
    givesPiecesEventListeners()




 
 


// Need to pseudocode how does this games start
  //need to have 24 pieces (12 black on one side/ 12 red on the other)
  //need to place those pieces on my colored squares
  //need to move those pieces diagnolly while going forward
  //need to capture opposing colored pieces by jumping over them
  //pieces that reach the end of the opposing board become 'kings'
  // class 'kings' should move up/down diagnolly vs forward for regular pieces
  //need to set turns for each player to move their piece. 
  //captured pieces need to go to the discard element of my browser(if possible)
  //game should be won when all pieces of either player is captured.
  //winning player should show on screen when game if over
  // winner score should be updated in player square. 
  //structure reset button to move pieces back to their respective grids.
  //play the game again. 