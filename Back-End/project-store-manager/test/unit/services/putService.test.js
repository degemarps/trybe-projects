const { expect } = require('chai');
const sinon = require('sinon');
const putStoreModel = require('../../../models/putStore.model');
const putStoreService = require('../../../services/putStore.service');

describe('Quando atualiza os dados de um produto no DB', () => {
  const payload = {
    id: 1,
    name: 'Arco do Gavião Arqueiro',
    quantity: 1,
  };

  before(async () => {
    const execute = {
      "id": 1,
      "name": "Arco do Gavião Arqueiro",
      "quantity": 1
    };

    sinon.stub(putStoreModel, 'putProductsModel').resolves(execute);
  });

  after(async () => {
    putStoreModel.putProductsModel.restore();
  });

  it('Retorna um objeto', async () => {
    const response = await putStoreService.putProductsService(payload);

    expect(response).to.be.a('object');
  })
});
