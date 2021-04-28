import React from 'react'

export default function Map({ latitude, longitude }) {
    return (
        <iframe
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            height="312px"
            width="100%"
            title="innoloft address"
        ></iframe>
    );
}
