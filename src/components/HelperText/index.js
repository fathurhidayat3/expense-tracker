import React from "react";
import { HelperText as HelperTextStyled } from "./style";

const HelperText = ({ children, ...otherProps }) => {
  return <HelperTextStyled {...otherProps}>{children}</HelperTextStyled>;
};

export default HelperText;
