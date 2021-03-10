import React, { useState } from 'react';

import './style.scss';

var Tab = ({ children, tabList }) => {
	const [current, setCurrentTab] = useState(tabList[0].key);

	return (
		<div className="tab">
			<div className="tab-bar">
				{
					tabList.map((element) => {
						return (
							<div key={"Tab" + element.key} className={"tab-item" + (current === element.key ? " active" : "")} onClick={() => setCurrentTab(element.key)}>
								<span className="tab-title">{element.title}</span>
							</div>
						);
					})
				}
			</div>
			<div className="tab-content">
				{
					React.Children.map(children, child => {
						if (child.key === current)
							return child;
					})
				}
			</div>
		</div>
	);
}

Tab.Item = ({ children}) => {
	return (
		<div>
			{children}
		</div>
	);
}

export default Tab;