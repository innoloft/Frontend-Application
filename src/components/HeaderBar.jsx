import logo from "../images/logo.svg";
import navIcon from "../images/icon-nav.svg";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import { toggleMobileNav } from "../redux/reducers/mobileNav";
import PropTypes from "prop-types";

const HeaderBar = ({ showMobileNav, toggleMobileNav }) => {
  const onMobileNavButtonClick = () => {
    document.body.style.overflow = showMobileNav === false ? "hidden" : null;
    toggleMobileNav();
  };

  return (
    <header className="headerbar">
      <div className="container">
        <button
          className="mobile-nav-button"
          onClick={() => onMobileNavButtonClick()}
        >
          <SVG src={navIcon} height={28} width={28} />
        </button>

        <Link className="brand" to="/">
          <SVG src={logo} height={27} />
        </Link>
      </div>
    </header>
  );
};

HeaderBar.propTypes = {
  showMobileNav: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ mobileNavReducer: { showMobileNav } }) => ({
  showMobileNav,
});

const mapDispatchToProps = {
  toggleMobileNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
