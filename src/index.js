import React, {useEffect, useRef, useState} from "react";
import {render} from "react-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function App() {
    const [random, setRandom] = useState(Math.random());
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.7558);
    const [lat, setLat] = useState(37.6173);
    const [zoom, setZoom] = useState(9);
    mapboxgl.accessToken =
        "pk.eyJ1IjoiZXJib3JnIiwiYSI6ImNrb2Q0b21nZDFob3oyb3FtdHNjNzgxbGUifQ.hEsH0NC3rOAEIXAtg14rwA";

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current)
        return () => marker.remove();
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <button id="rerender" onClick={() => setRandom(Math.random())}>
                Ререндер!
            </button>
            <div ref={mapContainer} id="map">
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
        </>
    );
}

render(<App/>, document.querySelector("#root"));
