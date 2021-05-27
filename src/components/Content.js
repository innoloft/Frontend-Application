import React from 'react';
import "./Content.scss"
import {Route, Switch} from "react-router-dom";
import Account from "./account/Account";

const Content = (props) => {
    return (
        <div className="page">
            <Switch>
                <Route path="/account" component={Account} />
                <Route path="/company" component={()=><></>} />
                <Route path="/setting" component={()=><></>} />
                <Route path="/news" component={()=><></>}/>
                <Route path="/Analytic" component={()=><></>} />
                <Route component={()=><></>} />
            </Switch>

        </div>
    );
};

export default Content;
