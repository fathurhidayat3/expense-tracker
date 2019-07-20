// @flow

import * as React from "react";
import * as Icon from "react-feather";

import { ButtonIconStyled } from "./style";
import HelperText from "../HelperText";

import { color } from "../../constants";

type IconProp = {
  name: string,
  size: number,
  color: string
};

type Props = {
  icon?: IconProp,
  withText?: string,
  isActive?: Boolean,
  otherProps?: any
};

const ButtonIcon = ({ icon, withText, isActive, ...otherProps }: Props) => {
  const TempIcon = Icon[icon && icon.name];

  return (
    <ButtonIconStyled isActive={isActive} withText={withText} {...otherProps}>
      <TempIcon
        size={icon && icon.size}
        color={isActive ? color.primary : icon && icon.color}
      />
      <HelperText style={{ marginTop: 8 }}>{withText}</HelperText>
    </ButtonIconStyled>
  );
};

export default ButtonIcon;
