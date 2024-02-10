import React from 'react';
import data from './sfpopos-data.json';
import './POPOSList.css';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
  // deconstruct as a parameter
  const spaces = data.map(({ title, address, images, hours }) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    );
  });

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
