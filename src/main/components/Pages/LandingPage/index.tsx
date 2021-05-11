import * as React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <Link to="/product" className="ldpg-button app-button">
                View Products
            </Link>
        </article>
    );
};
