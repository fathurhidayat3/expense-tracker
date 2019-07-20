import styled from "styled-components";

import { color, layout } from "../../constants";

const { spacing } = layout;

const TopNavbar = styled.div`
  padding: ${spacing.lg};

  max-height: 50px;

  background: ${color.light};
  box-shadow: 0 3px 7px 1px ${color.grayDarker};

  z-index: 2;
`;

export default TopNavbar;
