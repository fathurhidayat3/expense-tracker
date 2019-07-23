import styled from "styled-components";

const BannerImage = styled.img`
  height: ${props => (props.height ? props.height : "100%")};
  width: ${props => (props.width ? props.width : "100%")};
  object-fit: "cover";
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "8px")};
`;

export { BannerImage };
