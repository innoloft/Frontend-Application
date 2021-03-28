import React, { useEffect, useState } from "react";

const Map = ({ company }) => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const [cource, setcource] = useState("");

  useEffect(() => {
    setcource(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.647688288926!2d3.5506763879067984!3d6.46377489375523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7442fc585df%3A0x642eaefe2c2c7ce2!2sAja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1588787707050!5m2!1sen!2suk"
    );
  }, []);
  return (
    <div className="map">
      <iframe
        src={cource}
        width="300"
        height="300"
        frameborder="0"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
