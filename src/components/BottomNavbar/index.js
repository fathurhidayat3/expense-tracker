import React from "react";
import * as Icon from "react-feather";

import { BottomNavbarContainer, BottomNavbarPart } from "./style";
import FlexWrapper from "../FlexWrapper";
import ButtonIcon from "../ButtonIcon";
import { ButtonFloating } from "../ButtonFloating/style";

const BottomNavbar = ({ leftNav, rightNav, ...otherProps }) => {
  return (
    <BottomNavbarContainer>
      <FlexWrapper noPadding>
        {leftNav.map((leftNavItem, index) => {
          const LeftNavItemTemp = Icon[leftNavItem.icon];

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon withText={leftNavItem.text}>
                <LeftNavItemTemp size={15} />
              </ButtonIcon>
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>

      <ButtonFloating>
        <Icon.Plus size={20} />
      </ButtonFloating>

      <FlexWrapper noPadding justifyContent="flex-end">
        {rightNav.map((rightNavItem, index) => {
          const RightNavItemTemp = Icon[rightNavItem.icon];

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon withText={rightNavItem.text}>
                <RightNavItemTemp size={15} />
              </ButtonIcon>
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>
    </BottomNavbarContainer>
  );
};

export default BottomNavbar;
