import * as React from "react";
import "./index.css";

export const SideNav = () => {
    const options = [
        "home",
        "members",
        "offers",
        "requests",
        "startups",
        "companies",
        "ecosystems",
        "events",
        "projects",
        "news",
        "tools",
        "personal calendar",
    ];
    return (
        <div className="sidnav">
            <ul className="sidnav-ul">
                {options.map((option) => (
                    <li className="sidnav-li" key={option}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};
