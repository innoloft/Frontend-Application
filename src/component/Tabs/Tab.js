import React, { Fragment, useEffect, useState } from 'react';

function Tab(props) {
  const [className, setClassName] = useState('');

  useEffect(() => {
    if(props.activeTab === props.tabKey) setClassName('tab-item tab-item-active');
    else setClassName('tab-item');
  }, [props]);

  return (
    <Fragment>
       <li className={className} id={props.tabKey} onClick={props.onClick}>
          {props.tabLabel}
      </li>
    </Fragment>
  );
}

export default Tab;
