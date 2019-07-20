// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Daily from "./pages/Daily";
import Stat from "./pages/Stat";
import Base from "./components/Base";
import DateScroller from "./components/DateScroller";

import BottomNavbar from "./components/BottomNavbar";
import ButtonIcon from "./components/ButtonIcon";
import HeadingText from "./components/HeadingText";
import TopNavbar from "./components/TopNavbar/style";
import HelperText from "./components/HelperText";
import { color } from "./constants";

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

          <DateScroller
            data={[
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
            ]}
            buttonStyle={{
              activeBackground: "red",
              activeColor: "yellow"
            }}
            onButtonClick={data => console.log(data)}
          />
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
