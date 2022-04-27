// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const result = {};
    data.species.map((specie) => {
      result[specie.name] = specie.residents.length;
      return result;
    });
    return result;
  }
  if (typeof animal.sex === 'undefined') {
    const animalFinded = data.species.find((specie) => specie.name === animal.specie);
    return animalFinded.residents.length;
  }
  const animalFinded = data.species.find((specie) => specie.name === animal.specie);
  const animalSex = animalFinded.residents.filter((resident) => resident.sex === animal.sex);
  return animalSex.length;
}

console.log(countAnimals());

module.exports = countAnimals;
