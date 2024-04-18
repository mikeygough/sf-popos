import React from 'react';
import data from '../../sfpopos-data.js';
import './BigMap.css';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

function BigMap() {
  console.log(data);

  const pins = data.map(({ geo }) => {
    return (
      <AdvancedMarker position={{ lat: geo.lat, lng: geo.lon }}>
        <Pin
          background={'#075985'}
          glyphColor={'#000'}
          borderColor={'#000'}
        />
      </AdvancedMarker>
    );
  });

  console.log(pins);

  return (
    <div className="BigMap">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map
          className="Map"
          mapId={1}
          zoom={14}
          center={{ lat: 37.7862705, lng: -122.4105345 }}
        >
          {pins}
        </Map>
      </APIProvider>
    </div>
  );
}

export default BigMap;
