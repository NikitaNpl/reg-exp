import React from 'react';
import { Link } from 'react-router-dom'

import { Button } from '../index';

function Header() {

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to='/'>
            <h1>RegExp Library</h1>
          </Link>
        </div>
        <Link to='/account'>
          <div className="header__account">
            <Button classNames="button__account">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 31.5H4.5V30C4.50661 24.2038 9.20375 19.5066 15 19.5H21C26.7962 19.5066 31.4934 24.2038 31.5 30V31.5H28.5V30C28.495 25.8599 25.1401 22.505 21 22.5H15C10.8599 22.505 7.50496 25.8599 7.5 30V31.5ZM18 18C13.8579 18 10.5 14.6421 10.5 10.5C10.5 6.35786 13.8579 3 18 3C22.1421 3 25.5 6.35786 25.5 10.5C25.495 14.6401 22.1401 17.995 18 18ZM18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6Z" fill="#333333" />
              </svg>
              <span>Аккаунт</span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;
