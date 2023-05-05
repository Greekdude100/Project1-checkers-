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

function isValidMove(fromRow, fromCol, toRow, toCol, color) {
    // Check if the destination cell is empty
    if (board[toRow][toCol] !== null) {
      return false;
    }
  
    // Check if the move is diagonal
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    if (rowDiff !== colDiff) {
      return false;
    }
  
    // Check if the move is forward (unless the checker is a king)
    if (color === 'red' && toRow > fromRow) {
      return false;
    }
    if (color === 'black' && toRow < fromRow) {
      return false;
    }
  
    // Check if the move is a jump (capture)
    if (rowDiff === 2 && colDiff === 2) {
      const capturedRow = (fromRow + toRow) / 2;
      const capturedCol = (fromCol + toCol) / 2;
      if (board[capturedRow][capturedCol] === null ||
          board[capturedRow][capturedCol] === color) {
        return false;
      }
      // Remove the captured checker from the board
      board[capturedRow][capturedCol] = null;
    }
  
    return true;
  }
            
    //For example, to access the square at row r and column c, you can use board[r][c].

function handlePieceClick(event) {
    const piece = event.target;
    const pieceRow = parseInt(piece.dataset.row);
    const pieceCol = parseInt(piece.dataset.col);
    
    // Check if the clicked piece belongs to the current player
    if (board[pieceRow][pieceCol] !== currentPlayer) {
      return;
    }
    
    // Add a 'selected' class to the clicked piece to indicate it's selected
    piece.classList.add('selected');
  }
  
  function handleSquareClick(event) {
    const square = event.target;
    const squareRow = parseInt(square.dataset.row);
    const squareCol = parseInt(square.dataset.col);
    
    // Check if a piece is currently selected
    const selectedPiece = document.querySelector('.selected');
    if (!selectedPiece) {
      return;
    }
    
    // Get the position of the selected piece
    const selectedPieceRow = parseInt(selectedPiece.dataset.row);
    const selectedPieceCol = parseInt(selectedPiece.dataset.col);
    
    // Check if the move is valid
    if (isValidMove(selectedPieceRow, selectedPieceCol, squareRow, squareCol)) {
      // Update the board
      board[squareRow][squareCol] = board[selectedPieceRow][selectedPieceCol];
      board[selectedPieceRow][selectedPieceCol] = null;
      
      // Move the piece on the board
      const pieceToMove = document.querySelector(`[data-row="${selectedPieceRow}"][data-col="${selectedPieceCol}"]`);
      square.appendChild(pieceToMove);
      
      // Remove the 'selected' class from the piece
      selectedPiece.classList.remove('selected');
      
      // Switch to the next player's turn
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
    }
  }    
        
  

function handlePieceClick(event) {
    const piece = event.target;
    const pieceRow = parseInt(piece.dataset.row);
    const pieceCol = parseInt(piece.dataset.col);
    
    // Check if the clicked piece belongs to the current player
    if (board[pieceRow][pieceCol] !== currentPlayer) {
      return;
    }
    
    // Add a 'selected' class to the clicked piece to indicate it's selected
    piece.classList.add('selected');
  }
  
  function handleSquareClick(event) {
    const square = event.target;
    const squareRow = parseInt(square.dataset.row);
    const squareCol = parseInt(square.dataset.col);
    
    // Check if a piece is currently selected
    const selectedPiece = document.querySelector('.selected');
    if (!selectedPiece) {
      return;
    }
    
    // Get the position of the selected piece
    const selectedPieceRow = parseInt(selectedPiece.dataset.row);
    const selectedPieceCol = parseInt(selectedPiece.dataset.col);
    
    // Check if the move is valid
    if (isValidMove(selectedPieceRow, selectedPieceCol, squareRow, squareCol)) {
      // Update the board
      board[squareRow][squareCol] = board[selectedPieceRow][selectedPieceCol];
      board[selectedPieceRow][selectedPieceCol] = null;
      
      // Move the piece on the board
      const pieceToMove = document.querySelector(`[data-row="${selectedPieceRow}"][data-col="${selectedPieceCol}"]`);
      square.appendChild(pieceToMove);
      
      // Remove the 'selected' class from the piece
      selectedPiece.classList.remove('selected');
      
      // Switch to the next player's turn
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
    }
  }




//event listener





 
 


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