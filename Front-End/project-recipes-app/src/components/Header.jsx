import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProfileIcon from './ProfileIcon';
import SearchIcon from './SearchIcon';

export default function Header(props) {
  const {
    title = 'Foods',
    searchIcon = false,
  } = props;
  return (
    <Container>
      <Row>
        <ProfileIcon />
        <Col>
          <h1 data-testid="page-title">
            { title }
          </h1>
        </Col>
        { searchIcon ? <SearchIcon /> : undefined }
      </Row>
    </Container>
  );
}

Header.propTypes = {
  props: PropTypes.shape(),
}.isRequired;
