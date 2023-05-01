 /*----- constants -----*/
const colors = {
    0: 'red',
    1: 'black'
}



const checkerboard=document.querySelector("#checkers-board")
console.log('this is checkerboard', checkerboard)
const blackPiece=document.createElement("div")
blackPiece.classList.add("piece", "black")
const redPiece=document.createElement("div")
redPiece.classList.add("piece", "red")
console.log('this is piece', blackPiece)

//Add black pieces to white spaces from c0r0 to c6r2.
function addPiece() {
    console.log('checkerboard', checkerboard)
for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      const square = document.getElementById(`c${j}r${i}`);
      console.log('square', square)
      if ((i + j) % 2 === 0 && i <= 2) { // Place black pieces
        const piece = blackPiece.cloneNode(true);
        square.appendChild(piece);
      } else if ((i + j) % 2 === 0 && i >= 6) { // Place red pieces
        const piece = redPiece.cloneNode(true);
        square.appendChild(piece);
      }
    }
  }
} 
addPiece()


//   /*----- event listeners -----*/


 
 


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