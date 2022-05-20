const { expect } = require('chai');
const sinon = require('sinon');
const postStoreModel = require('../../../models/postStore.model');
const postStoreService = require('../../../services/postStore.service');

describe('Cadastra um novo produto no DB', () => {
  const payload = {
    name: "Arco do Gavião Arqueiro",
    quantity: 1,
  };
  
  before(async () => {
    const execute = {
      "id": 4,
	    "name": "Arco do Gavião Arqueiro",
	    "quantity": 1
    };

    sinon.stub(postStoreModel, 'postProductModel').resolves(execute);
  });

  after(async () => {
    postStoreModel.postProductModel.restore();
  });

  it('Retorna um objeto', async () => {
    const response = await postStoreModel.postProductModel(payload);

    expect(response).to.be.a('object');
  });
});
