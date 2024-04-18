import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import POPOSList from './components/POPOSList/POPOSList';
import About from './components/About/About';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import MapComponent from './components/MapComponent/MapComponent';
import data from './sfpopos-data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
        <Route
          path="/map"
          element={<MapComponent markers={data} />}
        />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
