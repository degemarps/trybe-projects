const putStoreService = require('../services/putStore.service');

const putProductsController = async (req, res, _next) => {
  const { name, quantity } = req.body;
  const { id } = req.params;

  const product = await putStoreService.putProductsService({ id, name, quantity });

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
};

module.exports = {
  putProductsController,
};
