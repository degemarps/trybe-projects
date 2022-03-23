/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o About.js', () => {
  test('Testa se as informações contidas na página são as corretas', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');

    const phraseAbout = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(phraseAbout).toBeInTheDocument();

    const firstPFirstHalf = 'This application simulates a Pokédex, a digital';
    const firstPSecondtHalf = 'encyclopedia containing all Pokémons';
    const firstP = `${firstPFirstHalf} ${firstPSecondtHalf}`;

    const secondPFirstHalf = 'One can filter Pokémons by type, and see';
    const secondPSecondHalf = 'more details for each one of them';
    const secondP = `${secondPFirstHalf} ${secondPSecondHalf}`;

    expect(screen.getByText(`${firstP}`)).toBeInTheDocument();
    expect(screen.getByText(`${secondP}`)).toBeInTheDocument();

    const image = screen.getByAltText('Pokédex');
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
