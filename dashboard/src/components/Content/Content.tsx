import React from 'react';
import { Nav } from '../Nav/Nav';


export const Content: React.FC<{}> = props => {
    return (
        <div className="content container">
            <Nav/>
            {props.children}
        </div>
    )
}