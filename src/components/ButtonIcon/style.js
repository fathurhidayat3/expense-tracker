import styled from "styled-components";

const ButtonIconStyled = styled.div`
  display: flex;
  flex-direction: ${props => (props.withText ? "column" : "row")}
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
`;

export { ButtonIconStyled };
