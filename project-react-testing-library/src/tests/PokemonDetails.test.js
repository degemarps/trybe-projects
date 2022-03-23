/* eslint-disable max-len */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o PokemonDetails.js', () => {
  test('Testa as informações detalhadas do pokemon monstradas na tela', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const title = screen.getByRole('heading', { level: 2, name: /Pikachu Details/i });
    expect(title).toBeInTheDocument();

    const summary = screen.getByRole('heading', { level: 2, name: /Summary/i });
    expect(summary).toBeInTheDocument();

    const descFirstHalf = 'This intelligent Pokémon roasts hard berries with';
    const descSecondtHalf = 'electricity to make them tender enough to eat.';
    const description = `${descFirstHalf} ${descSecondtHalf}`;

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('Testa a seção de mapas com as localizações do pokemon', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const titleText = 'Game Locations of Pikachu';

    const titleLoc = screen.getByRole('heading', { level: 2, name: `${titleText}` });
    expect(titleLoc).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(images).toHaveLength(2);
    expect(images[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Testa se um usuário pode favoritar o pokemon na tela de detalhes', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: /More details/i });
    expect(buttonDetails).toBeInTheDocument();

    userEvent.click(buttonDetails);

    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);

    userEvent.click(checkbox);

    expect(checkbox.checked).toEqual(false);
  });
});
