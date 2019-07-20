import React from "react";
import FlexWrapper from "../components/FlexWrapper";
import {
  CardWrapper,
  CardContainer,
  CardTop,
  CardBottom
} from "../components/Card";
import HelperText from "../components/HelperText";
import HeadingText from "../components/HeadingText";

const Stat = () => {
  return (
    <div style={{ padding: "8px 0 24px 0", overflowY: "scroll", zIndex: 1 }}>
      {[0, 0, 0, 0, 0].map((item, index) => (
        <FlexWrapper direction="row" key={index}>
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
      ))}
    </div>
  );
};

export default Stat;
