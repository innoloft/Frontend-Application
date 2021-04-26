import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

function Loading(props) {
  return (
    <Fragment>
       <div 
       style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1000,
          background: 'rgb(100, 100, 100, 0.5)',
       }}>
           <div style={{display: 'flex', padding: '10px 100px 0', height: '100%', placeContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faSpinner} size="3x" spin />
                &emsp;
                <h2>Loading</h2>
           </div>
       </div>
    </Fragment>
  );
}

export default Loading;
