require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  it('Se fetchProducts é uma função', () => {
    const type = typeof fetchProducts;
    const expected = 'function';
    expect(type).toBe(expected);
  });

  it('Se a função fetchProducts chamou a função fetch', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Quando chamar a função fetchProducts a função fetch utiliza a url certa', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Se a função fetchProducts retorna a estrutura correta', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('S chamar a função fetchProducts sem argumento, retorna a mensagem de erro correta', async () => {
    const response = await fetchProducts();
    const error = new Error('You must provide an url');
    expect(response).toEqual(error);
  });
});
