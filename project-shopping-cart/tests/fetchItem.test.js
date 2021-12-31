require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Se fetchItem é uma função', () => {
    const type = typeof fetchItem;
    const expected = 'function';
    expect(type).toBe(expected);
  });

  it('Se a função fetchItem chamou a função fetch', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Quando chamar a função fetchItem a função fetch utiliza a url certa', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Se a função fetchItem retorna a estrutura correta', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('S chamar a função fetchItem sem argumento, retorna a mensagem de erro correta', async () => {
    const response = await fetchItem();
    const error = new Error('You must provide an url');
    expect(response).toEqual(error);
  });
});
