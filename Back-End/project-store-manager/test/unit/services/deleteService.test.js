const { expect } = require('chai');
const sinon = require('sinon');
const deleteStoreModel = require('../../../models/deleteStore.model');
const deleteStoreService = require('../../../services/deleteStore.service');

describe('Quando um produto é deletado do DB', () => {

  const id = 1;

  before(async () => {
    const execute = [{
      "id": 1,
    }];

    sinon.stub(deleteStoreModel, 'deleteProductModel').resolves(execute);
  });

  after(async () => {
    deleteStoreModel.deleteProductModel.restore();
  });

  it('Retorna um objeto contendo o id', async () => {
    const response = await deleteStoreService.deleteProductService(id);

    expect(response).to.be.a('object');
  });
});
