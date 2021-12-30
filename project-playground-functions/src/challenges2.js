// Desafio 10
function techList(techArray, name) {

  if (techArray.length == 0) {

    return "Vazio!";
  } else {
  
  let orderedTech = techArray.sort();
  let listObject = [];

  console.log(orderedTech);

  for (let i = 0; i < orderedTech.length; i += 1) {

    let obj = new Object();

    obj["tech"] = orderedTech[i];
    obj["name"] = name;

    listObject[i] = obj;
  }

  console.log(listObject);

  return listObject;
  }

}

// Desafio 11
function generatePhoneNumber(numbers) {
  
  //Verifica se o array tem o tamanho correto
  if (numbers.length != 11) {

    return "Array com tamanho incorreto.";
  }

  for (number of numbers) {

    if (number < 0 || number > 9){
      
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  //Verifica a quantidade de cada número
  let uniqueNumbers = [...new Set(numbers)];
  let cont = 0;

  for (number of uniqueNumbers) {
    for (let i = 0; i < numbers.length; i += 1) {

      if (number == numbers[i]) {
        cont += 1;
      }
    }

    if (cont >= 3) {

      return "não é possível gerar um número de telefone com esses valores";
    } else {
  
      cont = 0;
    }
  }

  //Gerar o número de telefone

  let phoneNumber = [];

  for (let i = 0; i < numbers.length; i += 1) {

    if (i == 0) {

      phoneNumber.push('(' + numbers[i]);
    } else if (i == 1) {

      phoneNumber.push(numbers[i] + ')' + ' ');
    } else if (i == 6) {

      phoneNumber.push(numbers[i] + '-');
    } else {
      phoneNumber.push(numbers[i]);
    }
  }

  phoneNumber = phoneNumber.join("");

  return phoneNumber;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  if (lineA < (lineB + lineC) && lineA > Math.abs((lineB - lineC))) {
    return true;
  
  } else if (lineB < (lineA + lineC) && lineB > Math.abs((lineA - lineC))) {

    return true;
  
  } else if (lineC < (lineA + lineB) && lineC > Math.abs((lineA - lineB))) {

    return true
  
  } else {

    return false;
  }
}

// Desafio 13
function hydrate(phrase) {
  
  //Essa parte do código consegui pesquisando pelo site do code review
  let numbers = phrase.match(/\d+/g).map(Number);

  let sum = 0;

  for (number of numbers) {
    sum += number;
  }

  if (sum > 1){
    return sum + " copos de água";
  } else {
    return sum + " copo de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
