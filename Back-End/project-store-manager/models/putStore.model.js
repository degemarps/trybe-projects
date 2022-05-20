const connection = require('./connection');

const putProductsModel = async ({ id, name, quantity }) => {
  const queryVerify = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const queryUpdate = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';

  const [result] = await connection.execute(queryVerify, [id]);

  if (result.length === 0) return false;

  await connection.execute(queryUpdate, [name, quantity, id]);

  return { id, name, quantity };
};

module.exports = {
  putProductsModel,
};
