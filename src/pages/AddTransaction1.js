import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  CardBottom,
  CardContainer,
  CardTop,
  CardWrapper
} from "../components/Card";
import HeadingText from "../components/HeadingText";
import HelperText from "../components/HelperText";

const AddTransaction1 = () => {
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
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 24px"
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="et-lgi"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: 8
          }}
        />
      </div>

      <div style={{ padding: "8px 24px" }}>
        <HeadingText type={"h4"}>What kind of transaction it is?</HeadingText>
      </div>

      <div style={{ display: "flex", padding: "0 8px" }}>
        <CardWrapper>
          <CardContainer>
            <Link to="add-transaction-2">
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
            <Link to="add-transaction-2">
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

export default withRouter(AddTransaction1);
