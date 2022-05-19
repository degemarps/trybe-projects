import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../../context/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';

export default function Explore() {
  const { searchBar } = useContext(Context);
  return (
    <div>
      <Header title="Explore" />
      { searchBar ? <SearchBar /> : null}
      <h1> Explore </h1>
      <Button
        variant="primary"
        size="lg"
        data-testid="explore-foods"
        href="/explore/foods"
      >
        Explore Foods
      </Button>
      {' '}
      <Button
        variant="primary"
        size="lg"
        data-testid="explore-drinks"
        href="/explore/drinks"
      >
        Explore Drinks
      </Button>
      {' '}

      <Footer />
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
