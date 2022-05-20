const { expect } = require('chai');
const sinon = require('sinon');
const putStoreService = require('../../../services/putStore.service');
const putStoreController = require('../../../controllers/putStore.controller');

describe('Chama o controller para atualizar um produto', () => {
  const request = {};
  const response = {};

  before(() => {
    request.body = {
      name: "Arco do Gavião Arqueiro",
      quantity: 1,
    };

    request.params = { id: 1 };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(putStoreService, 'putProductsService').resolves(true);
  });

  after(() => {
    putStoreService.putProductsService.restore();
  });

  it('Retorna um status 200', async () => {
    await putStoreController.putProductsController(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});
