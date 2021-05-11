import * as React from "react";
import { useGoogleApi } from "../../../../utilities/initMap";
import "./index.css";

declare global {
    interface Window {
        google: any;
    }
}

interface DisplayMapDef {
    latitude: string;
    longitude: string;
}

function initMap(lat: string, lng: string) {
    const uluru = { lat: parseFloat(lat), lng: parseFloat(lng) };
    const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 8,
            center: uluru,
        }
    );

    new window.google.maps.Marker({
        position: uluru,
        map: map,
    });
}

export const DisplayMap = (props: DisplayMapDef) => {
    React.useEffect(() => {
        initMap(props.latitude, props.longitude);
    }, [props.latitude]);

    return (
        <section className="dispmap">
            <div className="map" id="map"></div>
        </section>
    );
};
