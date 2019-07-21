// @flow

import React from "react";
import HelperText from "../HelperText";
import {
  DateScrollerButton,
  DateScrollerButtonContainer,
  DateScrollerWrapper
} from "./style";

type Props = {
  defaultDate: string,
  data: Object,
  buttonStyle?: Object,
  onButtonClick: Function,
  otherProps?: any
};

const DateScroller = ({
  defaultDate,
  data,
  buttonStyle,
  onButtonClick,
  ...otherProps
}: Props) => {
  // const date = dayjs().date();
  const [buttonItem, setButtonItem] = React.useState(defaultDate);

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
              {parseInt(item.num)}
            </DateScrollerButton>
          </DateScrollerButtonContainer>
        );
      })}
    </DateScrollerWrapper>
  );
};

export default DateScroller;
