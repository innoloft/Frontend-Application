import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import { TabInput } from '../TabInput';
import STATIC_MAP_SITE from '../../const';
import { useActions } from '../../hooks/useActions';

export function UserInformation() {
    const UserInformationFormState = useSelector(state => state.forms.userInformation)
    const actions = useActions()
    const UserInformationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Firstname is too short - should be 2 chars minimum.')
            .required('Firstname is Required'),
        lastName: Yup.string()
            .min(2, 'Lastname is too short - should be 2 chars minimum.')
            .required('Firstname is Required'),
        address: Yup.string()
            .min(16, 'Address is too short - should be 16 chars minimum.')
            .required('An address is Required'),
        country: Yup.string()
            .min(2, 'Country is too short - should be 2 chars minimum.')
            .required('Country is Required'),
    });

    return (
        <Formik
            initialValues={{
                ...UserInformationFormState
            }}
            validationSchema={UserInformationSchema}
            onSubmit={(values, { setSubmitting }) => {
                actions.setIsLoading(true)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.updateForm('userInformation', values)
                    setSubmitting(false);
                    actions.addNotification('success', 'Your information was saved')
                    actions.setIsLoading(false)
                }, 400);
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
                                touched={touched.firstName}
                                name="firstName"
                                type="text"
                                label="Firstname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                error={errors.firstName && touched.firstName && errors.firstName}
                            />
                            <TabInput
                                touched={touched.lastName}
                                name="lastName"
                                type="text"
                                label="Lastname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                error={errors.lastName && touched.lastName && errors.lastName}
                            />
                            <TabInput
                                touched={touched.address}
                                name="address"
                                type="address"
                                label="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                error={errors.address && touched.address && errors.address}
                            />
                            <TabInput
                                touched={touched.country}
                                name="country"
                                type="select"
                                label="Country"
                                onChange={handleChange}
                                options={STATIC_MAP_SITE.COUNTRIES}
                                onBlur={handleBlur}
                                value={values.country}
                                error={errors.country && touched.country && errors.country}
                            />

                        </div>
                        <div>
                            <button disabled={isSubmitting}>UPDATE</button>
                        </div>
                    </form>
                )}
        </Formik>
    )
}