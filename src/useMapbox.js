import {useEffect} from "react"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function useMapbox(map, container, lng, lat, zoom) {

    mapboxgl.accessToken =
        "pk.eyJ1IjoiZXJib3JnIiwiYSI6ImNrb2Q0b21nZDFob3oyb3FtdHNjNzgxbGUifQ.hEsH0NC3rOAEIXAtg14rwA";
    useEffect(() => {
        if (map.current) return;
        if (lng, lat, zoom) {
            console.log('use normal')
            map.current = new mapboxgl.Map({
                container: container.current,
                style: 'mapbox://styles/mapbox/dark-v10',
                center: [lng, lat],
                zoom: zoom
            });
        } else {
            map.current = new mapboxgl.Map({
                container: container.current,
                style: 'mapbox://styles/mapbox/dark-v10',
                center: [55.7558, 37.6173],
                zoom: 9
            });
        }
    });

    useEffect(() => {
        if (lng, lat, zoom) {
            const marker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map.current)
            return () => marker.remove();
        } else {
            const marker = new mapboxgl.Marker()
                .setLngLat([55.7558, 37.6173])
                .addTo(map.current)
            return () => marker.remove();
        }
    });

}