import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Title from './Title/Title';
import Footer from './Footer/Footer';
import data from '../sfpopos-data';

function App() {
  const [myData, setMyData] = useState(data);
  const [myTitle, setMyTitle] = useState('');

  return (
    <div className="App">
      <Title />
      <button
        onClick={() => {
          const embarcadero = {
            id: Math.random(),
            title: myTitle,
            desc: "Right across the street from 101 California's giant POPOS is the plaza at 50 California Street. This green space comes complete with a Starbucks and lots of areas to sit and watch the cable cars clang down California.",
            address: '275 Battery St San Francisco, CA 94111',
            hours: '',
            geo: {
              lat: 37.7939413,
              lon: -122.4002143,
            },
            images: ['embarcadero-center.jpg'],
            features: ['outdoors', 'toilet', 'coffee'],
          };
          setMyData([...myData, embarcadero]);
        }}
      >
        Click Me
      </button>
      <input
        type="text"
        value={myTitle}
        onChange={(e) => setMyTitle(e.target.value)}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
