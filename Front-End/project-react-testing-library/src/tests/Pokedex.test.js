/* eslint-disable max-len */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const TESTID = 'pokemon-name';
const LENGTH_BUTTONS = 7;

describe('Testa o Podekedex.js', () => {
  test('Testa se tem o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const textElement = screen.getByText(/Encountered pokémons/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Testa se aparece o próximo pokemon clicando no botão Próximo pokémon', () => {
    renderWithRouter(<App />);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Pikachu' })[0]).toBeInTheDocument();

    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Charmander' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Caterpie' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Ekans' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Alakazam' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Mew' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Rapidash' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Snorlax' })[0]).toBeInTheDocument();

    userEvent.click(buttonNext);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Dragonair' })[0]).toBeInTheDocument();
  });

  test('Testa se aparece um pokemon por vez', () => {
    renderWithRouter(<App />);

    const element = screen.getAllByTestId(TESTID);
    expect(element).toHaveLength(1);
  });

  test('Testa os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();

    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toHaveLength(LENGTH_BUTTONS);

    expect(screen.getByRole('button', { name: /Electric/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Fire/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bug/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Poison/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Psychic/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Normal/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dragon/i })).toBeInTheDocument();
  });

  test('Testa o botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);

    expect(screen.getAllByTestId(TESTID, {
      name: 'Pikachu' })[0]).toBeInTheDocument();
  });
});
