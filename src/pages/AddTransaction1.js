import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  CardBottom,
  CardContainer,
  CardTop,
  CardWrapper
} from "../components/Card";
import BannerImage from "../components/BannerImage";
import Avatar from "../components/Avatar";
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
        <BannerImage src="https://via.placeholder.com/150" alt="et-lgi" />
      </div>

      <div style={{ padding: "8px 24px" }}>
        <HeadingText type={"h4"}>What kind of transaction it is?</HeadingText>
      </div>

      <div style={{ display: "flex", padding: "0 8px" }}>
        <CardWrapper>
          <CardContainer>
            <Link to="add-transaction-2">
              <CardTop>
                <Avatar src="/images/icons/previous.svg" alt="et-logo" />
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
                <Avatar src="/images/icons/play-button.svg" alt="et-logo" />
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
