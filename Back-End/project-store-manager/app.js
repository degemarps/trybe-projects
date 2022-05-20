const express = require('express');
const bodyParser = require('body-parser');
const storeController = require('./controllers/store.controller');
const validateProducts = require('./middlewares/products.middleware');
const validateSales = require('./middlewares/sales.middleware');
const postStoreController = require('./controllers/postStore.controller');
const putStoreController = require('./controllers/putStore.controller');
const deleteStoreController = require('./controllers/deleteController.controller');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', storeController.getProductsController);

app.get('/products/:id', storeController.getProductController);

app.get('/sales', storeController.getSalesController);

app.get('/sales/:id', storeController.getSaleController);

app.post('/products', validateProducts.validateProducts, postStoreController.postProductController);

app.post('/sales', validateSales.validateSales, postStoreController.postSalesController);

app.put('/products/:id', putStoreController.putProductsController);

app.delete('/products/:id', deleteStoreController.deleteProductController);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
