import styled from "styled-components";

const FlexWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: ${props => props.wrap && "wrap"};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  align-items: ${props => props.alignItems && props.alignItems};

  padding: ${props => (props.noPadding ? "0" : "0 16px")};
`;

export { FlexWrapper };
