import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import { TabInput } from '../TabInput';
import { StrengthIndicator } from '../StrengthIndicator';
import { useActions } from '../../hooks/useActions'

export function AccountSettings() {
    const AccountSettingsFormState = useSelector(state => state.forms.accountSettings)
    const actions = useActions()
    const AccountSettingsSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .required('Password is Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm the Password'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
    });

    return (
        <Formik
            initialValues={{
                email: AccountSettingsFormState.email || '',
                confirmPassword: '',
                password: ''
            }}
            enableReinitialize={true}
            validationSchema={AccountSettingsSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                actions.setIsLoading(true)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.updateForm('accountSettings', values)
                    setSubmitting(false);
                    actions.addNotification('success', 'Your Account has been updated')
                    actions.addNotification('danger', 'Something was wrong, please contact support(Test notify)')
                    resetForm({
                        values: {
                            password: '',
                            confirmPassword: ''
                        }
                    })
                    actions.setIsLoading(false)
                }, 5000);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TabInput
                                touched={touched.email}
                                name="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={errors.email && touched.email && errors.email}
                            />

                            <TabInput
                                touched={touched.password}
                                name="password"
                                type="password"
                                label="New Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={errors.password && touched.password && errors.password}
                                StrengthIndicator={() => <StrengthIndicator value={values.password} />}
                            />

                            <TabInput
                                touched={touched.confirmPassword}
                                name="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                error={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            />

                        </div>
                        <div>
                            <button type='submit' disabled={isSubmitting}>UPDATE</button>
                        </div>
                    </form>
                )}
        </Formik>
    )
}