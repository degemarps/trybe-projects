import React from 'react';
import { Link } from 'react-router-dom';
import './css/Shopping.css';

const PRODUCTS_KEY = 'productsAdded';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const productsAdded = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    if (productsAdded) {
      this.setState({ products: productsAdded });
    }
  }

  render() {
    const { products } = this.state;

    const listOfProductsInCart = products.map((product) => {
      const { name, id, thumb, quantity } = product;

      return (
        <div className="product-card">
          <li key={ id }>
            <h3 data-testid="shopping-cart-product-name">{ name }</h3>
            <div className="product-quantity">
              <img src={ thumb } alt={ name } />
              <span data-testid="shopping-cart-product-quantity">
                Quantidade:
                { ` ${quantity}` }
              </span>
            </div>
          </li>
        </div>
      );
    });
    const emptyCartMessage = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return (
      <section className="list-products-container">
        { products.length > 0 ? <ul className="list-products">{listOfProductsInCart}</ul> : emptyCartMessage}
        <Link to="/checkout">
          <button data-testid="checkout-products" type="button" className="button-shopping">Realizar Compra</button>
        </Link>
      </section>
    );
  }
}

export default ShoppingCart;
