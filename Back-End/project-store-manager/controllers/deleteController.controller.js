const deleteStoreService = require('../services/deleteStore.service');

const deleteProductController = async (req, res, _next) => {
  const { id } = req.params;

  const result = await deleteStoreService.deleteProductService(id);

  if (!result) return res.status(404).json({ message: 'Product not found' });

  res.status(204).json();
};

module.exports = {
  deleteProductController,
};
