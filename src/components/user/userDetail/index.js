import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import * as actionTypes from "../../../store/actions";
import {
  strengthIndicator,
  strengthColor,
  validateForm,
  validEmailRegex,
  checkHasNumber,
  checkHasMixed,
  checkHasSpecial
} from "../../../utils/utils";
import "./styles.scss";

const Userdetails = () => {

  const dispatch = useDispatch();
  const [errors, setError] = useState({});
  const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });
  const strengthPass = strengthIndicator(data.password);
  const color1 = strengthColor(strengthPass);
  const strengthConfirmPass = strengthIndicator(data.confirmPassword);
  const color2 = strengthColor(strengthConfirmPass);
  let [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errors) && data.email && data.password && checkHasNumber(data.password) && checkHasMixed(data.password) && checkHasSpecial(data.password)) {
      console.log("Valid Form");
      alert("Saved Successfully!!");
      dispatch({ type: actionTypes.SUBMIT_FORM })
      setData({ ...data, email: '', password: '', confirmPassword: '' })

    } else {
      if (!data.email && !data.password) {
        setError({ email: 'Email is required', confirmPassword: 'Password is required' })
      }
      if (!data.email && data.password) {
        setError({ ...errors, email: 'Email is required' })
      }
      if (!data.password && data.email) {
        setError({ ...errors, confirmPassword: 'Password is required' })
      }
      if (data.password && checkHasNumber(data.password) === false && data.email) {
        setError({ ...errors, confirmPassword: 'Password should have all characters' })
      }
      if (data.password && checkHasSpecial(data.password) === false && data.email) {
        setError({ ...errors, confirmPassword: 'Password should have all characters' })
      }
      if (data.password && checkHasSpecial(data.password) === false && data.email) {
        setError({ ...errors, confirmPassword: 'Password should have all characters' })
      }
    }
  }

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        setPass(value)
        break;
      case 'confirmPassword':
        errors.confirmPassword = (value !== pass) ? 'Password and Confirm Password Must be Same' : '';
        break;
      default:
        break;
    }
    setData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <div className={'Container'}>
      <form className={'Form'} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={data.email}
          onChange={handleInputChange}
          name="email"
          placeholder="Enter Your Email"
          type="email"
          noValidate
        />
        {errors && errors.email && errors.email.length > 0 && <span className={'error'}>{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input
          value={data.password}
          onChange={handleInputChange}
          name="password"
          placeholder="password length must be greater than 7"
          type="password"
          noValidate
          style={{ borderColor: color1 }}
        />

        <label htmlFor="confirmPassword">Password Confirm</label>
        <input
          value={data.confirmPassword}
          onChange={handleInputChange}
          name="confirmPassword"
          placeholder="confirm password length must be greater than 7"
          type="password"
          noValidate
          style={{ borderColor: color2 }}
        />

        {errors && errors.confirmPassword && errors.confirmPassword.length > 0 && <span className={'error'}>{errors.confirmPassword}</span>}

        <br />
        <button type="submit" disabled={false}>Submit</button>
      </form>
    </div>
  )
}

export default Userdetails;