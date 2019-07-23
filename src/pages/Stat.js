import React from "react";
import { Link } from "react-router-dom";
import {
  CardBottom,
  CardContainer,
  CardTop,
  CardWrapper
} from "../components/Card";
import HeadingText from "../components/HeadingText";
import HelperText from "../components/HelperText";

const Stat = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "8px 0 24px 0",
        overflowY: "scroll",
        zIndex: 1
      }}
    >
      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", padding: "0 8px" }}>
        <CardWrapper>
          <CardContainer>
            <Link to="/">
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
            </Link>
          </CardContainer>
        </CardWrapper>

        <CardWrapper>
          <CardContainer>
            <Link to="/">
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
            </Link>
          </CardContainer>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Stat;
