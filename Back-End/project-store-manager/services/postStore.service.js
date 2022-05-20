const postStoreModel = require('../models/postStore.model');

const postProductService = async ({ name, quantity }) => {
  const product = await postStoreModel.postProductModel({ name, quantity });

  if (!product) return false;

  return product;
};

const postSaleService = async ([sales]) => {
  const result = await postStoreModel.postSalesModel([sales]);

  return result;
};

module.exports = {
  postProductService,
  postSaleService,
};
