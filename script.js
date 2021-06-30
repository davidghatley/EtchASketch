var container = document.querySelector('div');

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

var target = document.querySelector('.grid-item');
console.log(target);
target.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "blue";
}, false);
