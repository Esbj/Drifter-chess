'use strict'
//tic-tac-toe


let pos;
const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
function drawBoard() {
  console.clear();
  for (const row of board) {
    console.log(row);
  };
}

function setInput(y, x, marker) {
  board[y][x] = marker;
};

function posTaken(y, x) {
  console.log(`Hurdudu din luiring, här fanns det redan ett ${board[y][x]}`)
  if (board[y][x] === " " ) {
    return true;
  }
  return false;
}
function askForInput(marker) {
  pos = prompt(`Ange position för ${marker} (x, y): `);
  pos = pos.split(",");
  //naturligt att skriva in x före y men för programets funktionalitet behöver det vara y sen x. Vänder därför på arrayen
  pos = pos.reverse();
  return pos;
}
function turn(marker) {
  let turnGoing = true;
  while (turnGoing) {
    drawBoard();
    pos = askForInput(marker);
    //Är positionen ledig?
    if (posTaken(pos[0], pos[1])) {
      setInput(pos[0], pos[1], marker);
      drawBoard();
      turnGoing = false;
      break;
    } else {
      alert("Den positionen är upptagen, försök igen!");
      drawBoard();
      continue;
    }
  }
}
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    turn("X");
  } else {
    turn("O");
  }
}