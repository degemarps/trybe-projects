const storeService = require('../services/store.service');

const getProductsController = async (_req, res, _next) => {
  const products = await storeService.getProductsService();

  if (!products) return res.status(404);

  res.status(200).json(products);
};

const getProductController = async (req, res, _next) => {
  const { id } = req.params;

  const product = await storeService.getProductService(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product[0]);
};

const getSalesController = async (req, res, _next) => {
  const sales = await storeService.getSalesService();

  if (!sales) return res.status(404);

  res.status(200).json(sales);
};

const getSaleController = async (req, res, _next) => {
  const { id } = req.params;

  const sale = await storeService.getSaleService(id);

  if (!sale) return res.status(404).json({ message: 'Sale not found' });

  res.status(200).json(sale);
};

module.exports = {
  getProductsController,
  getProductController,
  getSalesController,
  getSaleController,
};
