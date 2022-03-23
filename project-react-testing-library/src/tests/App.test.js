import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o App.js', () => {
  test('Verificar se o topo da aplicação contém os links de navegação', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const elementHome = screen.getByRole('link', { name: /Home/i });
    expect(elementHome).toBeInTheDocument();
    const elementAbout = screen.getByRole('link', { name: /About/i });
    expect(elementAbout).toBeInTheDocument();
    const elementFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(elementFavorite).toBeInTheDocument();
  });

  test('Aplicação é redirecionada para a url / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);

    const elementHome = screen.getByRole('link', { name: /Home/i });
    expect(elementHome).toBeInTheDocument();
    userEvent.click(elementHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Aplicação é redirecionada para a url /about ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);

    const elementAbout = screen.getByRole('link', { name: /About/i });
    expect(elementAbout).toBeInTheDocument();
    userEvent.click(elementAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const phraseAbout = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(phraseAbout).toBeInTheDocument();

    const image = screen.getByAltText('Pokédex');
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });

  test('Aplicação é redirecionada para /favorites ao clicar no Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const elementFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(elementFavorite).toBeInTheDocument();
    userEvent.click(elementFavorite);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Aplicação é redirecionada para Not Found ao entrar em uma URL inválida', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/capitaonascimento');

    const phraseNotFound = screen.getByRole('heading', { level: 2,
      name: /Page requested not found/i });
    expect(phraseNotFound).toBeInTheDocument();
  });
});
