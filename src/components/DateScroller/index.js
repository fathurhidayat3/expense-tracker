// @flow

import React from "react";
import HelperText from "../HelperText";
import {
  DateScrollerButton,
  DateScrollerButtonContainer,
  DateScrollerWrapper
} from "./style";

type Props = {
  data: Object,
  buttonStyle?: Object,
  onButtonClick: Function,
  otherProps?: any
};

const DateScroller = ({
  data,
  buttonStyle,
  onButtonClick,
  ...otherProps
}: Props) => {
  const [buttonItem, setButtonItem] = React.useState(1);

  return (
    <DateScrollerWrapper>
      {data.map((item, index) => {
        return (
          <DateScrollerButtonContainer
            onClick={() => onButtonClick(item)}
            key={index}
          >
            <HelperText>{item.day}</HelperText>
            <DateScrollerButton
              buttonStyle={buttonStyle}
              isActive={item.num === buttonItem && true}
              onClick={() => setButtonItem(item.num)}
            >
              {item.num}
            </DateScrollerButton>
          </DateScrollerButtonContainer>
        );
      })}
    </DateScrollerWrapper>
  );
};

export default DateScroller;
