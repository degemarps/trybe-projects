const textInput = document.querySelector('#text-input');
const textShow = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');
const imageMeme = document.querySelector('#meme-image');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const images = document.querySelector('#images');

textInput.addEventListener('keyup', () => {
  textShow.innerText = textInput.value;
});

imageInput.addEventListener('change', (img) => {
  imageMeme.src = URL.createObjectURL(img.target.files[0]);
});

btnFire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

btnWater.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

btnEarth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

images.addEventListener('click', (event) => {
  console.log(event.target.src);
  imageMeme.src = event.target.src;
});
