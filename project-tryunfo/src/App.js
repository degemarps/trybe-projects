import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      carts: [],
      informedName: '',
      informedRare: '',
      inputSearchDisabled: false,
      searchSuperTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteCart = this.onDeleteCart.bind(this);
    this.onNameSearched = this.onNameSearched.bind(this);
    this.onRareSearched = this.onRareSearched.bind(this);
    this.onSearchSuperTrunfo = this.onSearchSuperTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.verifyInputs());
  }

  // Função para salvar a carta
  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
    } = this.state;
    const cart = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      rare: cardRare,
      image: cardImage,
      trunfo: cardTrunfo,
    };
    this.setState((prevState) => ({
      carts: [...prevState.carts, cart],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => this.verifyInputs());
    this.setState((state) => { this.verifyTrunfo(state); });
  }

  // Função para deletar uma carta do baralho
  // Para desenvolver essa lógica utilizei como referência a seguinte página
  // https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react
  onDeleteCart(name) {
    const { carts } = this.state;
    this.setState({ carts: carts.filter((cart) => cart.name !== name) });
    this.setState((state) => { this.verifyTrunfo(state); });
  }

  // Função para capturar o nome na pesquisa
  onNameSearched(event) {
    this.setState({ informedName: event.target.value });
  }

  // Função para capturar a raridade na pesquisa
  onRareSearched(event) {
    this.setState({ informedRare: event.target.value });
  }

  onSearchSuperTrunfo(event) {
    if (event.target.checked === true) {
      this.setState({
        searchSuperTrunfo: true,
        inputSearchDisabled: true,
      });
    } else {
      this.setState({
        searchSuperTrunfo: false,
        inputSearchDisabled: false,
      });
    }
  }

  verifyTrunfo(state) {
    const { carts } = state;
    if (carts.length === 0) {
      this.setState({ hasTrunfo: false });
    }
    carts.forEach((cart) => {
      if (cart.trunfo === true) {
        this.setState({ hasTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  verifyInputs() {
    // Tive bastante dificuldade em montar essa função e em como chamar ela
    // Após analisar o código do colega Pedro Candido e entender como ele implementou ela, consegui desenvolvê-la
    const {
      cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    if (cardName === ''
      || cardDescription === '' || cardImage === '' || cardRare === ''
      || Number(cardAttr1) > '90' || Number(cardAttr2) > '90'
      || Number(cardAttr3) > '90' || Number(cardAttr1) < '0'
      || Number(cardAttr2) < '0' || Number(cardAttr3) < '0'
      || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > '210') {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      hasTrunfo, carts,
      isSaveButtonDisabled, informedName,
      informedRare, inputSearchDisabled,
      searchSuperTrunfo,
    } = this.state;

    return (
      <div>
        <h1 style={ { textAlign: 'center' } }>Tryunfo</h1>
        <section className="main">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <div>
          <input
            disabled={ inputSearchDisabled }
            value={ informedName }
            onChange={ this.onNameSearched }
            type="text"
            data-testid="name-filter"
          />
          <select
            disabled={ inputSearchDisabled }
            value={ informedRare }
            onChange={ this.onRareSearched }
            data-testid="rare-filter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label htmlFor="Super Trunfo">
            Super Trunfo
            <input
              value={ searchSuperTrunfo }
              onChange={ this.onSearchSuperTrunfo }
              type="checkbox"
              data-testid="trunfo-filter"
            />
          </label>
        </div>
        <section>
          <ul>
            {carts
              .filter((cart) => cart.name.includes(informedName))
              .filter((cart) => cart.rare === informedRare
                || informedRare === 'todas' || informedRare === '')
              .filter((cart) => cart.trunfo === searchSuperTrunfo || cart.trunfo === true)
              .map((cart) => (
                <li key={ cart.name }>
                  <Card
                    cardName={ cart.name }
                    cardDescription={ cart.description }
                    cardAttr1={ cart.attr1 }
                    cardAttr2={ cart.attr2 }
                    cardAttr3={ cart.attr3 }
                    cardImage={ cart.image }
                    cardRare={ cart.rare }
                    cardTrunfo={ cart.trunfo }
                  />
                  <button
                    onClick={ () => { this.onDeleteCart(cart.name); } }
                    type="button"
                    data-testid="delete-button"
                  >
                    Excluir
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </div>
    );
  }
}
export default App;
