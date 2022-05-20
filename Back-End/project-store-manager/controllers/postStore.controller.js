const postStoreService = require('../services/postStore.service');

const postProductController = async (req, res, _next) => {
  const { name, quantity } = req.body;

  const product = await postStoreService.postProductService({ name, quantity });

  if (!product) return res.status(409).json({ message: 'Product already exists' });

  res.status(201).json(product);
};

const postSalesController = async (req, res, _next) => {
  const sales = req.body;
  const result = await postStoreService.postSaleService([sales]);
  res.status(201).json({ id: result.id, itemsSold: sales });
};

module.exports = {
  postProductController,
  postSalesController,
};
