const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let countChild = 0;
  let countAdult = 0;
  let countSenior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) { countChild += 1; }
    if (element.age >= 18 && element.age < 50) { countAdult += 1; }
    if (element.age >= 50) { countSenior += 1; }
  });

  return {
    child: countChild,
    adult: countAdult,
    senior: countSenior,
  };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.values(entrants).length === 0) { return 0; }

  const obj = countEntrants(entrants);

  const priceChild = obj.child * data.prices.child;
  const priceAdult = obj.adult * data.prices.adult;
  const priceSenior = obj.senior * data.prices.senior;

  return priceChild + priceAdult + priceSenior;
}

module.exports = { calculateEntry, countEntrants };
