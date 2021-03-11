import React from "react"
import { FormFeedBack } from "../form.feedback"

interface InputType {
  label: string
  placeholder: string
  inputType?: string
  name: string
  id: string
  notIsValid: boolean
  value: string
  errorMsg?: string
  handleChange: (event: any) => void
}
const InputWithLabel: React.FC<InputType> = ({
  label,
  placeholder,
  inputType = "text",
  errorMsg = "",
  name,
  id,
  value,
  notIsValid,
  handleChange,
}) => {
  return (
    <div className="position-relative form-group">
      <label>{label}</label>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        type={inputType}
        value={value}
        className={notIsValid ? "form-control invalid-input" : "form-control"}
        onChange={(event: any) => handleChange(event)}
        autoComplete="off"
      />
      {notIsValid && <FormFeedBack message={errorMsg}></FormFeedBack>}
    </div>
  )
}

export { InputWithLabel }
