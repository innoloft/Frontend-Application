import { NavLink } from "react-router-dom";
import HomeIcon from "../images/icon-home.svg";
import ProductIcon from "../images/icon-product.svg";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const NavigationLink = (props) => (
  <NavLink
    className="link"
    to={props.href}
    activeClassName="link-active"
    exact={true}
  >
    <i className="link-icon">
      <SVG src={props.icon} />
    </i>
    <span className="link-label">{props.label}</span>
  </NavLink>
);

const Navigation = ({ showMobileNav }) => (
  <nav
    className="navigation"
    style={{ display: showMobileNav === true && "block" }}
  >
    <ul>
      <li>
        <NavigationLink href="/" label="Home" icon={HomeIcon} />
      </li>
      <li>
        <NavigationLink href="/product" label="Product" icon={ProductIcon} />
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  showMobileNav: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ mobileNavReducer: { showMobileNav } }) => ({
  showMobileNav,
});

export default connect(mapStateToProps, null)(Navigation);
