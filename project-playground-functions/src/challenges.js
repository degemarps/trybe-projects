// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase = phrase.split(" ");

  return splitPhrase;
}

// Desafio 4
function concatName(stringArray) {

  let namesConcat = stringArray[stringArray.length - 1] + ', ' + stringArray[0];
  
  return namesConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;

  return pointsWins + pointsTies;
}

// Desafio 6
function highestCount(numbersArray) {
  let uniqueNumbers = [...new Set(numbersArray)];
  let maxNumber = uniqueNumbers[0];
  let cont = 0;

  for (let i = 0; i < uniqueNumbers.length; i += 1) {
    if (uniqueNumbers[i] > maxNumber) {
      maxNumber = uniqueNumbers[i];
    }
  }

  for (number of numbersArray) {
    if (number == maxNumber) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = mouse - cat1;
  let mouseCat2 = mouse - cat2;

  if (Math.abs(mouseCat1) < Math.abs(mouseCat2)) {
    return "cat1";

  } else if (Math.abs(mouseCat2) < Math.abs(mouseCat1)) {
    return "cat2";

  } else if (Math.abs(mouseCat1) == Math.abs(mouseCat2)) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {

  let result = [];

  for (let i = 0; i < numbersArray.length; i += 1) {

    if ((numbersArray[i] % 3) == 0 && (numbersArray[i] % 5) == 0) {
      result.push("fizzBuzz");

    } else if ((numbersArray[i] % 3) == 0) {
      result.push("fizz");

    } else if ((numbersArray[i] % 5) == 0) {
      result.push("buzz");

    } else {
      result.push("bug!");
    }
  }

  return result ;
}

// Desafio 9
function encode(phrase) {
  
  let splitPhrase = phrase.split("");
  let newPhrase = [];

  for (let i = 0; i < splitPhrase.length; i += 1) {

    if (splitPhrase[i] == 'a') {
      splitPhrase[i] = 1;

    } else if (splitPhrase[i] == 'e') {
      splitPhrase[i] = 2;

    } else if (splitPhrase[i] == 'i') {
      splitPhrase[i] = 3;

    } else if (splitPhrase[i] == 'o') {
      splitPhrase[i] = 4;

    } else if (splitPhrase[i] == 'u') {
      splitPhrase[i] = 5;

    }
  }

  newPhrase = splitPhrase.join("");

  return newPhrase;
}
function decode(phrase) {
  let splitPhrase = phrase.split("");
  let newPhrase = [];

  for (let i = 0; i < splitPhrase.length; i += 1) {

    if (splitPhrase[i] == '1') {
      splitPhrase[i] = 'a';

    } else if (splitPhrase[i] == 2) {
      splitPhrase[i] = 'e';

    } else if (splitPhrase[i] == 3) {
      splitPhrase[i] = 'i';

    } else if (splitPhrase[i] == 4) {
      splitPhrase[i] = 'o';

    } else if (splitPhrase[i] == 5) {
      splitPhrase[i] = 'u';

    }
  }

  newPhrase = splitPhrase.join("");

  return newPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
