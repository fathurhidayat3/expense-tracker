import styled from "styled-components";

import { color, layout } from "../../constants";

const { spacing } = layout;

const BottomNavbarContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: "space-between";

  padding: ${spacing.md};

  max-height: 50px;

  background: radial-gradient(
    circle at top center,
    ${color.grayDarker},
    ${color.grayDarker} 30px,
    ${color.light} 30px,
    ${color.light}
  );

  border-radius: ${spacing.xl} ${spacing.xl} 0 0;
  box-shadow: 0 -3px 7px 1px ${color.grayDarker};

  z-index: 2;
`;

const BottomNavbarPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 70px;
`;

export { BottomNavbarContainer, BottomNavbarPart };
