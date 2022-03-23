import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencysThunk, addExpense } from '../actions';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      Totalprice: 0,
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchanges: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.saveCoins = this.saveCoins.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    const coins = await getCurrencies();
    this.saveCoins(coins);
  }

  // Lida com os inputs
  onHandleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  // Função para adicionar a despesa na store
  async onHandleClick() {
    const { addExpenses } = this.props;
    // Pega os estado do componentes
    const {
      id, value, description, currency, method, tag, Totalprice,
    } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesReturned = await response.json();
    this.setState({ id: id + 1 });
    // Cria o objeto para adicionar nas expenses
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currenciesReturned,
    };
    await addExpenses(expense);
    // Atualiza o preço total no cabeçalho
    this.setState({
      Totalprice: Totalprice
      + Number((currenciesReturned[currency].ask * value).toFixed(2)),
      value: '',
    });
  }

  saveCoins(coins) {
    this.setState({ exchanges: Object.values(coins) });
  }

  render() {
    const {
      Totalprice, value, description, currency, method, tag, exchanges,
    } = this.state;
    const { email } = this.props;
    return (
      <div>
        <Header email={ email } Totalprice={ Totalprice } />
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              type="text"
              name="value"
              value={ value }
              onChange={ this.onHandleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              name="description"
              value={ description }
              onChange={ this.onHandleChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            Moeda
            <select
              name="currency"
              value={ currency }
              onChange={ this.onHandleChange }
              data-testid="currency-input"
              id="currency-input"
            >
              { exchanges ? exchanges.map((coin) => {
                if (coin.codein === 'BRLT') {
                  return null;
                }
                return (
                  <option
                    key={ coin.code }
                    value={ coin.code }
                    data-testid={ coin.code }
                  >
                    { coin.code }
                  </option>
                );
              }) : null }
            </select>
          </label>
          <label htmlFor="method-input">
            Método
            <select
              name="method"
              value={ method }
              onChange={ this.onHandleChange }
              data-testid="method-input"
              id="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Despesa
            <select
              name="tag"
              value={ tag }
              onChange={ this.onHandleChange }
              data-testid="tag-input"
              id="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.onHandleClick }>Adicionar despesa</button>
        </form>
        <ExpenseTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencysThunk()),
  addExpenses: (state) => dispatch(addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
