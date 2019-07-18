import styled from "styled-components";

const FlexWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: ${props => props.wrap && "wrap"};
`;

export { FlexWrapper };
