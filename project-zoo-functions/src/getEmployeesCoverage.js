const data = require('../data/zoo_data');

// Armazena todos os ids dos funcionários
const getAllEmployees = () => {
  const allEmployees = [];
  data.employees.forEach((employee) => { allEmployees.push(employee.id); });
  return allEmployees;
};

// Cria o objeto principal
const createCoverage = () => {
  const coverageType = {
    id: '',
    fullName: '',
    species: [],
    locations: [],
  };
  return coverageType;
};

// Atribue os dados do funcionário
const employeeDataAttribute = (idOrName) => {
  let contain = false;
  const coverage = createCoverage();
  data.employees.map((employee) => {
    if (employee.firstName === idOrName || employee.lastName === idOrName
      || employee.id === idOrName) {
      coverage.id = employee.id;
      coverage.fullName = `${employee.firstName} ${employee.lastName}`;
      contain = true;
    }
    return coverage;
  });
  if (contain === false) {
    throw new Error('Informações inválidas');
  }
  return coverage;
};

// Atribue as animais e a localização
const searchSpecies = (idOrName) => {
  const coverage = employeeDataAttribute(idOrName);
  data.employees.map((employee) => {
    if (employee.firstName === idOrName || employee.lastName === idOrName
      || employee.id === idOrName) {
      employee.responsibleFor.forEach((animal) => {
        const animalFound = data.species.filter((specie) => specie.id === animal);
        coverage.species.push(animalFound[0].name);
        coverage.locations.push(animalFound[0].location);
      });
    }
    return coverage;
  });
  return coverage;
};

// Função principal
function getEmployeesCoverage(employeeData) {
  if (!employeeData) {
    const employeesIDs = getAllEmployees();
    const coverageFinal = [];
    employeesIDs.forEach((id) => { coverageFinal.push(searchSpecies(id)); });
    return coverageFinal;
  }
  if (employeeData.name) {
    const coverageEmployee = searchSpecies(employeeData.name);
    return coverageEmployee;
  }
  if (employeeData.id) {
    const coverageEmployee = searchSpecies(employeeData.id);
    return coverageEmployee;
  }
}

// console.log(getEmployeesCoverage());;

module.exports = getEmployeesCoverage;
