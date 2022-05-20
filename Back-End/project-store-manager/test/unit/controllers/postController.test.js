const { expect } = require('chai');
const sinon = require('sinon');
const postStoreService = require('../../../services/postStore.service');
const postStoreController = require('../../../controllers/postStore.controller');

describe('Chamada do crontroller para inserir um novo produto no DB', () => {
  const request = {};
  const response = {};

  before(() => {
    request.body = {
      name: "Arco do Gavião Arqueiro",
      quantity: 1,
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(postStoreService, 'postProductService').resolves(true);
  });

  after(() => {
    postStoreService.postProductService.restore();
  });

  it('Retorna o status 201', async () => {
    await postStoreController.postProductController(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });
});
