 /*----- constants -----*/
const colors = {
    0: 'red',
    1: 'black'
}



const Checkerboard=document.querySelector("#c0r0")
console.log('this is topLeft', Checkerboard)
const piece=document.createElement("div")
piece.classList.add("piece", "black")
Checkerboard.appendChild(piece)
console.log('this is piece', piece)

//Add black pieces to white spaces from c0r0 to c6r2.
function addPieces(blackboard) {
    if (piece === "#c0r0"+2)
    return true;
    else (piece <= "#c6r2")
    return false;
}
console.log(addPieces())



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