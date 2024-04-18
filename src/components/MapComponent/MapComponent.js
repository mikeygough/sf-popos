// MapComponent.js
import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

const MapComponent = ({ markers }) => {
  let pins = null;

  if (Array.isArray(markers)) {
    // if markers is an array, generate pins for each marker
    pins = markers.map(({ geo }) => (
      <AdvancedMarker
        key={geo.lat + geo.lon}
        position={{ lat: geo.lat, lng: geo.lon }}
      >
        <Pin
          background={'#075985'}
          glyphColor={'#000'}
          borderColor={'#000'}
        />
      </AdvancedMarker>
    ));
  } else if (markers && typeof markers === 'object') {
    // if markers is an object, treat it as a single marker
    pins = (
      <AdvancedMarker
        position={{ lat: markers.geo.lat, lng: markers.geo.lon }}
      >
        <Pin
          background={'#075985'}
          glyphColor={'#000'}
          borderColor={'#000'}
        />
      </AdvancedMarker>
    );
  }

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <Map
        mapId={1}
        defaultZoom={13}
        defaultCenter={{ lat: 37.7937, lng: -122.3965 }}
      >
        {pins}
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
