import styled from "styled-components";

import { color, layout } from "../../constants";

const { spacing } = layout;

const Base = styled.div`
  flex: 1;

  padding: ${spacing.lg};

  height: 100%;
  width: 360px;

  background: ${color.gray};
`;

export { Base };
