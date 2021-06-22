import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import validate from '../../helpers/validate';


import style from './styles/Form.module.scss';


const mapStateToProps = (state) => ({
    settingsForm: state.settingsForm
})

const mapDispatchToProps = (dispatch) => ({
    updateFormInStore: (form) => {
        dispatch({ type: "UPDATE_SETTINGS_FORM", payload: form })
    }
})

const SettingsForm = ({ settingsForm, updateFormInStore }) => {
    const [submitMessage, setSubmitMessage] = useState('');
    const [form, updateForm] = useState(settingsForm);
    const [errors, updateErrors] = useState({
        emailAddress: '',
        password: '',
        repeatPassword: ''
    })

    const handleChange = (e) => {
        updateForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleValidate = (e) => {
        let error = validate({ name: e.target.name, value: e.target.value});

        if (error instanceof Object) {
            const errorTypes = error.contains.map(i => i.message);
            error = `${error.value} password with ${error.length} characters of type: ${errorTypes.join(' ')} `;
        }

        if (e.target.name === 'repeatPassword') {
            if (e.target.value === form['password']) {
                error = '';
            } else {
                error = 'Passwords do not match';
            }
        }

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
            setSubmitMessage('Form was successfuly submitted');
        }
    }

    useEffect(() => {
        updateForm(settingsForm)
    }, [settingsForm])

    return (
        <form className={style.formContainer}>
            <label>Change e-mail address:</label>
            <input name="emailAddress" value={form['emailAddress']} onChange={handleChange} onBlur={handleValidate} />
            <span className={style.errorMessage}>{errors['emailAddress']}</span>
            <label>Change password:</label>
            <input name="password" value={form['password']} onChange={handleChange} onBlur={handleValidate} />
            <span className={style.errorMessage}>{errors['password']}</span>
            <label>Repeat password:</label>
            <input name="repeatPassword" value={form['repeatPassword']} onChange={handleChange} onBlur={handleValidate}/>
            <span className={style.errorMessage}>{errors['repeatPassword']}</span>
            <button className={style.submitButton} onClick={handleSubmit}>Submit</button>
            <span>{submitMessage}</span>
        </form>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
