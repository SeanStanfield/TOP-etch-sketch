const container = document.querySelector(".container");
let grid = document.createElement("div");
let reset = document.createElement("button");
container.appendChild(grid);
container.appendChild(reset);
let boxArray = [];

grid.style.cssText =
  "display: grid; width:500px; height:500px; background-color:whitesmoke;";

reset.style.cssText =
  "width: 400px; height: 100px; background-color: mistyrose; margin-top:20px";

reset.textContent = "press to reset grid";

// reset.addEventListener("click");

function getsquares() {
  userinput = prompt("how many squares do you want in your grid");
  return userinput;
}

function drawGrid(squares) {
  let squaresPerRow = Math.sqrt(squares);
  let widthPerSquare = grid.clientWidth / squaresPerRow;
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${squaresPerRow}, ${widthPerSquare + "px"})`
  );

  for (i = 0; i < squares; i++) {
    let box = document.createElement("div");
    box.classList.add("boxclass");
    box.style.maxWidth = widthPerSquare + "px";
    box.style.maxHeight = widthPerSquare + "px";
    box.onmouseover = function() {
      box.style.backgroundColor = "black";
    };
    grid.appendChild(box);
    boxArray.push(box);
  }

  console.log(boxArray);
  return boxArray;
}

function resetgrid() {
  boxArray.length = 0;
  grid.innerHTML = "";
  return boxArray, grid;
}

reset.addEventListener("click", () => {
  resetgrid();
  drawGrid(getsquares());
});

drawGrid(getsquares());

// fillGrid(100);

//function to take the number of squares from user -prompt

//function to draw the grid with the given input

//function to reset the grid to white
