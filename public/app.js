let words = [
  "Bank",
  "City",
  "Coat",
  "Face",
  "Fish",
  "Gold",
  "Iron",
  "Nose",
  "Hair",
  "Cash"
];
const randomIndex = Math.floor(Math.random() * 9);
let word = words[randomIndex].toUpperCase();
console.log(word);
let row = 1;
let column = 1;

function onKeyClick(e) {
  console.log(e.target.innerHTML);

  const selector = `.tile-${row}-${column}`;

  const tile = document.querySelector(selector);
  if (!tile) {
    return;
  }
  // function plyAudio() {
  //   document.getElementById("audio").play();
  // }

  tile.innerHTML = e.target.innerHTML;

  column = column + 1;
}

function onEnter(e) {

  let answer = "";
  for (let i = 0; i < 4; i++) {
    let selector = `.tile-${row}-${i + 1}`;
    const tile = document.querySelector(selector);
    answer = answer + tile.innerHTML;
    setCssClass(tile, word.charAt(i));
  }

  if (answer === word) {
    document.querySelector(".win-dialog").showModal();
    return;
  }
  if(row === 5){
    document.querySelector(".lose-dialog").showModal();
    return;
  }

  row = row + 1;
  column = 1;
}

function setCssClass(tile, letter) {
  if (tile.innerHTML === letter) tile.classList.add("tile-green");
  else if (word.indexOf(tile.innerHTML) > -1) tile.classList.add("tile-yellow");
  else tile.classList.add("tile-gray");
}

function onBackSpace(e) {
  const selector = `.tile-${row}-${column-1}`;

  const tile = document.querySelector(selector);
  if (!tile) {
    return;
  }

  tile.innerHTML = "";

  column = column - 1;
}
