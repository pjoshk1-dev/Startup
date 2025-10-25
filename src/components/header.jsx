import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { user } = useAuth();

  const navClass = (isActive) =>
    `nav-link ${!user ? 'disabled' : ''} ${isActive ? 'active' : ''}`;

  return isHome ? (
    <header>
      <h1 className="title">Game Title Here</h1>
      <nav>
        <menu className="navbar">
          <li className="nav-item">
            <NavLink className={({ isActive }) => navClass(isActive)} to="play">
              Play
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => navClass(isActive)} to="collection">
              Collection
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => navClass(isActive)} to="about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => navClass(isActive)} to="friends">
              Friends
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <div>
          <NavLink className="nav-link" to="/">
            Exit to Menu
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;