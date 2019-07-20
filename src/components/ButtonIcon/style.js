import styled from "styled-components";
import { color } from "../../constants";

const ButtonIconStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: ${props => (props.withText ? "column" : "row")};
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);

    display: ${props => !props.isActive && "none"};

    height: 2px;
    width: 60%;

    background: ${color.primary};
    border-radius: 2px;
  }
`;

export { ButtonIconStyled };
