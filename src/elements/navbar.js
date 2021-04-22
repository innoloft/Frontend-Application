import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div id="navbar">
            <div id="navbar-content">
                <Link to='/'><i className="fas fa-home"></i>Home</Link>
                <Link to='/product'><i className="fas fa-chart-bar"></i>Product</Link>
            </div>
        </div>
    );
}

export default NavBar;