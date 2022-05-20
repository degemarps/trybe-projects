const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const deleteStoreModel = require('../../../models/deleteStore.model');

describe('Quando um produto é deletado do DB', () => {
  const id = 1;

  before(async () => {
    const execute = [{
      "id": 1,
    }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Retorna um objeto contendo o id', async () =>{
    const response = await deleteStoreModel.deleteProductModel(id);

    expect(response).to.be.a('object');
  });
});1
