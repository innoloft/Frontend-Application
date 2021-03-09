import React from 'react';
import { Container, Inner, Header, Tab, Content } from './styles/tabs';

function Tabs({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Tabs.Header = function TabsHeader({ labels, selected, handleOnClick, ...restProps }) {
	return (
		<Header {...restProps}>
			{labels.map(({ id, name }, i) => (
				<Tab key={id} onClick={() => handleOnClick(i)} className={`${selected === i ? 'selected' : ''}`}>
					{name}
				</Tab>
			))}
		</Header>
	);
};

Tabs.Content = function TabsContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

export default Tabs;
