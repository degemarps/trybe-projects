const connection = require('./connection');

const postProductModel = async ({ name, quantity }) => {
  const queryVerify = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const queryInsert = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';

  const [result] = await connection.execute(queryVerify, [name]);

  if (result.length > 0) return false;

  const [product] = await connection.execute(queryInsert, [name, quantity]);

  return {
    id: product.insertId,
    name,
    quantity,
  };
};

const postSalesModel = async ([sales]) => {
  const insertSale = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const insertSaleProduct = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;

  const [result] = await connection.execute(insertSale);

  const saleId = result.insertId;

  sales.forEach(async (sale) => {
    await connection.execute(insertSaleProduct, [saleId, sale.productId, sale.quantity]);
  });

  return { id: saleId };
};

module.exports = {
  postProductModel,
  postSalesModel,
};
