import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/UserProfile";
import InformModal from "../../Popups/InformModal";

function UserSetting(props) {
  const [errMsg, setErrMsg] = useState("");
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address, setAddress] = useState(props.address);
  const [country, setCountry] = useState(props.country);
  const [modalOpened, setModalOpened] = useState(false);

  function submitUserSetting(e) {
    e.preventDefault();
    // Validation
    if (!firstName || !lastName || !address || !country) {
      setErrMsg("Please fill in all fields");
      clearErrMsg();
      return;
    }
    if (
      firstName === props.firstName &&
      lastName === props.lastName &&
      address === props.address &&
      country === props.country
    ) {
      setErrMsg("You did not edit any field");
      clearErrMsg();
      return;
    }

    props.updateUserInfo(firstName, lastName, address, country);
    setModalOpened(true);
  }

  function clearErrMsg() {
    setTimeout(() => {
      setErrMsg("");
    }, 3000);
  }

  const countryOptions = ["Germany", "Austria", "Switzerland"];

  return (
    <form className="user-setting" onSubmit={submitUserSetting}>
      <div className="form-group">
        {errMsg && <div className="form-group__error-message">{errMsg}</div>}
        <label htmlFor="firstName" className="form-group__label">
          <b>First Name</b>
        </label>
        <input
          type="text"
          className="form-group__input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-group__label">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          className="form-group__input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address" className="form-group__label">
          <b>Address</b>
        </label>
        <input
          type="text"
          className="form-group__input"
          placeholder="street, house number, postal code"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="form-group__label">
          <b>Country</b>
        </label>
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value={country}>{country}</option>
          {countryOptions
            .filter((countryOption) => countryOption !== country)
            .map((newCountryOption) => (
              <option key={newCountryOption} value={newCountryOption}>
                {newCountryOption}
              </option>
            ))}
        </select>
      </div>

      <button className="btn btn-primary btn-md" type="submit">
        Save Changes
      </button>

      <InformModal
        open={modalOpened}
        closeModal={() => setModalOpened(false)}
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  const { firstName, lastName, address, country } = state.userProfile;
  return {
    firstName,
    lastName,
    address,
    country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (firstName, lastName, address, country) =>
      dispatch(updateUserInfo(firstName, lastName, address, country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
