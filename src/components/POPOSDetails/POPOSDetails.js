import React from 'react';
import { useParams } from 'react-router';
import './POPOSDetails.css';
import data from '../../sfpopos-data.js';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params; // location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours">{hours}</p>
        <POPOSFeatureList features={features} />

        <div className="POPOSDetails-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
            alt={title}
          />
        </div>
      </div>

      <div className="POPOSDetails-map">
        <h1>Map</h1>
        <APIProvider
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <Map
            mapId={id}
            zoom={15}
            center={{ lat: geo.lat, lng: geo.lon }}
          >
            <AdvancedMarker position={{ lat: geo.lat, lng: geo.lon }}>
              <Pin
                background={'#075985'}
                glyphColor={'#000'}
                borderColor={'#000'}
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default POPOSDetails;
