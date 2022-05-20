const putStoreModel = require('../models/putStore.model');

const putProductsService = async ({ id, name, quantity }) => {
  const product = await putStoreModel.putProductsModel({ id, name, quantity });

  if (!product) return false;

  return product;
};

module.exports = {
  putProductsService,
};
