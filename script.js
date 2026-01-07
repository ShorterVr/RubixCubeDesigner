const colors = ["white","yellow","red","orange","blue","green"];
const grid = document.getElementById("grid");

// make 3x3 cells
for(let i=0;i<9;i++){
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.addEventListener("click", () => {
    let currentColor = colors.indexOf(cell.style.background) + 1 || 0;
    cell.style.background = colors[currentColor % colors.length];
  });
  grid.appendChild(cell);
}

document.getElementById("solveBtn").addEventListener("click", () => {
  const targetFace = Array.from(document.querySelectorAll(".cell")).map(c => c.style.background);
  console.log("user selected face:", targetFace);
  // here is where we call the solver logic later
});
