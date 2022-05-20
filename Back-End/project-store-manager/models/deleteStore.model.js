const connection = require('./connection');

const deleteProductModel = async (id) => {
  const queryVerify = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const queryDelete = 'DELETE FROM StoreManager.products WHERE id = ?';

  const [result] = await connection.execute(queryVerify, [id]);

  if (result.length === 0) return false;

  await connection.execute(queryDelete, [id]);
  
  return { id };
};

module.exports = {
  deleteProductModel,
};
