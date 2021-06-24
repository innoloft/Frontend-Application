import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAccountInfo } from "../../../redux/actions/UserProfile";
import InformModal from "../../Popups/InformModal";

function AccountSetting(props) {
  const [errMsg, setErrMsg] = useState("");
  const [pwStrengthScore, setPwStrengthScore] = useState(0);
  const [pwErrMsg, setPwErrMsg] = useState("");
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [pwStrengthColor, setPwStrengthColor] = useState("red");
  const [pwShown, setPwShown] = useState(false);
  const [pwRepeatShown, setPwRepeatShown] = useState(false);

  const regexCheck = (regex, value) => regex.test(value);

  const DYNAMIC_STRENGTH_METER_STYLE = {
    display: password.length > 0 ? "block" : "none",
    width: `${pwStrengthScore * 15}%`,
    backgroundColor: pwStrengthColor,
  };

  function submitAccountSetting(e) {
    e.preventDefault();
    // Validation
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !password || !passwordRepeat) {
      setErrMsg("Please fill in all fields");
      clearErrMsg();
      return;
    }
    if (!regexCheck(emailRegex, email)) {
      setErrMsg("Email is invalid");
      clearErrMsg();
      return;
    }
    if (password !== passwordRepeat) {
      setErrMsg("Passwords do not match");
      clearErrMsg();
      return;
    }

    if (email === props.email && password === props.password) {
      setErrMsg("You did not edit any field");
      clearErrMsg();
      return;
    }

    if (pwStrengthScore !== 4) {
      setErrMsg("Password is not strong enough");
      clearErrMsg();
      return;
    }

    props.updateAccountInfo(email, password);
    setPassword("");
    setPasswordRepeat("");
    setModalOpened(true);
  }

  function clearErrMsg() {
    setTimeout(() => {
      setErrMsg("");
    }, 3000);
  }

  function handlePwValidation(e) {
    let pwStrengthCount = 0;
    const pwValue = e.target.value;
    setPassword(pwValue);
    if (pwErrMsg) {
      setPwErrMsg("");
    }
    const lowercaseRegex = /^(?=.*[a-z])/;
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const specialCharRegex = /^(?=.*[!@#$%^&*])/;

    if (!pwValue) {
      setPwErrMsg("");
    } else {
      if (regexCheck(specialCharRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one special character");
      }

      if (regexCheck(uppercaseRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one uppercase character");
      }

      if (pwValue.trim().length > 8) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please enter at least 8 characters");
      }

      if (regexCheck(lowercaseRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one lowercase character");
      }
    }

    setPwStrengthScore(pwStrengthCount);

    if (pwStrengthCount === 1) {
      setPwStrengthColor("red");
    } else if (pwStrengthCount === 2) {
      setPwStrengthColor("orangered");
    } else if (pwStrengthCount === 3) {
      setPwStrengthColor("orange");
    } else if (pwStrengthCount === 4) {
      setPwStrengthColor("green");
    }
  }

  function toggleViewPw() {
    setPwShown(!pwShown);
  }
  function toggleViewPwRepeat() {
    setPwRepeatShown(!pwRepeatShown);
  }

  return (
    <form className="account-setting" onSubmit={submitAccountSetting}>
      <div className="form-group">
        {errMsg && <div className="form-group__error-message">{errMsg}</div>}
        <label htmlFor="email" className="form-group__label">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="form-group__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-group__label">
          <b>Password</b>
        </label>
        <div
          className="pw-strength-meter"
          style={DYNAMIC_STRENGTH_METER_STYLE}
        ></div>
        <input
          type={pwShown ? "text" : "password"}
          className="form-group__input"
          value={password}
          onChange={handlePwValidation}
        />
        <span className="pw-toggle-view-btn" onClick={toggleViewPw}>
          {pwShown ? "HIDE" : "SHOW"}
        </span>
        {pwErrMsg && <div className="input-error-message">{pwErrMsg}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="passwordRepeat" className="form-group__label">
          <b>Password Repeat</b>
        </label>
        <input
          type={pwRepeatShown ? "text" : "password"}
          className="form-group__input"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <span className="pw-toggle-view-btn" onClick={toggleViewPwRepeat}>
          {pwRepeatShown ? "HIDE" : "SHOW"}
        </span>
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
  const { email, password } = state.userProfile;
  return {
    email,
    password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: (email, password) =>
      dispatch(updateAccountInfo(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);
