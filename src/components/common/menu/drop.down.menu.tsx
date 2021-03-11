import React from "react"
import { FormFeedBack } from "../form.feedback"

interface option {
  id: number
  name: string
}
interface InputType {
  label: string
  name: string
  id: string
  notIsValid: boolean
  errorMsg: string
  options: option[]
  handleChange: (event: any) => void
}
const DropDownMenu: React.FC<InputType> = ({
  label,
  name,
  id,
  options,
  notIsValid,
  errorMsg,
  handleChange,
}) => {
  return (
    <div className="position-relative form-group">
      <label>{label}</label>
      <select
        name={name}
        id={id}
        className={notIsValid ? "form-control invalid-input" : "form-control"}
        onChange={(event: any) => handleChange(event)}
      >
        {options &&
          options.map((e: option) => <option key={e.id}>{e.name}</option>)}
      </select>
      {notIsValid && <FormFeedBack message={errorMsg}></FormFeedBack>}
    </div>
  )
}

export { DropDownMenu }
