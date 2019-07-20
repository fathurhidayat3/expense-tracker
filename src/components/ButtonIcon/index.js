// @flow

import * as React from "react";
import * as Icon from "react-feather";

import { ButtonIconStyled } from "./style";
import HelperText from "../HelperText";

type IconProp = {
  name: string,
  size: number
};

type Props = {
  children?: React.Node,
  icon?: IconProp,
  withText?: string,
  color?: String,
  otherProps?: any
};

const ButtonIcon = ({ children, icon, withText, ...otherProps }: Props) => {
  const TempIcon = Icon[icon && icon.name];

  return (
    <ButtonIconStyled withText={withText} {...otherProps}>
      <TempIcon size={15} />
      <HelperText style={{ marginTop: 8 }}>{withText}</HelperText>
    </ButtonIconStyled>
  );
};

export default ButtonIcon;
