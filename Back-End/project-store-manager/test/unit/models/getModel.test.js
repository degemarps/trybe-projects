const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const storeModel = require('../../../models/store.model');

describe('Busca todos os produtos no DB', () => {
  const resultExecute = [
    {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América",
      "quantity": 30
    }
  ];

  before(() => {
    sinon.stub(connection, 'execute').resolves([resultExecute])
  });

  after(() => {
    connection.execute.restore();
  });

  it('Retorna um array', async () => {
    const result = await storeModel.getProductsModel();
    expect(result).to.be.an('array');
  });
});

describe('Busca todas as vendas no DB', () => {
  const resultExecute = [
    {
      "saleId": 1,
      "date": "2022-05-09T18:43:25.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "saleId": 1,
      "date": "2022-05-09T18:43:25.000Z",
      "productId": 2,
      "quantity": 10
    },
    {
      "saleId": 2,
      "date": "2022-05-09T18:43:25.000Z",
      "productId": 3,
      "quantity": 15
    }
  ];

  before(() => {
    sinon.stub(connection, 'execute').resolves([resultExecute])
  });

  after(() => {
    connection.execute.restore();
  });

  it('Retorna um array', async () => {
    const result = await storeModel.getSalesModel();
    expect(result).to.be.an('array');
  });
});
