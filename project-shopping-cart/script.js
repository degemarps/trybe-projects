const IDs = [];
const cartList = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const addLoading = () => {
  const container = document.querySelector('.container');

  const createLoading = document.createElement('span');
  createLoading.innerText = 'Loading...';
  createLoading.className = 'loading';
  container.appendChild(createLoading);
};

const removeLoading = () => {
  const loadingElement = document.querySelector('.loading');
  loadingElement.remove();
};

const refreshPrice = () => {
  let sum = 0;
  const storageKeys = Object.keys(localStorage);

  // Faz a soma total dos valores
  storageKeys.forEach((key) => {
    if (key !== 'cartItems' && key !== 'totalPrice') {
      sum += parseFloat(localStorage.getItem(key));
    }
  });

  // Anexa a soma total ao filho do elemento HTML
  const priceSection = document.querySelector('.total-price');
  priceSection.innerHTML = '';
  const priceElement = document.createElement('p');
  sum = sum.toFixed(2).replace(/0+$/, '');
  priceElement.innerHTML = parseFloat(sum);
  priceSection.appendChild(priceElement);
  localStorage.setItem('totalPrice', parseFloat(sum));
};

function cartItemClickListener(event) {
  event.target.remove();
  let sku = event.target.innerHTML.split('|');
  sku = sku[0].split(':');
  sku = sku[1].trim();
  localStorage.removeItem(sku);

  let cartItemsContent = localStorage.getItem('cartItems');
  const startString = '<li class="cart__item">';
  cartItemsContent = cartItemsContent.replace(`${startString}${event.target.innerHTML}</li>`, '');
  localStorage.setItem('cartItems', cartItemsContent);
  refreshPrice();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const showProducts = async () => {
  addLoading();
  const data = await fetchProducts('computador');
  removeLoading();

  // Percorre o array de produtos
  data.results.forEach((result) => {
    const { id: sku, title: name, thumbnail: image } = result;

    IDs.push(sku);

    // Chama a função para criar o elemento HTML
    const section = createProductItemElement({ sku, name, image });

    // Adiciona o elemento criado ao container
    const container = document.querySelector('.items');
    container.appendChild(section);
  });
};

const totalPrice = (sku, price) => {
  localStorage.setItem(sku, price);
  refreshPrice();
};

const addProdutcs = async () => {
  const dataProducts = await fetchProducts('computador');
  // Percorre o array de produtos
  dataProducts.results.forEach((result) => IDs.push(result.id));
  const button = document.querySelector('.items');
  // Adiciona um evento aos botões de adicionar ao carrinho
  button.addEventListener('click', async (event) => {
    if (event.target.className === 'item__add') {
      const idProduct = event.target.previousSibling.previousSibling.previousSibling;
      // Busca o item selecionado
      const dataItem = await fetchItem(idProduct.innerText);
      const { id: sku, title: name, price: salePrice } = dataItem;
      const itemElement = createCartItemElement({ sku, name, salePrice });
      // Adiciona o elemento criado a lista de produtos selecionados
      cartList.appendChild(itemElement);
      saveCartItems(cartList.innerHTML);
      totalPrice(sku, salePrice);
    }
  });
};

const removeItem = () => {
  cartList.addEventListener('click', (event) => {
    cartItemClickListener(event);
  });
};

const removeAllItems = () => {
  const buttonRemove = document.querySelector('.empty-cart');

  buttonRemove.addEventListener('click', () => {
    cartList.innerHTML = '';

    let cartItemsContent = localStorage.getItem('cartItems');
    cartItemsContent = '';
    console.log(cartItemsContent);
    localStorage.setItem('cartItems', cartItemsContent);
  });
};

const getTotalPrice = () => {
  try {
    const priceSection = document.querySelector('.total-price');
    const priceElement = document.createElement('p');
    let price = parseFloat(localStorage.getItem('totalPrice'));
    price = price.toFixed(2).replace(/0+$/, '');
    priceElement.innerHTML = parseFloat(price);
    priceSection.appendChild(priceElement);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  showProducts();
  addProdutcs();
  removeItem();
  getSavedCartItems();
  removeAllItems();
  getTotalPrice();
};