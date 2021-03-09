import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar, Name } from './styles/user';
import { selectProduct } from '../../slices/productSlice';

function User({ ...restProps }) {
	const {
		product: { user: { firstName, lastName, profilePicture }, company: { name: companyName } },
		loading
	} = useSelector(selectProduct);
	return (
		<Container {...restProps}>
			<User.Avatar src={profilePicture} />
			<User.Name>{`${firstName} ${lastName}`}</User.Name>
			<p>{companyName}</p>
		</Container>
	);
}

User.Avatar = function UserAvatar({ ...restProps }) {
	return <Avatar {...restProps} />;
};

User.Name = function UserName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

export default User;
