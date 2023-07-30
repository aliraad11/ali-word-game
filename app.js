let word = ["B", "E", "A", "R"];
let row = 1;
let column = 1;

function onKeyClick(e) {
  console.log(e.target.innerHTML);

  const selector = `.tile-${row}-${column}`;

  const tile = document.querySelector(selector);
  if (!tile) {
    return;
  }

  tile.innerHTML = e.target.innerHTML;

  column = column + 1;
}

function onEnter(e) {
  let selector = `.tile-${row}-${1}`;
  const tile1 = document.querySelector(selector);

  setCssClass(tile1, word[0]);

  selector = `.tile-${row}-${2}`;
  const tile2 = document.querySelector(selector);

  setCssClass(tile2, word[1]);

  selector = `.tile-${row}-${3}`;
  const tile3 = document.querySelector(selector);

  setCssClass(tile3, word[2]);

  selector = `.tile-${row}-${4}`;
  const tile4 = document.querySelector(selector);

  setCssClass(tile4, word[3]);

  row = row + 1;
  column = 1;
}

function setCssClass(tile, letter) {
  if (tile.innerHTML === letter) tile.classList.add("tile-green");
  else if (word.indexOf(tile.innerHTML) > -1) tile.classList.add("tile-yellow");
  else tile.classList.add("tile-gray");
}

function onBackSpace(e) {}
