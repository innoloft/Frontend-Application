import React from 'react';

import './style.scss';

const StrengthIndicator = ({ current }) => {
	return (
		<div className="strength-indicator">
			<div className={"bar" + (current >= 1 ? ' highlight' : '')}><div></div></div>
			<div className={"bar" + (current >= 2 ? ' highlight' : '')}><div></div></div>
			<div className={"bar" + (current >= 3 ? ' highlight' : '')}><div></div></div>
			<div className={"bar" + (current >= 4 ? ' highlight' : '')}><div></div></div>
			<div className={"bar" + (current >= 5 ? ' highlight' : '')}><div></div></div>
		</div>
	);
}

export default StrengthIndicator;