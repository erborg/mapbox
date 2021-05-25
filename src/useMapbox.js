import mapboxgl from '!mapbox-gl';
import { useEffect } from "react";

export default function useMapbox(marker = [37.610641, 55.761994]) {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiZXJib3JnIiwiYSI6ImNrb2Q0b21nZDFob3oyb3FtdHNjNzgxbGUifQ.hEsH0NC3rOAEIXAtg14rwA";
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/dark-v10",
            center: [37.610641, 55.761994],
            zoom: 12
        });
        new mapboxgl.Marker().setLngLat(marker).addTo(map);
    });
}
