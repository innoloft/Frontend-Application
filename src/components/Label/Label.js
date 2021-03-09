import React from "react";
import {LabelItem} from './label.styles'

const Label = ({ children, ...other }) => {
  return (
    <LabelItem {...other} className="w-100">
      {children}
    </LabelItem>
  );
};

export default Label;
