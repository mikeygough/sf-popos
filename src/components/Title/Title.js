import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">
        <h2>San Francisco Privately Owned Public Open Spaces</h2>
      </div>

      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
          to="/"
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
          to="/about"
        >
          About
        </NavLink>
        <RandomSpace />
      </div>
    </div>
  );
}

export default Title;
