import React from "react";

import Base from "./components/Base";
import FlexWrapper from "./components/FlexWrapper";
import {
  CardContainer,
  CardWrapper,
  CardTop,
  CardBottom
} from "./components/Card";
import HeadingText from "./components/HeadingText";
import { HelperText } from "./components/HelperText";

function App() {
  return (
    <Base>
      <FlexWrapper direction="row">
        <CardWrapper>
          <CardContainer>
            <CardTop>
              <img
                src="/images/icons/previous.svg"
                alt="et-logo"
                style={{
                  height: 25,
                  width: 25,
                  objectFit: "cover",
                  borderRadius: 25
                }}
              />
            </CardTop>
            <CardBottom>
              <HelperText>Income</HelperText>
              <HeadingText type="h4">$6,593.75</HeadingText>
            </CardBottom>
          </CardContainer>
        </CardWrapper>

        <CardWrapper>
          <CardContainer>
            <CardTop>
              <img
                src="/images/icons/play-button.svg"
                alt="et-logo"
                style={{
                  height: 25,
                  width: 25,
                  objectFit: "cover",
                  borderRadius: 25
                }}
              />
            </CardTop>
            <CardBottom>
              <HelperText>Expense</HelperText>
              <HeadingText type="h4">$2,645.50</HeadingText>
            </CardBottom>
          </CardContainer>
        </CardWrapper>
      </FlexWrapper>
    </Base>
  );
}

export default App;
