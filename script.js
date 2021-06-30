var container = document.querySelector('div');
var reset = document.querySelector('button');
var gridSize = window.prompt("Grid size? (e.g. 4 -> 4 by 4, 10 -> 10 by 10, max 100): ");

if (gridSize > 100) {
  gridSize = 100;
}

function fillGrid(gridSize) {
  for (var i = 0; i < (gridSize * gridSize); i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    container.appendChild(newDiv);
  };

  var colSpace = '1fr '
  console.log(colSpace);
  container.style.gridTemplateColumns = `${colSpace.repeat(gridSize)}`;
};

fillGrid(gridSize);

container.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = "black";
}, false);

reset.addEventListener("click", function() {
  window.location.reload();
});
