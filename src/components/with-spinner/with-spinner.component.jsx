import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    const SpinnerComponent = (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    );

    return isLoading ? SpinnerComponent : <WrappedComponent {...otherProps} />
}

export default WithSpinner;