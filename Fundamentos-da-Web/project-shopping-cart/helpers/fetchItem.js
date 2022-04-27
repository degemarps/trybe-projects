const fetchItem = async (idProduct) => {
  try {
    if (!idProduct) {
      throw new Error('You must provide an url');
    }
    const url = `https://api.mercadolibre.com/items/${idProduct}`;
    const promise = await fetch(url);
    const data = await promise.json();
    return data;
  } catch (erro) {
    return erro;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
