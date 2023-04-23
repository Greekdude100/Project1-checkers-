# GAME OF CHECKERS
// THE GAME I AM CHOOSING TO MAKE IS CHECKERS
 # RULES
  THE GAME CONSISTS OF AN 8X8 BOARD WITH 12 PIECES ON EACH SIDE CALLED 'CHECKERS' FOR EACH PLATER.
1 THERE ARE 24 PIECES ON THE BOARD 12 (RED) AND 12 (WHITE)
2 EACH PLAYER TAKES TURNS MAKING THEIR MOVE WITH RED GOING FIRST
3 THE GAME IS WON WHEN ONE OF THE PLAYERS CAPTURES ALL OF THEIR OPPONENTS PIECES
4 THE PIECES CAN ONLY MOVE DIAGNOLLY WHETHER MOVING FORWARD OR CAPTURING YOUR OPPONENETS PIECES
5 CAPTURING REQUIRED YOUR PIECE TO 'HOP' OVER YOUR OPPONENTS WHICH MEANS THERE NEEDS TO BE AN EMPTY SPACE BEHIND SAID PIECE TO CAPTURE. 
6 IF THERE ARE MULTIPLE OPEN SPACES YOU CAN CAPTURE MORE THAN ONE. 
7 A PIECE THAT REACHES THE END OF THEIR OPPONENTS BOARD BECOMES A 'KING' PIECE AND CAN MOVE IN ANY DIRECTION INSTEAD OF JUST DIAGNOL. 

 # USER EXPERIENCE
 AS A USER I WANT TO BE ABLE TO
1 ALTERNATE BETWEEN RED AND BLACK CHECKERS PIECES PER TURN BECAUSE PLAYERS USE DIFFERENT PIECES
2 MOVE THE CAPTURED PIECES TO THEIR RESPECTIVE CORNERS TO KEEP TRACK OF HOW MANY PIECES ARE CAPTURED
3 KEEP TRACK OF THE WINING SCORE FOR BOTH PLAYERS AND IF THEY GET A TIE.
4 SET A TIMER FOR 5 MINUTES WHERE THE PLAYER WITH THE MOST PIECES WILL WIN 

  
WIREFRAME 
![Imgur](https://i.imgur.com/AgUKJs2l.png)

 # PSEUDOCODE 

 1 // GENERATE BOARD 8X8 (With 24 pieces; 12 red, 12 white on either side)
 2 // Set score to 0
 3// Set timer to 5 minutes 
 4// Designate player 1(red) to go first with white going second. 
 5// let player 1 piece move diagnolly to capture player 2 piece (so long as empty space exists behind it)
 6// set captured piece to their respective spaces in the left and right of the board. 
 7// let player 2 proceed next and continue moving pieces as player 1
 8// If red piece moves to end of white player board || If white piece moves to end of red player board give piece class of 'king'
 9// 'King' piece should be able to move in any direction where is regular piece can only move diagnolly. 
 10// Continue game per turn until 
 - Player 1 captures all white pieces || player 2 captures all red pieces
  or 
  - 5 minute timer runs out (Player with the most pieces captured wins)
  11// Set a playAgain function with addEvent('click') to generate a play again button and reset the board. 
  12// Continue having fun!!!