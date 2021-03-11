import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { InputWithLabel } from "../../../common"
import { InitUserAccountState } from "../../../../inital.state/user.initial.state"
import {
  Messages,
  Regex,
  StrengthIndicator,
  StrengthText,
} from "../../../../utills"
import { setUserAccountSetting } from "../../../../actions/user.actions"
import { useDispatch } from "react-redux"
const {
  Validation: { Required, PasswordMismatch },
} = Messages

const schema = Yup.object({
  email: Yup.string().email().required(Required),
  password: Yup.string()
    .required(Required)
    .matches(
      Regex.passwordRegx,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], PasswordMismatch)
    .required(Required),
})

const AccountSetting: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = React.useState<string>("")

  const checkPasswordStrength = (password: string) => {
    if (password) {
      const strength = StrengthIndicator(password)
      const text = StrengthText(strength)
      console.log(text)
      setPasswordStrength(text)
    } else setPasswordStrength("")
  }
  const dispatch = useDispatch()
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ ...InitUserAccountState }}
      onSubmit={(values) => {
        dispatch(setUserAccountSetting(values))
      }}
    >
      {({ handleChange, handleSubmit, touched, values, errors }) => (
        <div className="card">
          <div className="card-body">
            <form className="" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-row">
                <div className="col-md-6">
                  <InputWithLabel
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    inputType="email"
                    value={values.email}
                    notIsValid={!!errors.email && !!touched.email}
                    errorMsg={errors.email}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <InputWithLabel
                    label="Password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    inputType="password"
                    value={values.password}
                    notIsValid={!!errors.password && !!touched.password}
                    errorMsg={errors.password}
                    handleChange={(event: any) => {
                      checkPasswordStrength(event.target.value)
                      handleChange(event)
                    }}
                  />
                  <span
                    className={passwordStrength}
                  >{`${passwordStrength.toUpperCase()}`}</span>
                </div>
                <div className="col-md-6">
                  <InputWithLabel
                    label="Repeat password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Repeat password"
                    inputType="password"
                    value={values.confirmPassword}
                    notIsValid={
                      !!errors.confirmPassword && !!touched.confirmPassword
                    }
                    errorMsg={errors.confirmPassword}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="mt-2 btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export { AccountSetting }
