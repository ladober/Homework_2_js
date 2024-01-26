let buttons = document.querySelectorAll("#js-btn");

let player_x = "X";
let player_o = "O";

let turn = 0;

let winner = document.querySelector("#js-winner");

let btn = document.querySelector("#js-button");

let blockArea = document.querySelector(".tic-tac-toe-game");

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
];

function whoWon() {
  xWon();
  oWon();
}

function xWon() {
  for (let i = 0; i < win.length; i++) {
    if (
      buttons[win[i][0]].classList.contains("green") ==
        buttons[win[i][1]].classList.contains("green") &&
      buttons[win[i][1]].classList.contains("green") ==
        buttons[win[i][2]].classList.contains("green") &&
      buttons[win[i][0]].classList.contains("green") != ""
    ) {
      winner.innerText = "Player X Won";
      blockArea.style.pointerEvents = "none";
      return 1;
    }
  }
}

function oWon() {
  for (let i = 0; i < win.length; i++) {
    if (
      buttons[win[i][0]].classList.contains("blue") ==
        buttons[win[i][1]].classList.contains("blue") &&
      buttons[win[i][1]].classList.contains("blue") ==
        buttons[win[i][2]].classList.contains("blue") &&
      buttons[win[i][0]].classList.contains("blue") != ""
    ) {
      winner.innerText = "Player O Won";
      blockArea.style.pointerEvents = "none";
      return 1;
    }
  }
}

function Tap(event) {
  if (turn % 2 == 0) {
    event.target.className = "green";
    event.target.textContent = "X";
  } else {
    event.target.className = "blue";
    event.target.textContent = "O";
  }
  turn++;
  event.target.removeEventListener("click", Tap);

  whoWon();

  if (!xWon() && !oWon() && turn >= 9) {
    blockArea.style.pointerEvents = "none";
    winner.innerText = "Draw";
  }
}

let Start = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "";
    buttons[i].addEventListener("click", Tap);
  }
};

Start();

btn.addEventListener("click", () => {
  document.location.reload();
});
