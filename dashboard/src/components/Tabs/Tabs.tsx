import { Tab } from "./Tab";
import React, {useState} from 'react';

// TODO: type this safely

export const Tabs: React.FC <any> = props => {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label)
    const onClickTabItem = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <div className="tabs">
        <ol className="tab-list">
            {props.children.map((child: any) => {
            const { label } = child.props;

            return (
                <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                />
            );
            })}
        </ol>
        <div className="tab-content">
            {props.children.map((child: any) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
            })}
        </div>
        </div>
    );
}

    export default Tabs;