import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './archives/renderWithRouter';
import Login from '../pages/Login';

const idEmailInput = 'email-input';
const idPasswordInput = 'password-input';
const validEmail = 'user@test.com';
const validPassword = '1231231';

describe('Teste a página Login', () => {
  test('2. Crie todos os elementos que devem respeitar os'
  + ' atributos descritos no protótipo para a tela de login', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('3. Desenvolva a tela de maneira que a pessoa deve conseguir '
  + 'escrever seu email no input de email', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId('email-input');

    userEvent.type(emailInput, validEmail);

    expect(emailInput.value).toBe(validEmail);
  });

  test('4. Desenvolva a tela de maneira que a pessoa deve conseguir'
  + 'escrever sua senha no input de senha', () => {
    renderWithRouter(<Login />);

    const passwordInput = screen.getByTestId(idPasswordInput);

    userEvent.type(passwordInput, '123123123');

    expect(passwordInput.value).toBe('123123123');
  });

  test('5. Desenvolva a tela de maneira que o formulário só seja válido'
  + 'após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    const invalidEmail = 'user#test';
    const invalidPassword = '123';

    userEvent.type(emailInput, invalidEmail);
    userEvent.type(passwordInput, invalidPassword);
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();
  });

  test('6. Salve 2 tokens no localStorage após a submissão, identificados'
  + 'pelas chaves mealsToken e cocktailsToken', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });

  test('7. Salve o e-mail da pessoa usuária no localStorage na chave user'
  + 'após a submissão', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    expect(localStorage.getItem('user')).toBe('{"email":"user@test.com"}');
  });

  test('8. Redirecione a pessoa usuária para a tela principal de receitas de comidas'
  + 'após a submissão e validação com sucesso do login', () => {
    const { history } = renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(idEmailInput);
    const passwordInput = screen.getByTestId(idPasswordInput);
    const loginButton = screen.getByRole('button', {
      name: /log in/i,
    });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).toBeEnabled();

    userEvent.click(loginButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
