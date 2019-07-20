import styled from "styled-components";

import { color } from "../../constants";

const ButtonFloating = styled.button`
  position: absolute;

  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;

  background: ${color.primary};
  border: none;
  border-radius: 50px;

  font-size: 16px;
  color: ${color.light};
  outline: none;
`;

export { ButtonFloating };
