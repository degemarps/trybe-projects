import React, { useContext } from 'react';
import { Col, Image } from 'react-bootstrap';
import searchIcon from '../images/searchIcon.svg';
import Context from '../context/Context';

export default function Header() {
  const { handleSearchBar } = useContext(Context);

  return (
    <Col>
      <Image
        src={ searchIcon }
        data-testid="search-top-btn"
        onClick={ handleSearchBar }
      />
    </Col>
  );
}
