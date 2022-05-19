import React, { useContext } from 'react';
import Context from '../../context/Context';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

export default function ExploreFoodsByNationalities() {
  const { searchBar } = useContext(Context);
  return (
    <div>
      <Header title="Explore Nationalities" searchIcon />
      { searchBar ? <SearchBar /> : null}
      <Footer />
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
