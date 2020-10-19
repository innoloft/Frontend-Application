import React, { useState, Fragment } from 'react'
import { Formik } from 'formik'

//Importing components
import Alert from '../alert/alert'
import PasswordScale from '../passwordScale/passwordScale'

function MainInfo() {
    const [submitted, setSubmitted] = useState(false)
    const [strength, setStrength] = useState(0)

    const scalePassword = (password, strength) => {
        if (password.length === 0)
            return false

        if (password.length >= 8)
            strength++

        let format = /[1-9]/
        if (format.test(password))
            strength++

        format = /[A-Z]/
        if (format.test(password))
            strength++

        format = /[a-z]/
        if (format.test(password))
            strength++

        format = /[ `!@#$%^&*()_+\-=\[\]{}':'\\|,.<>\/?~]/
        if (format.test(password))
            strength++

        setStrength(strength)
    }

    return (
        <section>
            <Formik
                initialValues={{ email: '', password: '', rePassword: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    } else if (
                        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)
                    ) {
                        errors.password = 'Password must contain at least one letter, at least one number, and be longer than six charaters.'
                    }
                    if (!values.password) {
                        errors.rePassword = 'Password must not be empty.'
                    } else if (values.rePassword !== values.password) {
                        errors.rePassword = '"Password" and "Confirm Password" fields must be the same.'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitted(!submitted)
                        setSubmitting(false)
                    }, 400)
                }}>
                {({ values, errors, touched, handleChange, handleInput, handleBlur, handleSubmit, isSubmitting }) => (
                    <Fragment>
                        {submitted && <Alert message='Your information was successfully, saved.' type={true} />}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Change Email</label>
                            {errors.email && touched.email && <span>{errors.email}</span>}
                            <input type='email' name='email' id='email' onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Change Email' />
                            <label htmlFor='password'>Change Password</label>
                            {errors.password && touched.password && <span>{errors.password}</span>}
                            {!errors.Password && !!strength &&
                                <PasswordScale strength={strength} />
                            }
                            <input
                                type='password'
                                name='password'
                                id='password'
                                onChange={handleChange}
                                onInput={async (e) => {
                                    await setStrength(0)
                                    scalePassword(values.password, 0)
                                }}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder='********' />
                            <label htmlFor='re-password'>Confirm Password</label>
                            {errors.rePassword && touched.rePassword && <span>{errors.rePassword}</span>}
                            <input type='password' name='rePassword' id='re-password' onChange={handleChange} onBlur={handleBlur} value={values.rePassword} placeholder='********' />
                            <button type='submit' disabled={isSubmitting}>Update Information</button>
                        </form>
                    </Fragment>)}
            </Formik>
        </section>
    )
}

export default MainInfo