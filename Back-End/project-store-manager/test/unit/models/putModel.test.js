const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const putStoreModel = require('../../../models/putStore.model');

describe('Quando atualiza os dados de um produto no DB', () => {

  const payload = {
    id: 1,
    name: 'Arco do Gavião Arqueiro',
    quantity: 1,
  };

  before(async () => {
    const execute = [{
      "id": 1,
      "name": "Arco do Gavião Arqueiro",
      "quantity": 1
    }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Retorna um objeto', async () => {
    const response = await putStoreModel.putProductsModel(payload);

    expect(response).to.be.a('object');
  })
});
