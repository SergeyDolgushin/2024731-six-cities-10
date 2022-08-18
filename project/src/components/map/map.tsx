import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { City, Points, Point } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MAP_CLASS_NAME } from '../../const';
import { idForTest } from './constants';

import 'leaflet/dist/leaflet.css';
import './style.css';


type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const MAP_HEIGHT_MAIN_PAGE = '800px';
const MAP_HEIGHT_PROPERTY_PAGE = '579px';

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint, className } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapHeight = (className === MAP_CLASS_NAME) ? MAP_HEIGHT_MAIN_PAGE : MAP_HEIGHT_PROPERTY_PAGE;

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            (selectedPoint && point.lat === selectedPoint.lat && point.lng === selectedPoint.lng)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`map ${className}`}>
      <div style={{ height: `${mapHeight}` }} ref={mapRef} data-testid={idForTest}></div>
    </section >
  );
}

export { Map };
