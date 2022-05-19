import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../style/footerStyle.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer-menu" data-testid="footer">
        <Link to="/drinks">
          <img
            src={ drinkIcon }
            alt="drinks"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/explore">
          <img
            src={ exploreIcon }
            alt="explore"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/foods">
          <img
            src={ mealIcon }
            alt="meals"
            data-testid="food-bottom-btn"
          />
        </Link>
      </footer>
    </div>
  );
}
