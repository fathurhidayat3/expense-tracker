import React from "react";
import { Search } from "react-feather";
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

          <ButtonIcon>
            <Search size={15} />
          </ButtonIcon>
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
            icon: "Calendar",
            text: "Daily"
          },
          {
            icon: "BarChart2",
            text: "Stat"
          }
        ]}
        rightNav={[
          {
            icon: "Book",
            text: "Budget"
          },
          {
            icon: "User",
            text: "Profile"
          }
        ]}
      />
    </Base>
  );
}

export default App;
