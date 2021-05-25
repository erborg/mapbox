import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect } from 'react';

export default function useMapbox(map, container, marker = [37.610641, 55.761994], zoom) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZXJib3JnIiwiYSI6ImNrb2Q0b21nZDFob3oyb3FtdHNjNzgxbGUifQ.hEsH0NC3rOAEIXAtg14rwA';
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: marker,
      zoom: zoom,
    });
  });
  useEffect(() => {
    const mrk = new mapboxgl.Marker().setLngLat(marker).addTo(map.current);
    return () => mrk.remove();
  });
}
