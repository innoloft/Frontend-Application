import React from 'react';
import { Loading, LockBody, ReleaseBody } from './styles/loader';

function Loader({ src, ...restProps }) {
	return (
		<Loading {...restProps}>
			<LockBody />
			{/* TODO add skeleton loader */}
		</Loading>
	);
}
Loader.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};

export default Loader;
