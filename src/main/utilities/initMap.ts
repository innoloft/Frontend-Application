import * as React from "react";

// export const useMap = () => {
//     const [loadFunc, setLoadFunc] = React.useState(false);
//     const [alreadyDeclared, setAlreadyDeclared] = React.useState(false);

//     let script: any = document.createElement("script");
//     script.type = "text/javascript";
//     script.defer = true;
//     script.async = true;
//     script.id = "gapi";

//     if (script.readyState) {
//         script.onreadystatechange = function () {
//             if (["loaded", "complete"].includes(script.readyState)) {
//                 script.onreadystatechange = null;

//                 setLoadFunc(true);
//             }
//         };
//     } else {
//         script.onload = () => {
//             setLoadFunc(true);
//         };
//     }

//     if (!document.getElementById("gapi")) {
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&callback=initMap`;
//         document.getElementsByTagName("head")[0].appendChild(script);
//         setAlreadyDeclared(true);
//     }

//     // script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&callback=initMap`;

//     // The location of Uluru
//     // const uluru = { lat: parseFloat(lat), lng: parseFloat(long) };
//     const uluru = { lat: parseFloat("45"), lng: parseFloat("45g") };

//     // The map, centered at Uluru
//     if (alreadyDeclared) {
//         const map = new window.google.maps.Map(
//             document.getElementById("map") as HTMLElement,
//             {
//                 zoom: 4,
//                 center: uluru,
//             }
//         );
//         // The marker, positioned at Uluru
//         new window.google.maps.Marker({
//             position: uluru,
//             map: map,
//         });
//     }

//     return {
//         alreadyDeclared,
//     };
// };

export const useGoogleApi = () => {
    let script: any = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.async = true;
    script.id = "gapi";

    const [loadFunc, setLoadFunc] = React.useState(false);
    const [alreadyDeclared, setAlreadyDeclared] = React.useState(false);

    React.useEffect(() => {}, [useGoogleApi]);

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (["loaded", "complete"].includes(script.readyState)) {
                script.onreadystatechange = null;

                setLoadFunc(true);
            }
        };
    } else {
        script.onload = () => {
            setLoadFunc(true);
        };
    }

    if (!document.getElementById("gapi")) {
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}`;
        document.getElementsByTagName("head")[0].appendChild(script);
        setAlreadyDeclared(true);
    }

    return {
        loadFunc,
        setLoadFunc,
        alreadyDeclared,
    };
};
