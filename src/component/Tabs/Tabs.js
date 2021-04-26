import React, { Fragment, useState } from 'react';
import Tab from './Tab';
import './Tab.css';

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Fragment>
      <div>
        <ul className="tab-list">
          {props.children.map((child) => {
            const { tabKey, tabLabel } = child.props;
            return (
              <Tab
                key={tabKey}
                tabKey={tabKey}
                tabLabel={tabLabel}
                activeTab={activeTab}
                onClick={()=>setActiveTab(tabKey)}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {props.children.map((child) => {
            if (child.props.tabKey !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Tabs;
