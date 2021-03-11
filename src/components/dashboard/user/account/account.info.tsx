import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { InitUserProfileState } from "../../../../inital.state/user.initial.state"
import { DropDownMenu, InputWithLabel } from "../../../common"
import { CountryList, Messages } from "../../../../utills"
import { useDispatch } from "react-redux"
import { setUserInformation } from "../../../../actions/user.actions"

const {
  Validation: { Required, NotValidNumber },
} = Messages

const schema = Yup.object({
  firstName: Yup.string().required(Required),
  lastName: Yup.string().required(Required),
  address: Yup.object()
    .shape({
      street: Yup.string().required(Required),
      houseNo: Yup.number().typeError(NotValidNumber).required(Required),
      postalCode: Yup.string().required(Required),
    })
    .required(),
  country: Yup.string().required(Required),
})

const AccountInfo: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        ...InitUserProfileState,
      }}
      onSubmit={(values) => {
        dispatch(setUserInformation(values))
      }}
    >
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        setFieldError,
        touched,
        values,
        errors,
      }) => {
        return (
          <div className="card">
            <div className="card-body">
              <form noValidate onSubmit={handleSubmit} autoComplete="off">
                <div className="form-row">
                  <div className="col-md-6">
                    <InputWithLabel
                      label="First name"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      notIsValid={!!errors.firstName && !!touched.firstName}
                      errorMsg={errors?.firstName}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputWithLabel
                      label="Last name"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      notIsValid={!!errors.lastName && !!touched.lastName}
                      errorMsg={errors?.lastName}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <h3>Address</h3>
                <div className="form-row">
                  <div className="col-md-4">
                    <InputWithLabel
                      label="Street"
                      name="address.street"
                      id="address.street"
                      placeholder="Street"
                      value={values.address.street}
                      notIsValid={
                        !!errors?.address?.street && !!touched?.address?.street
                      }
                      errorMsg={errors?.address?.street}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <InputWithLabel
                      label="House no."
                      name="address.houseNo"
                      id="address.houseNo"
                      placeholder="House no"
                      value={values.address.houseNo}
                      notIsValid={
                        !!errors?.address?.houseNo &&
                        !!touched?.address?.houseNo
                      }
                      errorMsg={errors?.address?.houseNo}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <InputWithLabel
                      label="Postal code"
                      name="address.postalCode"
                      id="address.postalCode"
                      placeholder="Postal code"
                      value={values.address.postalCode}
                      notIsValid={
                        !!errors?.address?.postalCode &&
                        !!touched?.address?.postalCode
                      }
                      errorMsg={errors?.address?.postalCode}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4">
                    <DropDownMenu
                      label="Country"
                      id="country"
                      name="country"
                      options={CountryList}
                      handleChange={(e: any) => {
                        if (e.target.value === "Please select") {
                          setFieldError("country", Required)
                        } else setFieldValue("country", e.target.value)
                      }}
                      notIsValid={!!errors.country && !!touched.country}
                      errorMsg={errors?.country ? errors.country : ""}
                    />
                  </div>
                </div>
                <button type="submit" className="mt-2 btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export { AccountInfo }
