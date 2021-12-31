const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFinded = data.employees.find((employee) => employee.id === id);
  const responsableAnimal = employeeFinded.responsibleFor[0];
  const specieFinded = data.species.find((specie) => specie.id === responsableAnimal);
  const residentResult = { name: '', sex: '', age: 0 };
  specieFinded.residents.forEach((resident) => {
    if (resident.age > residentResult.age) {
      Object.assign(residentResult, resident);
    }
  });
  return [residentResult.name, residentResult.sex, residentResult.age];
}

module.exports = getOldestFromFirstSpecies;
