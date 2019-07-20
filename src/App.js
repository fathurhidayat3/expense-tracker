// @flow

import React from "react";
import Base from "./components/Base";
import BottomNavbar from "./components/BottomNavbar";
import ButtonIcon from "./components/ButtonIcon";
import {
  CardBottom,
  CardContainer,
  CardTop,
  CardWrapper
} from "./components/Card";
import FlexWrapper from "./components/FlexWrapper";
import HeadingText from "./components/HeadingText";
import HelperText from "./components/HelperText";
import TopNavbar from "./components/TopNavbar/style";

function App() {
  return (
    <Base>
      <TopNavbar>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <HeadingText type="h3">Stat</HeadingText>

          <ButtonIcon icon={{ name: "Search", size: 15 }} />
        </div>
      </TopNavbar>

      <div style={{ padding: "8px 0 24px 0", overflowY: "scroll", zIndex: 1 }}>
        {[0, 0, 0, 0].map((item, index) => (
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

      <BottomNavbar
        leftNav={[
          {
            icon: { name: "Calendar", size: 15 },
            text: "Daily",
            onClick: () => console.log("daily")
          },
          {
            icon: { name: "BarChart2", size: 15 },
            text: "Stat",
            onClick: () => console.log("stat")
          }
        ]}
        rightNav={[
          {
            icon: { name: "Book", size: 15 },
            text: "Budget",
            onClick: () => console.log("budget")
          },
          {
            icon: { name: "User", size: 15 },
            text: "Profile",
            onClick: () => console.log("profile")
          }
        ]}
      />
    </Base>
  );
}

export default App;
