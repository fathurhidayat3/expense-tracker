import React from "react";
import { ButtonIconStyled } from "./style";
import HelperText from "../HelperText";

const ButtonIcon = ({ children, withText, ...otherProps }) => {
  return (
    <ButtonIconStyled withText={withText} {...otherProps}>
      {children}
      <HelperText style={{ marginTop: 8 }}>{withText}</HelperText>
    </ButtonIconStyled>
  );
};

export default ButtonIcon;
