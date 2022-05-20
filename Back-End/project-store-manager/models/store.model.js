const connection = require('./connection');

const getNewSale1 = (saleData) => {
  const { saleId, date, productId, quantity } = saleData;

  return {
    saleId,
    date,
    productId,
    quantity,
  };
};

const getNewSale2 = (saleData) => {
  const { date, productId, quantity } = saleData;

  return {
    date,
    productId,
    quantity,
  };
};

const getProductsModel = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');

  if (products.length === 0) return false;

  return products;
};

const getProductModel = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

  const [product] = await connection.execute(query, [id]);

  if (product.length === 0) return false;

  return product;
};

const getSalesModel = async () => {
  const [sales] = await connection.execute(
    `SELECT DISTINCT sa.id, sa.date, sp.product_id, sp.quantity
    FROM StoreManager.sales AS sa
    INNER JOIN StoreManager.sales_products AS sp
    WHERE sa.id = sp.sale_id`,
  );

  if (sales.length === 0) return false;

  const newSales = sales.map((item) => getNewSale1({
    saleId: item.id,
    date: item.date,
    productId: item.product_id,
    quantity: item.quantity,
  }));

  return newSales;
};

const getSaleModel = async (id) => {
  const query = `SELECT DISTINCT sa.date, sp.product_id, sp.quantity
    FROM StoreManager.sales AS sa
    INNER JOIN StoreManager.sales_products AS sp
    WHERE sp.sale_id = ?`;

  const [sale] = await connection.execute(query, [id]);

  if (sale.length === 0) return false;

  const newSales = sale.map((item) => getNewSale2({
    date: item.date,
    productId: item.product_id,
    quantity: item.quantity,
  }));

  return newSales;
};

module.exports = {
  getProductsModel,
  getProductModel,
  getSalesModel,
  getSaleModel,
};
