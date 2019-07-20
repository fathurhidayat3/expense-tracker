import React from "react";
import { ButtonFloating } from "../ButtonFloating/style";
import ButtonIcon from "../ButtonIcon";
import FlexWrapper from "../FlexWrapper";
import { BottomNavbarContainer, BottomNavbarPart } from "./style";
import { color } from "../../constants";

const BottomNavbar = ({ leftNav, rightNav, ...otherProps }) => {
  return (
    <BottomNavbarContainer>
      <FlexWrapper noPadding>
        {leftNav.map((leftNavItem, index) => {
          const { icon, text, ...otherItemProps } = leftNavItem;

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon icon={icon} withText={text} {...otherItemProps} />
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>

      <ButtonFloating>
        <ButtonIcon icon={{ name: "Plus", size: 20, color: color.light }} />
      </ButtonFloating>

      <FlexWrapper noPadding justifyContent="flex-end">
        {rightNav.map((rightNavItem, index) => {
          const { icon, text, ...otherItemProps } = rightNavItem;

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon icon={icon} withText={text} {...otherItemProps} />
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>
    </BottomNavbarContainer>
  );
};

export default BottomNavbar;
