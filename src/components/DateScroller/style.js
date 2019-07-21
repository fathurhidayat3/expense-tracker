import styled from "styled-components";

import { color, layout } from "../../constants";

const { spacing } = layout;

const DateScrollerWrapper = styled.div`
  display: flex;
  margin: ${spacing.lg} -4px 0 -4px;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    height: 0 !important;
    width: 0 !important;
  }
`;

const DateScrollerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateScrollerButton = styled.div`
  display: inline-block;
  margin: 6px 6px 0 6px;
  min-height: 25px;
  min-width: 25px;
  border-radius: 25px;
  background: ${props => (props.isActive ? color.primary : color.grayDarker)};
  font-size: 0.75em;
  color: ${props => (props.isActive ? color.light : color.dark)};
  line-height: 2em;
  text-align: center;
`;

export { DateScrollerWrapper, DateScrollerButtonContainer, DateScrollerButton };
