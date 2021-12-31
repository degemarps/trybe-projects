const data = require('../data/zoo_data');

// Cria o objeto principal
const createMap = () => {
  const animalMapType = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  return animalMapType;
};

// // Cria o mapeamento de todos os animais
const animalMap = () => {
  const animalMapObj = createMap();
  const keys = Object.keys(animalMapObj);
  data.species.map((specie) => {
    if (keys.includes(specie.location)) {
      animalMapObj[specie.location].push(specie.name);
    }
    return animalMapObj;
  });
  return animalMapObj;
};

// A próxima função foi densenvolvida analisando o código do colega Julio Rieger
// Tive bastante dificuldade em desenvolvê-la de forma que fosse aprovada pelo lint
// Após analisar o código do colega e entender bem o que ele havia feito, consegui aplicar a solução ao meu código
// Tentei deixá-lo de uma forma que fosse mais ao meu estilo, mas o lint sempre acusava alguma coisa
// Então ficou um código bem semelhante ao do colega

// Retorna o mapeamentos dos animais de acordo com as opções
const generateMap = (sex, sorted) => {
  const animalMapObj = {};
  data.species.forEach((specie) => {
    if (animalMapObj[specie.location] === undefined) {
      animalMapObj[specie.location] = [];
    }
    let residents = [...specie.residents];

    if (sex === 'female' || sex === 'male') {
      residents = residents.filter((resident) => resident.sex === sex);
    }

    residents = residents.map((resident) => resident.name);

    if (sorted === true) { residents.sort(); }

    animalMapObj[specie.location].push({ [specie.name]: residents });
  });
  return animalMapObj;
};

function getAnimalMap(options) {
  if (!options) { return animalMap(); }

  const { includeNames, sex, sorted } = options;

  if (includeNames === true) {
    return generateMap(sex, sorted);
  }

  return animalMap();
}

// console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
