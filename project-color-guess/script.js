const balls = document.querySelectorAll('.ball');
const rgbText = document.querySelector('#rgb-color');
const ballsContainer = document.querySelector('#balls');
const resultText = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const scoreElement = document.querySelector('#score');
let scorePoints = 0;
scoreElement.innerText = `Placar: ${scorePoints}`;

function resetColors() {
  for (let i = 0; i < balls.length; i += 1) {
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    balls[i].style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    rgbText.innerText = `(${rgb1}, ${rgb2}, ${rgb3})`;
  }
}

resetColors();

ballsContainer.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === `rgb${rgbText.innerText}`) {
    resultText.innerText = 'Acertou!';
    scorePoints += 3;
    scoreElement.innerText = `Placar: ${scorePoints}`;
  } else {
    resultText.innerText = 'Errou! Tente novamente!';
  }
});

btnReset.addEventListener('click', () => {
  resetColors();
  resultText.innerText = 'Escolha uma cor';
});
