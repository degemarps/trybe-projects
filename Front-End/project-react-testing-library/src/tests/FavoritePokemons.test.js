/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o FavoritePokemons.js', () => {
  test('Caso o usuário não tenha adicionado pokemons exibe a mensagem correta', () => {
    renderWithRouter(<App />);

    const buttonFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(buttonFavorite);

    const textElement = screen.getByText('No favorite pokemon found');
    expect(textElement).toBeInTheDocument();
  });

  test('Se o usuário favoritar um pokemon exibe ele na página de favoritos', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const checkbox = screen.getByRole('checkbox', { checked: false });
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    const buttonFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(buttonFavorite);

    expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
    expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
    expect(screen.getByTestId('pokemon-weight')).toBeInTheDocument();
  });
});
