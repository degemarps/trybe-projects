// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managers = ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8', '9e7d4524-363c-416a-8759-8aa7e50c0992'];
  if (managers.includes(id)) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  const isManagerResult = isManager(managerId);

  if (isManagerResult === true) {
    const employeesFinded = data.employees.filter((employee) =>
      employee.managers.includes(managerId));
    return employeesFinded.map((employee) =>
      `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
