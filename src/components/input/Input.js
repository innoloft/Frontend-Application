import React from "react";
import { InputField } from "./Input.styles";
const TextField = ({ children, ...other }) => {
  return (
    <InputField {...other} className="w-100">
      {children}
    </InputField>
  );
};

export default TextField;
