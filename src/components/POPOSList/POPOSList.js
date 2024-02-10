import React from 'react';
import { useState } from 'react';
import data from '../../sfpopos-data.js';
import './POPOSList.css';
import POPOSSpace from '../POPOSSpace/POPOSSpace';

function POPOSList() {
  const [query, setQuery] = useState('');
  // deconstruct as a parameter
  const spaces = data
    .filter((obj) => {
      // true if query in title
      const inTitle = obj.title
        .toLowerCase()
        .includes(query.toLowerCase());
      // true if query in address
      const inAddress = obj.address
        .toLowerCase()
        .includes(query.toLowerCase());
      // return true if either
      return inTitle || inAddress;
    })
    .map(({ id, title, address, images, hours }) => {
      return (
        <POPOSSpace
          id={id}
          key={title}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      );
    });

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;
