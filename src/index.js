import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import useMapbox from "./useMapbox.js";

function App() {
    const [currentShop, setCurrentShop] = useState("km20");
    const [marker, setCurrentMarker] = useState([37.610641, 55.761994]);

    useEffect(() => {
        if (currentShop === "km20") {
            setCurrentMarker([37.610641, 55.761994]);
        }
        if (currentShop === "belief") {
            setCurrentMarker([37.601152, 55.733396]);
        }
        if (currentShop === "brandshop") {
            setCurrentMarker([37.616812, 55.767839]);
        }
    }, [currentShop]);

    useMapbox(marker);
    return (
        <>
            <div className="map-overlay">
                <h3>Выберите магазин: </h3>
                <select
                    onChange={(e) => {
                        setCurrentShop(e.target.value);
                    }}
                >
                    <option value="km20">KM20</option>
                    <option value="belief">BELIEF</option>
                    <option value="brandshop">BRANDSHOP</option>
                </select>
            </div>
            <div id="map"></div>
        </>
    );
}

render(<App />, document.querySelector("#root"));
