/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o NotFound.js', () => {
  test('Testa se a página not found tem os elementos corretos', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/capitaonascimento');

    const phraseNotFound = screen.getByRole('heading', { level: 2,
      name: /Page requested not found/i });
    expect(phraseNotFound).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found' });
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
