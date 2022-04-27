import React from 'react';
import './Form.css';
import propTypes from 'prop-types';

class Form extends React.Component {
  verifyTrunfo(hasTrunfo, cardTrunfo, onInputChange) {
    if (hasTrunfo) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }
    return (
      <label htmlFor="trybe-trunfo">
        Super Trybe Trunfo
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
        />
      </label>
    );
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="container-form">
        <label className="container-inputs" htmlFor="nome">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label className="container-inputs" htmlFor="descricao">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            data-testid="description-input"
          />
        </label>

        <label className="container-inputs" htmlFor="attr1">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label className="container-inputs" htmlFor="attr2">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label className="container-inputs" htmlFor="attr3">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label className="container-inputs" htmlFor="imagem">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {this.verifyTrunfo(hasTrunfo, cardTrunfo, onInputChange)}

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="button"
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
