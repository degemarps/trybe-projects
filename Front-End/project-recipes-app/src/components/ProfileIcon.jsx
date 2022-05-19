import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';

export default function Header() {
  const history = useHistory();
  const button = () => {
    history.push('/profile');
  };

  return (
    <Col>
      <Image
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ button }
      />
    </Col>
  );
}
