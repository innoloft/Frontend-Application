import React from 'react';
import {Link} from 'react-router-dom';


export const Logo: React.FC<{}> = () =>{
    return (
        <div className="logo">
            <Link to="/">
                <img src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg" alt="logo"/>
            </Link>
        </div>
    )
}