const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = ['lions', 'tigers', 'bears',
  'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];

// Algumas partes do código foram inspiradas em uma solução feita pelo colega Marcos Vinícius
// Tive uma certa dificuldade em cumprir um dos objetivos do requisito e consegui encontrar a solução por meio co dógio dele
// Entendi bem o que ele fez e consegui repassar para o meu código com alguns ajustes que me agradaram mais
const createSchedule = () => {
  const schedule = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: [],
      };
    }
  });
  return schedule;
};

const returnSchedule = () => {
  const schedule = createSchedule();
  days.forEach((day) => {
    data.species.map((specie) => {
      if (specie.availability.includes(day) && day !== 'Monday') {
        schedule[day].exhibition.push(specie.name);
      }
      return schedule;
    });
  });
  return schedule;
};

const getByDay = (day) => {
  const scheduleCreated = returnSchedule();
  return {
    [day]: {
      officeHour: scheduleCreated[day].officeHour,
      exhibition: scheduleCreated[day].exhibition,
    },
  };
};

const getByAnimal = (animal) => {
  const animalFound = data.species.find((specie) => specie.name === animal);
  return animalFound.availability;
};

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) { return getByDay(scheduleTarget); }
  if (animals.includes(scheduleTarget)) { return getByAnimal(scheduleTarget); }
  if (!scheduleTarget || !days.includes(scheduleTarget)) { return returnSchedule(); }
}

module.exports = getSchedule;
