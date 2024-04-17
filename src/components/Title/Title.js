import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className="Title">
      <h1>Privately Owned Public Spaces</h1>
      <div className="Title-Subtitle">
        <h2>San Francisco</h2>
      </div>

      <div className="Title-Nav">
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
