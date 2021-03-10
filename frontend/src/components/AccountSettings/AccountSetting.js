import React, { useState } from 'react';
import { useFormik } from 'formik';
import StrengthIndicator from '../StrengthIndicator';

import './style.scss';

const AccountSettings = ({ user, setUser }) => {
	const [strength, setStrength] = useState(0);

	const validate = values => {
		const errors = {};

		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!values.email)
			errors.email = "Required";
		else if (values.email.length <= 5)
			errors.email = "Must be more than 5 letters";
		else if (!emailRegex.test(values.email))
			errors.email = "Not valid email";

		if (!values.password)
			errors.password = "Required";

		if (values.password !== values.passwordConfirmation)
			errors.passwordConfirmation = "Password confirmation not matched!";

		let password_strength = 0;

		if (values.password.length > 8)
			password_strength++;

		if (/(.*[A-Z].*)/.test(values.password))
			password_strength++;
		if (/(.*[a-z].*)/.test(values.password))
			password_strength++;
		if (/(.*\d.*)/.test(values.password))
			password_strength++;
		if (/(.*\W.*)/.test(values.password))
			password_strength++;
		setStrength(password_strength);
		return errors;
	};

	const onSubmit = (values) => {
		setUser({ ...user, email: values.email, password: values.password });
	};

	const accountFormik = useFormik({
		initialValues: {
			email: user.email,
			password: "",
			passwordConfirmation: ""
		},
		validate,
		onSubmit: onSubmit
	});

	return (
		<form onSubmit={accountFormik.handleSubmit}>
			<div className="row">
				<div className="form-group col-md-6">
					<label>Email</label>
					<input id="email" type="text" className="form-control" {...accountFormik.getFieldProps('email')} />
					{accountFormik.touched.email && accountFormik.errors.email && (
						<div>{accountFormik.errors.email}</div>
					)}
				</div>
				<div className="clear"></div>
			</div>

			<div className="row">
				<div className="form-group col-md-6">
					<label>Password</label>
					<input id="password" type="password" className="form-control" {...accountFormik.getFieldProps('password')} />
					{accountFormik.touched.password && accountFormik.errors.password && (
						<div>{accountFormik.errors.password}</div>
					)}
					<StrengthIndicator current={strength} />
				</div>
				<div className="form-group col-md-6">
					<label>Confirm password</label>
					<input id="passwordConfirmation" type="password" className="form-control" {...accountFormik.getFieldProps('passwordConfirmation')} />
					{accountFormik.touched.passwordConfirmation && accountFormik.errors.passwordConfirmation && (
						<div>{accountFormik.errors.passwordConfirmation}</div>
					)}
				</div>
				<div className="clear"></div>
			</div>

			<button className="btn btn-primary pull-right" type="submit">Save</button>
			<div className="clear"></div>
		</form>
	);
}

export default AccountSettings;