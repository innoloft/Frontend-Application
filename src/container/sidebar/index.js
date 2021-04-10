/** @format */

import React from 'react';
import './styles/sidebar.scss';
import { SidebarLinks } from './sidebarLinks';
import { Link, useHistory } from 'react-router-dom';

const Sidebar = (props) => {
	let history = useHistory();

	const [activeLink, setActiveLink] = React.useState(history.location.pathname);

	const handleSetActiveLink = (item) => {
		setActiveLink(item.path);
	};

	return (
		<div className="sidebar__wrapper">
			<ul className="desktop">
				{SidebarLinks.map((link) => {
					return (
						<li key={link.id}
							onClick={() => handleSetActiveLink(link)} className={`links ${activeLink === link.path}`}
							style={{ backgroundColor: activeLink === link.path ? `${props?.config?.config?.mainColor}` : null }}
						>
							<Link to={link.path}>
								<span>{link.icon}</span>

								<p>{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>

			<ul className={props.isOpen ? "mobile" : "close"}>
				{SidebarLinks.map((link) => {
					return (
						<li key={link.id} onClick={() => handleSetActiveLink(link)} className={`links ${activeLink === link.path}`}
							style={{ backgroundColor: activeLink === link.path ? `${props?.config?.config?.mainColor}` : null }}
						>
							<Link to={link.path}>
								<span>{link.icon}</span>

								<p>{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Sidebar;
