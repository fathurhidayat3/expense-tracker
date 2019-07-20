import styled from "styled-components";

import { color } from "../../constants";

const Base = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 360px;

  background: ${color.gray};
`;

export { Base };
