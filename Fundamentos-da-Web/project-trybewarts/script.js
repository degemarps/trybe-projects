const submitLogin = document.querySelector('#submitLogin');
const emailLogin = document.querySelector('#emailLogin');
const senhaLogin = document.querySelector('#senhaLogin');
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#evaluation-form');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const arrayParagraphs = [];

function login() {
  if (
    emailLogin.value === 'tryber@teste.com'
    && senhaLogin.value === '123456'
  ) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', login);

btnSubmit.disabled = true;

checkAgreement.addEventListener('input', () => {
  const verifyCheck = checkAgreement.value;

  if (verifyCheck !== null && verifyCheck !== '') {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

function getValues() {
  const nome = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelectorAll('.subject:checked');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const observations = document.querySelector('#textarea').value;
  const contentValues = [];
  for (let i = 0; i < content.length; i += 1) { contentValues.push(content[i].value); }
  arrayParagraphs.push(`Nome: ${nome} ${lastName}`);
  arrayParagraphs.push(`Email: ${email}`);
  arrayParagraphs.push(`Casa: ${house}`);
  arrayParagraphs.push(`Família: ${family}`);
  arrayParagraphs.push(`Matérias: ${contentValues.join(', ')}`);
  arrayParagraphs.push(`Avaliação: ${rate}`);
  arrayParagraphs.push(`Observações: ${observations}`);
}

function changeForm(event) {
  event.preventDefault();

  getValues();

  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }

  for (let i = 0; i < arrayParagraphs.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = arrayParagraphs[i];
    form.appendChild(paragraph);
  }
}

btnSubmit.addEventListener('click', changeForm);

textArea.addEventListener('keyup', () => {
  const textAreaLength = textArea.value.length;
  counter.innerText = JSON.stringify(500 - textAreaLength);
});
