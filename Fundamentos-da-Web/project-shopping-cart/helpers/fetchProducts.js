const fetchProducts = async (query) => {
  try {
    if (!query) {
      throw new Error('You must provide an url');
    }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const promise = await fetch(url);
    const data = await promise.json();
    return data;
  } catch (erro) {
    return erro;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
