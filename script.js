var container = document.querySelector('div');
var reset = document.querySelector('button');

function fillGrid(rows, cols) {
  for (var i = 0; i < (rows * cols); i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    container.appendChild(newDiv);
  };
  container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr \
                                         1fr 1fr 1fr 1fr \
                                         1fr 1fr 1fr 1fr \
                                         1fr 1fr 1fr 1fr';
};

fillGrid(16, 16);

container.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = "black";
}, false);

reset.addEventListener("click", function() {
  window.location.reload();
});
