import React, {useState} from 'react';
import "./SideMenu.scss"
import MenuItem from "./MenuItem";

const SideMenu = (props) => {
    const [active,setActive]=useState(1);
    return (
        <nav className="side-menu">
            <div className="group menu">
                <MenuItem setActive={setActive} active={active} index={1} to={"/"} icon="home">Home</MenuItem>
                <MenuItem setActive={setActive} active={active} index={2} to={"/account"} icon="volume-up">My Account</MenuItem>
                <MenuItem setActive={setActive} active={active} index={3} to={"/company"} icon="table">My Company</MenuItem>
                <MenuItem setActive={setActive} active={active} index={4} to={"/setting"} icon="cog">My Settings</MenuItem>
                <MenuItem setActive={setActive} active={active} index={5} to={"/news"} icon="envelope">News</MenuItem>
                <MenuItem setActive={setActive} active={active} index={6} to={"/analytic"} icon="area-chart">Analytics</MenuItem>
            </div>
        </nav>

    );
};

export default SideMenu;
