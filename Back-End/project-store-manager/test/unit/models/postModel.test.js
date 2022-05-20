const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const postStoreModel = require('../../../models/postStore.model');

describe('Cadastra um novo produto no DB', () => {
  const payload = {
    name: "Arco do Gavião Arqueiro",
    quantity: 1,
  };

  before(async () => {
    const execute = [{
      "id": 4,
	    "name": "Arco do Gavião Arqueiro",
	    "quantity": 1
    }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Retorna um objeto', async () => {
    const response = await postStoreModel.postProductModel(payload);

    expect(response).to.be.a('object');
  });
});
