const storeModel = require('../models/store.model');

const getProductsService = async () => {
  const products = await storeModel.getProductsModel();

  if (!products) return false;

  return products;
};

const getProductService = async (id) => {
  const product = storeModel.getProductModel(id);

  if (!product) return false;

  return product;
};

const getSalesService = async () => {
  const sales = await storeModel.getSalesModel();

  if (!sales) return false;

  return sales;
};

const getSaleService = async (id) => {
  const sale = storeModel.getSaleModel(id);

  if (!sale) return false;

  return sale;
};

module.exports = {
  getProductsService,
  getProductService,
  getSalesService,
  getSaleService,
};
