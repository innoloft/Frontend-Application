import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import './style.scss';

const UserInformation = ({ user, setUser }) => {
	const userSchema = Yup.object({
		firstname: Yup.string()
			.required('Required'),
		lastname: Yup.string()
			.required('Required'),
		street: Yup.string()
			.required('Required'),
		house: Yup.string()
			.required('Required'),
		postal: Yup.string()
			.required('Required'),
		country: Yup.string()
			.oneOf(['Germany', 'Austria', 'Switzerland'])
			.required('Required'),
	});

	const onSubmit = (value) => {
		setUser({ ...user, ...value });
	};

	const userFormik = useFormik({
		initialValues: {
			firstname: user.firstname,
			lastname: user.lastname,
			street: user.street,
			house: user.house,
			postal: user.postal,
			country: user.country
		},
		validationSchema: userSchema,
		onSubmit: onSubmit
	});

	return (
		<form onSubmit={userFormik.handleSubmit}>
			<div className="row">
				<div className="form-group col-md-6">
					<label>First name</label>
					<input id="firstname" type="text" className="form-control" {...userFormik.getFieldProps('firstname')} />
					{userFormik.touched.firstname && userFormik.errors.firstname && (
						<div>{userFormik.errors.firstname}</div>
					)}
				</div>
				<div className="form-group col-md-6">
					<label>Last name</label>
					<input id="lastname" type="text" className="form-control" {...userFormik.getFieldProps('lastname')} />
					{userFormik.touched.lastname && userFormik.errors.lastname && (
						<div>{userFormik.errors.lastname}</div>
					)}
				</div>
				<div className="clear"></div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<label>House number</label>
					<input id="house" type="text" className="form-control" {...userFormik.getFieldProps('house')} />
					{userFormik.touched.house && userFormik.errors.house && (
						<div>{userFormik.errors.house}</div>
					)}
				</div>
				<div className="form-group col-md-6">
					<label>Street</label>
					<input id="street" type="text" className="form-control" {...userFormik.getFieldProps('street')} />
					{userFormik.touched.street && userFormik.errors.street && (
						<div>{userFormik.errors.street}</div>
					)}
				</div>
				<div className="clear"></div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<label>Country</label>
					<select id="country" className="form-control" {...userFormik.getFieldProps('country')}>
						<option >Germany</option>
						<option>Austria</option>
						<option>Switzerland</option>
					</select>
					{userFormik.touched.country && userFormik.errors.country && (
						<div>{userFormik.errors.country}</div>
					)}
				</div>
				<div className="form-group col-md-6">
					<label>Postal code</label>
					<input id="postal" type="text" className="form-control" {...userFormik.getFieldProps('postal')} />
					{userFormik.touched.postal && userFormik.errors.postal && (
						<div>{userFormik.errors.postal}</div>
					)}
				</div>
				<div className="clear"></div>
			</div>
			<button className="btn btn-primary pull-right" type="submit">Save</button>
			<div className="clear"></div>
		</form>
	);
}

export default UserInformation;