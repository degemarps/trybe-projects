/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o Pokemon.js', () => {
  test('Testa de renderiza o card com a informações do pokemon', () => {
    const { history } = renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    expect(screen.getByTestId('pokemon-name', {
      name: 'Pikachu' })).toBeInTheDocument();

    expect(screen.getByTestId('pokemon-type', {
      name: 'Electric' })).toBeInTheDocument();

    expect(screen.getByTestId('pokemon-type').textContent).toBe('Electric');

    expect(screen.getByTestId('pokemon-weight', {
      name: 'Average weight: 6.0 kg' })).toBeInTheDocument();

    const image = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Testa o link do card do pokemon selecionado', () => {
    const { history } = renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Testa se o ícone de estrela aparece ao favoritar um pokemon', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const checkbox = screen.getByRole('checkbox', { checked: false });
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);

    const imageStar = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(imageStar.src).toContain('/star-icon.svg');
  });
});
