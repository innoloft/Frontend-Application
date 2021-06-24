import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {
    validateForm,
} from "../../../utils/utils";
import * as actionTypes from "../../../store/actions";
import "./styles.scss";

const Userinput = () => {

    const dispatch = useDispatch();
    const [errors, setError] = useState({});
    const [data, setData] = useState({ firstName: "", lastName: "", address: "", country: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(errors) && data.firstName && data.lastName && data.address && data.country) {
            alert("Saved Successfully!!");
            dispatch({ type: actionTypes.INFO_DATA })
            setData({ ...data, firstName: '', lastName: '', address: '', country: '' })

        } else {
            console.log(data)
            if (!data.firstName && !data.lastName && !data.address) {
                setError({ firstName: 'First name required.', lastName: 'Last name required.', address: 'Address name required.' })
            }
            if (!data.firstName && data.lastName && data.address) {
                // setEerrors.firstName = "First name required."
                setError({ ...errors, firstName: 'First name required.' })
            }
            if (!data.lastName && data.firstName && data.address) {
                // errors.lastName = "Last name required."
                setError({ ...errors, lastName: 'Last name required.' })
            }
            if (!data.address && data.firstName && data.lastName) {
                // errors.address = "Address is required."
                setError({ ...errors, address: 'Address name required.' })
            }

        }
    }

    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'firstName':
                errors.firstName = value.length < 2 ? "First Name must be at least 2 characters long!" : '';
                break;
            case 'lastName':
                errors.lastName = value.length < 2 ? "Last Name must be at least 2 characters long!" : '';
                break;
            case 'address':
                errors.address = value.length < 6 ? "Address must be at least 6 characters long!" : '';
                break;
            case 'country':
                errors.country = value.length < 1 ? " Please enter a country name" : '';
                break;
            default:
                break;
        }
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div className={'Container'}>
            <form className={'Form'} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    value={data.firstName}
                    onChange={handleInputChange}
                    name="firstName"
                    placeholder="FirstName"
                    type="text"
                    noValidate />
                {(errors.firstName && errors.firstName.length > 0) && <span className={'error'}>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input
                    value={data.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    placeholder="LastName"
                    type="text"
                    noValidate />
                {errors.lastName && errors.lastName.length > 0 && <span className={'error'}>{errors.lastName}</span>}

                <label htmlFor="address">Address</label>
                <input
                    value={data.address}
                    onChange={handleInputChange}
                    name="address"
                    placeholder="Address"
                    type="text"
                    noValidate />
                {errors.address && errors.address.length > 0 && <span className={'error'}>{errors.address}</span>}

                <label htmlFor="country">Country</label>
                <select name="country" onChange={handleInputChange} value={data.country} noValidate>
                    <option value="germany">Germany</option>
                    <option value="australia">Australia</option>
                    <option value="switzerland">Switzerland</option>
                </select>
                {errors.country && errors.country.length > 0 && <span className={'error'}>{errors.country}</span>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Userinput;

