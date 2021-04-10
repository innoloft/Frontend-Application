/** @format */

import React from 'react';
import './styles/content.scss';

const Content = (props) => {
	return <div className="content__wrapper">{props.children}</div>;
};
export default Content;
