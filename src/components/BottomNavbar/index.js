import React from "react";
import { withRouter } from "react-router-dom";
import { ButtonFloating } from "../ButtonFloating/style";
import ButtonIcon from "../ButtonIcon";
import FlexWrapper from "../FlexWrapper";
import { BottomNavbarContainer, BottomNavbarPart } from "./style";
import { color } from "../../constants";

const BottomNavbar = ({
  defaultPath,
  leftNav,
  rightNav,
  location: { pathname },
  history,
  ...otherProps
}) => {
  const [navItem, setNavItem] = React.useState(pathname);

  return (
    <BottomNavbarContainer>
      <FlexWrapper noPadding>
        {leftNav.map((leftNavItem, index) => {
          const { icon, text, pathname, ...otherItemProps } = leftNavItem;

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon
                isActive={navItem === pathname && true}
                icon={icon}
                withText={text}
                onClick={() => {
                  setNavItem(pathname);
                  history.push(pathname);
                }}
                {...otherItemProps}
              />
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>

      <ButtonFloating>
        <ButtonIcon icon={{ name: "Plus", size: 20, color: color.light }} />
      </ButtonFloating>

      <FlexWrapper noPadding justifyContent="flex-end">
        {rightNav.map((rightNavItem, index) => {
          const { icon, text, pathname, ...otherItemProps } = rightNavItem;

          return (
            <BottomNavbarPart key={index}>
              <ButtonIcon
                isActive={navItem === pathname && true}
                icon={icon}
                withText={text}
                onClick={() => {
                  setNavItem(pathname);
                  history.push(pathname);
                }}
                {...otherItemProps}
              />
            </BottomNavbarPart>
          );
        })}
      </FlexWrapper>
    </BottomNavbarContainer>
  );
};

export default withRouter(BottomNavbar);
