const { expect } = require('chai');
const sinon = require('sinon');
const deleteStoreService = require('../../../services/deleteStore.service');
const deleteStoreController = require('../../../controllers/deleteController.controller');

describe('Quando chama o controller para deleter o produto', () => {
  const request = {};
  const response = {};

  before(() => {
    request.params = { id: 1 };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(deleteStoreService, 'deleteProductService').resolves(true);
  });

  after(() => {
    deleteStoreService.deleteProductService.restore();
  });

  it('Retorna uma resposta com status 204', async () => {
    await deleteStoreController.deleteProductController(request, response);

    expect(response.status.calledWith(204)).to.be.equal(true);
  })
});
