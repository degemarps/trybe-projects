// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let employeeResult = {};
  employeeResult = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (typeof employeeResult === 'undefined') return {};
  return employeeResult;
}

module.exports = getEmployeeByName;
