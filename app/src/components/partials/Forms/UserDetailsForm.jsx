import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import postForm from '../../helpers/postForm';
import validate from '../../helpers/validate';

import style from './styles/Form.module.scss';


const mapStateToProps = (state) => ({
    userForm: state.userDetailsForm
})

const mapDispatchToProps = (dispatch) => ({
    updateFormInStore: (form) => {
        dispatch({ type: "UPDATE_USER_DETAILS_FORM", payload: form })
    }
})

const UserDetailsForm = ({ updateFormInStore, userForm }) => {
    const [submitMessage, setSubmitMessage] = useState('');
    const [form, updateForm] = useState(userForm);
    const [errors, updateErrors] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: ''
    })

    const handleChange = (e) => {
        updateForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleValidate = (e) => {
        console.log(e.target.value)
        const error = validate({ name: e.target.name, value: e.target.value});
        updateErrors({
            ...errors,
            [e.target.name]: error
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const areErrors = Object.values(errors).some((err) => err !== '');
        const areFieldsEmpty = Object.values(form).some((field) => field === '');
        if (areErrors) {
            setSubmitMessage('Please fix errors to submit');
        } else if (areFieldsEmpty) {
            setSubmitMessage('Please fill out all fields to submit');
        } else {
            updateFormInStore(form);
            postForm(form, setSubmitMessage);
        }
    }

    useEffect(() => {
        updateForm(userForm)
    }, [userForm])

    return (
        <form className={style.formContainer}>
            <label>First Name:</label>
            <input name="firstName" value={form['firstName']} onChange={handleChange} onBlur={handleValidate} />
            <span className={style.errorMessage}>{errors['firstName']}</span>
            <label>Last Name:</label>
            <input name="lastName" value={form['lastName']} onChange={handleChange} onBlur={handleValidate} />
            <span className={style.errorMessage}>{errors['lastName']}</span>
            <label>Address:</label>
            <input name="address" value={form['adress']} onChange={handleChange} onBlur={handleValidate} />
            <span className={style.errorMessage}>{errors['address']}</span>
            <label>Country:</label>
            <select name="country" value={form['country']} onChange={handleChange} onBlur={handleValidate}>
                <option>Germany</option>
                <option>Austria</option>
                <option>Switzerland</option>
            </select>
            <span className={style.errorMessage}>{errors['country']}</span>
            <button className={style.submitButton} onClick={handleSubmit}>Submit</button>
            <span>{submitMessage}</span>
        </form>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsForm);
