/** @format */

import { ImLocation } from 'react-icons/all';

const LocationPin = ({ text }) => (
	<div style={{ width: '100%' }}>
		<ImLocation style={{ color: '#050480', fontSize: '30px' }} />
		<p className="pin-text" style={{ color: 'white', width: '100%' }}>
			{text}
		</p>
	</div>
);

export default LocationPin;
