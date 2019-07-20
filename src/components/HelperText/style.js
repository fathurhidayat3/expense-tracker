import styled from "styled-components";

import { color } from "../../constants";

const HelperText = styled.h6`
  margin: 2px 0 0 0;

  font-family: "Rubik", sans-serif;
  font-weight: bold;

  color: ${props => (props.color ? props.color : color.grayDarker2)};
`;

export { HelperText };
