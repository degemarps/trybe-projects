const paragraph = document.querySelector('#carta-gerada');
const creatLetter = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

creatLetter.addEventListener('click', () => {
  /* nessa esrutura, a condição verifica se não existe espaços em branco ou se a string está vazia
  Encontrei essa solução no fórum do qastack */
  if (/\S/.test(inputText.value)) {

    while (paragraph.firstChild) {
      paragraph.firstChild.remove();
    }

    const words = inputText.value.split(' ');
    const countWords = words.length;

    for (let i = 0; i < words.length; i += 1) {
      const letter = document.createElement('span');
      letter.innerHTML = words[i];
      letter.className = styleGroup[Math.floor(Math.random() * styleGroup.length)]
        + ' ' + sizeGroup[Math.floor(Math.random() * sizeGroup.length)]
        + ' ' + rotationGroup[Math.floor(Math.random() * rotationGroup.length)]
        + ' ' + inclinationGroup[Math.floor(Math.random() * inclinationGroup.length)];

      paragraph.appendChild(letter);
      document.querySelector('#carta-contador').innerText = countWords;
    }
  } else {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
