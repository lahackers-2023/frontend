import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import Pin from '../../viewport-animation/src/pin.jsx';
import './AnimatedMap.css'

import Map, {
  MapRef,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from './control-panel.jsx';
import CITIES from './cities.json';


const MAPBOX_TOKEN = 'pk.eyJ1IjoiaG91dzMiLCJhIjoiY2xnc2UwZjFwMDF5bDNwbHNwOWJ2aWQzZCJ9.4bMqWYB53QL1A6NYvqZx7Q';

const initialViewState = {
  latitude: 37.7751,
  longitude: -122.4193,
  zoom: 11,
  bearing: 0,
  pitch: 0
};

export default function MyMap() {
  const mapRef = useRef();

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  const pins =
    () =>
    (
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            console.log(`Clicked marker at ${city}`);
          }}
        >
          <Pin />
        </Marker>
      ))
    )

  return (
    <div classname='map-wrapper'>
      <Map
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >


      </Map>
      <ControlPanel onSelectCity={onSelectCity} />

      </div>

  );
}
