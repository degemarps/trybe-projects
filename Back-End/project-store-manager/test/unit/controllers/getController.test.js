
const sinon = require('sinon');
const { expect } = require('chai');
const storeService = require('../../../services/store.service');
const storeController = require('../../../controllers/store.controller');

describe('Chamada do controller getProducts', () => {
  const response = {};
  const request = {};
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
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(storeService, 'getProductsService').resolves([resultExecute]);
  });

  after(() => {
    storeService.getProductsService.restore();
  });
  
  it('é retornado o metodo "status" passando o codigo 200', async () => {
    await storeController.getProductsController(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Chamada do controller getSales', () => {
  const response = {};
  const request = {};
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
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(storeService, 'getSalesService').resolves([resultExecute]);
  });

  after(() => {
    storeService.getSalesService.restore();
  });

  it('é retornado o metodo "status" passando o codigo 200', async () => {
    await storeController.getSalesController(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});
