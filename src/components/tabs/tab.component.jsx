import React from 'react';

import './tab.styles.scss';

const Tab = ({ isTabSelected, children }) => {
    return (
        <>
            { isTabSelected ? <div className='tab-content'>{children}</div> : null}
        </>
    )
};

export default Tab;