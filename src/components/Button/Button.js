import React from "react";
import { CustomButt } from "./button.styles";

const Button = ({ children, ...other }) => {
  return (
    <CustomButt {...other} className="w-100">
      {children}
    </CustomButt>
  );
};

export default Button;
