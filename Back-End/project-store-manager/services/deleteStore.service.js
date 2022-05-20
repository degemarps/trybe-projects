const deleteStoreModel = require('../models/deleteStore.model');

const deleteProductService = async (id) => {
  const result = await deleteStoreModel.deleteProductModel(id);

  if (!result) return false;

  return { id };
};

module.exports = {
  deleteProductService,
};
