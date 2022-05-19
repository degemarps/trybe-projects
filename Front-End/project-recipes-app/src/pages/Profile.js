import React, { useContext } from 'react';
import { Button } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Profile() {
  const { searchBar } = useContext(Context);
  const history = useHistory();

  const getUserEmail = JSON.parse(localStorage.getItem('user'));
  let email = '';
  if (getUserEmail) {
    email = getUserEmail.email;
  } else {
    email = 'Se fudeu';
  }

  return (
    <div>
      <Header title="Profile" />
      { searchBar ? <SearchBar /> : null }
      <h3>{'Email: '}</h3>
      <h3
        data-testid="profile-email"
      >
        { email }
      </h3>
      <Button
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </Button>
      <br />
      <Button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </Button>
      <br />
      <Button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout
      </Button>
      <Footer />
    </div>
  );
}
