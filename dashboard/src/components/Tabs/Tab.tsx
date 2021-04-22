
import React from 'react';

interface TabProps{
    activeTab: string
    label: string
    onClick: (label: string) => void 
}      

export const Tab: React.FC<TabProps> = props => {
    const onClick = () => {
        const { label, onClick } = props;
        onClick(label);
    }

    let className = 'tab-list-item';

    if (props.activeTab === props.label) {
        className += ' tab-list-active';
    }

    return (
    <li
        className={className}
        onClick={onClick}
    >
        {props.label}
    </li>
    );
}