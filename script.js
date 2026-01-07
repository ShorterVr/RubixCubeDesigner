const colors = ["white","yellow","red","orange","blue","green"];
const grid = document.getElementById("grid");

// make 9 clickable cells
for(let i=0;i<9;i++){
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;

  // click to cycle through colors
  cell.addEventListener("click", () => {
    let currentIndex = colors.indexOf(cell.style.background) + 1 || 0;
    cell.style.background = colors[currentIndex % colors.length];
  });

  grid.appendChild(cell);
}

// handle solve button
document.getElementById("solveBtn").addEventListener("click", () => {
  const targetFace = Array.from(document.querySelectorAll(".cell")).map(c => c.style.background);
  console.log("user picked face:", targetFace);
  // next: map to cubejs and generate moves
});
