import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './archives/renderWithRouter';
import App from '../App';

const idEmailInput = 'email-input';
const idPasswordInput = 'password-input';
const validEmail = 'user@test.com';
const validPassword = '1231231';
const idProfileBtn = 'profile-top-btn';
const idPageTitle = 'page-title';
const idSearchBtn = 'search-top-btn';

describe('Teste o componente Header', () => {
  test('10. Implemente os elementos do header na tela principal de receitas, '
  + 'respeitando os atributos descritos no protótipo', async () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    await waitForElement(() => {
      screen.getByTestId(idProfileBtn);
      screen.getByTestId(idPageTitle);
      screen.getByTestId(idSearchBtn);
    });
  });

  test('11. Redirecione a pessoa usuária para a tela de perfil'
  + 'ao clicar no botão de perfil', async () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    await waitForElement(() => {
      screen.getByTestId(idProfileBtn);
    });

    const profileBtn = screen.getByTestId(idProfileBtn);

    userEvent.click(profileBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
});
