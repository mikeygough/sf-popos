import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className="Title">
      <div>
        <h1>Privately Owned Public Spaces</h1>
        <div className="Title-Subtitle">
          <NavLink to="/">
            <h2>San Francisco</h2>
          </NavLink>
        </div>
      </div>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link'
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link'
        }
        to="/map"
      >
        Map
      </NavLink>
      <RandomSpace />
    </div>
  );
}

export default Title;
