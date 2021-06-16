import { connect } from "react-redux";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import companyIcon from "../images/icon-company.svg";
import Map from "./Map";

const User = ({ firstName, lastName, profilePicture, company }) => {
  // const CompanyMap =
  //   company.address.latitude && company.address.longitude ? <Map /> : null;

  return (
    <div className="user">
      <div className="user-wrap">
        <div className="user-photo">
          <img src={profilePicture} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="user-fname">{firstName}</div>
        <div className="user-lname">{lastName}</div>

        <div className="user-company">
          <i>
            <SVG src={companyIcon} width={24} height={24} />
          </i>
          <span>{company.name}</span>
        </div>

        <div className="user-map">{/* <CompanyMap /> */}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  userReducer: { firstName, lastName, profilePicture, company },
}) => ({
  firstName,
  lastName,
  profilePicture,
  company,
});

export default connect(mapStateToProps, null)(User);
