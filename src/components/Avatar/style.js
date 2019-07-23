import styled from "styled-components";

const Avatar = styled.img`
  height: ${props => (props.height ? props.height : "25px")};
  width: ${props => (props.width ? props.width : "25px")};
  object-fit: "cover";
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "25px")};
`;

export { Avatar };
