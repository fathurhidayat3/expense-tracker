// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Daily from "./pages/Daily";
import Stat from "./pages/Stat";
import Base from "./components/Base";
import BottomNavbar from "./components/BottomNavbar";
import ButtonIcon from "./components/ButtonIcon";
import HeadingText from "./components/HeadingText";
import TopNavbar from "./components/TopNavbar/style";
import { color } from "./constants";
import HelperText from "./components/HelperText";

function App() {
  return (
    <Router>
      <Base>
        <TopNavbar>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <HeadingText type="h3">Daily transaction</HeadingText>

            <ButtonIcon
              icon={{ name: "Search", size: 15, color: color.dark }}
            />
          </div>

          <div
            style={{
              display: "flex",
              margin: "16px -4px 0 -4px",
              overflowX: "scroll"
            }}
          >
            {[
              { num: 1, day: "Sun", isActive: false },
              { num: 2, day: "Mon", isActive: true },
              { num: 3, day: "Tue", isActive: false },
              { num: 4, day: "Wed", isActive: false },
              { num: 5, day: "Thu", isActive: false },
              { num: 6, day: "Fri", isActive: false },
              { num: 7, day: "Sat", isActive: false },
              { num: 8, day: "Sun", isActive: false },
              { num: 9, day: "Mon", isActive: false },
              { num: 10, day: "Tue", isActive: false },
              { num: 11, day: "Wed", isActive: false }
            ].map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={index}
                >
                  <HelperText>{item.day}</HelperText>
                  <div
                    style={{
                      display: "inline-block",
                      margin: "6px 6px 0 6px",
                      minHeight: 25,
                      minWidth: 25,
                      borderRadius: 25,
                      background: item.isActive
                        ? color.primary
                        : color.grayDarker,
                      fontSize: ".75em",
                      color: item.isActive ? color.light : color.dark,
                      lineHeight: "2em",
                      textAlign: "center"
                    }}
                  >
                    {item.num}
                  </div>
                </div>
              );
            })}
          </div>
        </TopNavbar>

        <Route exact path="/" component={() => <Daily />} />
        <Route path="/stat" component={() => <Stat />} />
        <Route path="/budget" component={() => "budget"} />
        <Route path="/profile" component={() => "profile"} />

        <BottomNavbar
          defaultPath={"/"}
          leftNav={[
            {
              icon: { name: "Calendar", size: 15, color: color.grayDarker2 },
              text: "Daily",
              pathname: "/"
            },
            {
              icon: { name: "BarChart2", size: 15, color: color.grayDarker2 },
              text: "Stat",
              pathname: "/stat"
            }
          ]}
          rightNav={[
            {
              icon: { name: "Book", size: 15, color: color.grayDarker2 },
              text: "Budget",
              pathname: "/budget"
            },
            {
              icon: { name: "User", size: 15, color: color.grayDarker2 },
              text: "Profile",
              pathname: "/profile"
            }
          ]}
        />
      </Base>
    </Router>
  );
}

export default App;
