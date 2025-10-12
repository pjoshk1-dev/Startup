import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return isHome ? (
    <header>
      <h1 className="title">Game Title Here</h1>
        <nav>
          <menu className="navbar">
            <li className="nav-item">
              <NavLink className="nav-link" href="play">Play</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="collection">Collection</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="friends">Friends</NavLink>
            </li>
          </menu>
        </nav>
    </header>
  ) : (
    <header>
      <nav>
        <div>
          <NavLink className="nav-link" href="">Exit to Menu</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;