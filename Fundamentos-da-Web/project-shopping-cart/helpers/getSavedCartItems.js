const getSavedCartItems = () => {
  try {
    const cartList = document.querySelector('.cart__items');
    cartList.innerHTML = localStorage.getItem('cartItems');
  } catch (error) {
    console.log(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
