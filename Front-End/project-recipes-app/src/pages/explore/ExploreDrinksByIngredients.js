import React, { useContext } from 'react';
import Context from '../../context/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';

export default function ExploreDrinksByIngredients() {
  const { searchBar } = useContext(Context);
  return (
    <div>
      <Header title="Explore Ingredients" />
      { searchBar ? <SearchBar /> : null}
      <Footer />
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
