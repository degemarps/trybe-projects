import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap/';

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const emailValidator = () => {
    const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)$/;
    const { email } = user;
    return regex.test(email);
  };

  const passwordValidator = () => {
    const { password } = user;
    const min = 7;
    if (password.length >= min) {
      return true;
    }
  };

  const onClickButton = () => {
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    history.push('/foods');
  };

  const handleChange = ({ target: { value, id } }) => {
    setUser({
      ...user,
      [id]: value,
    });
  };

  const userValidator = emailValidator() && passwordValidator();

  return (
    <Form>
      <Form.Group>
        <Form.Label>
          Email
        </Form.Label>
        <Form.Control
          data-testid="email-input"
          id="email"
          type="email"
          placeholder="Email"
          onChange={ (e) => handleChange(e) }
          // value={ user.email }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          data-testid="password-input"
          id="password"
          placeholder="At least 6 characters"
          onChange={ (e) => handleChange(e) }
          // value={ user.password }
        />
      </Form.Group>
      <Button
        data-testid="login-submit-btn"
        type="button"
        disabled={ !userValidator }
        onClick={ onClickButton }
      >
        Log In
      </Button>
    </Form>
  );
}
