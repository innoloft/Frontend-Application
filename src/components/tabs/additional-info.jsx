import React, { useState, Fragment } from 'react'
import { Formik } from 'formik'

//Importing components
import Alert from '../alert/alert'

function AdditionalInfo() {
    const [submitted, setSubmitted] = useState(false)
    return (
        <section>
            <Formik
                initialValues={{ fname: '', lname: '', address: '', country: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.fname) {
                        errors.fname = 'Please add your first name'
                    }
                    if (!values.lname) {
                        errors.lname = 'Please add your last name'
                    }
                    if (!values.address) {
                        errors.address = 'Please add your address'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitted(!submitted)
                        setSubmitting(false)
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Fragment>
                        {submitted && <Alert message='Your information was successfully, saved.' type={true} />}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='fname'>Change First Name</label>
                            {errors.fname && touched.fname && <span>{errors.fname}</span>}
                            <input type='text' name='fname' id='fname' onChange={handleChange} onBlur={handleBlur} value={values.fname} placeholder='Change First Name' />
                            <label htmlFor='lname'>Change Last Name</label>
                            {errors.lname && touched.lname && <span>{errors.lname}</span>}
                            <input type='text' name='lname' id='lname' onChange={handleChange} onBlur={handleBlur} value={values.lname} placeholder='Change Last Name' />
                            <label htmlFor='address'>Change address <span>* street, house number, postal code</span></label>
                            {errors.address && touched.address && <span>{errors.address}</span>}
                            <input type='text' name='address' id='address' onChange={handleChange} onBlur={handleBlur} value={values.address} placeholder='Change address (street, house number, postal code)' />
                            <label htmlFor='country'>Change country</label>
                            {errors.country && touched.country && <span>{errors.country}</span>}
                            <select name='country' id='country' onChange={handleChange} onBlur={handleBlur} value={values.rePassword}>
                                <option>Select country</option>
                                <option value='DE'>Germany</option>
                                <option value='AT'>Austria</option>
                                <option value='CH'>Switzerland</option>
                            </select>
                            <button type='submit' disabled={isSubmitting}>Update Information</button>
                        </form>
                    </Fragment>
                )}
            </Formik>
        </section>
    )
}

export default AdditionalInfo