function createPixels() {
  const parent = document.getElementById('pixel-board');

  for (let i = 0; i < 25; i += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    parent.appendChild(pixel);
  }
}

createPixels();

function colorSelected() {
  const childList = document.querySelector('#color-palette').children;
  const colorBlack = childList[0];
  const colorRed = childList[1];
  const colorBlue = childList[2];
  const colorGreen = childList[3];

  colorBlack.addEventListener('click', function (event) {
    event.target.className = 'color selected';

    colorRed.className = 'color';
    colorBlue.className = 'color';
    colorGreen.className = 'color';

    fillPixel(colorBlack);
  });

  colorRed.addEventListener('click', function (event) {
    event.target.className = 'color selected';

    colorBlack.className = 'color';
    colorBlue.className = 'color';
    colorGreen.className = 'color';

    fillPixel(colorRed);
  });

  colorBlue.addEventListener('click', function (event) {
    event.target.className = 'color selected';

    colorRed.className = 'color';
    colorBlack.className = 'color';
    colorGreen.className = 'color';

    fillPixel(colorBlue);
  });

  colorGreen.addEventListener('click', function (event) {
    event.target.className = 'color selected';

    colorRed.className = 'color';
    colorBlue.className = 'color';
    colorBlack.className = 'color';

    fillPixel(colorGreen);
  });

}

colorSelected();

function fillPixel(element) {
  const selected = document.querySelector('.selected');
  const color = selected.style.backgroundColor;

  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', function (event) {
    event.target.style.backgroundColor = color;
  });
}

function cleanBoard() {
  const buttonClear = document.querySelector('#clear-board');
  let boardPixels = document.querySelector('#pixel-board').children;

  buttonClear.addEventListener('click', function () {
    for (let i = 0; i < boardPixels.length; i += 1) {
      boardPixels[i].style.backgroundColor = 'white';
    }
  });
}

cleanBoard();

function changeSizeBoard () {
  const inputSize = document.querySelector("#board-size");
  const buttonGenerate = document.querySelector('#generate-board');
  const boardContainer = document.getElementById('pixel-board');

  buttonGenerate.addEventListener('click', function(){

    if (parseInt(inputSize.value) < 5) {
      boardContainer.style.gridTemplateColumns = "repeat(5, 1fr)";

      //Esse loop foi retirado do site o stack overflow
      while (boardContainer.firstChild) {
        boardContainer.firstChild.remove()
      }
      //--------------------------------------------

      for (let i = 0; i < 25; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        boardContainer.appendChild(pixel);
      }
    
    } else if (parseInt(inputSize.value) > 50) {
      boardContainer.style.gridTemplateColumns = "repeat(50, 1fr)";

      //Esse loop foi retirado do site o stack overflow
      while (boardContainer.firstChild) {
        boardContainer.firstChild.remove()
      }
      //--------------------------------------------

      for (let i = 0; i < 2500; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        boardContainer.appendChild(pixel);
      }

    } else if (inputSize.value == '') {
      alert("Board inválido!");

    } else if (parseInt(inputSize.value) >= 5 && parseInt(inputSize.value) <= 50) {
      boardContainer.style.gridTemplateColumns = 'repeat(' + inputSize.value + ', 1fr)';

      //Esse loop foi retirado do site o stack overflow
      while (boardContainer.firstChild) {
        boardContainer.firstChild.remove()
      }
      //--------------------------------------------

      for (let i = 0; i < (parseInt(inputSize.value)*parseInt(inputSize.value)); i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        boardContainer.appendChild(pixel);
      }
    }
  });
}

changeSizeBoard();

window.onload = function () {
  let childList = document.querySelector('#color-palette').children;
  let colorBlack = childList[0];

  colorBlack.className = 'color selected';

  fillPixel();

  const paletteColors = document.querySelector('#color-palette').children;

  let colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'brown', 'pink', 'grey'];

  while (true) {
    paletteColors[1].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    paletteColors[2].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    paletteColors[3].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    if (paletteColors[1].style.backgroundColor != paletteColors[2].style.backgroundColor && 
      paletteColors[1].style.backgroundColor != paletteColors[3].style.backgroundColor && 
      paletteColors[2].style.backgroundColor != paletteColors[3].style.backgroundColor) {
      break;
    }
  }
}