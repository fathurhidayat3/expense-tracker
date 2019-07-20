// @flow

import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Stat from "./pages/Stat";
import Base from "./components/Base";
import BottomNavbar from "./components/BottomNavbar";
import ButtonIcon from "./components/ButtonIcon";
import HeadingText from "./components/HeadingText";
import TopNavbar from "./components/TopNavbar/style";
import { color } from "./constants";

function App() {
  return (
    <Router>
      <Base>
        <TopNavbar>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <HeadingText type="h3">Stat</HeadingText>

            <ButtonIcon
              icon={{ name: "Search", size: 15, color: color.dark }}
            />
          </div>
        </TopNavbar>

        <Route path="/">
          <Redirect to="/daily" />
        </Route>
        <Route path="/daily" component={() => "daily"} />
        <Route path="/stat" component={() => <Stat />} />
        <Route path="/budget" component={() => "budget"} />
        <Route path="/profile" component={() => "profile"} />

        <BottomNavbar
          defaultPath={"daily"}
          leftNav={[
            {
              icon: { name: "Calendar", size: 15, color: color.grayDarker2 },
              text: "Daily",
              pathname: "daily"
            },
            {
              icon: { name: "BarChart2", size: 15, color: color.grayDarker2 },
              text: "Stat",
              pathname: "stat"
            }
          ]}
          rightNav={[
            {
              icon: { name: "Book", size: 15, color: color.grayDarker2 },
              text: "Budget",
              pathname: "budget"
            },
            {
              icon: { name: "User", size: 15, color: color.grayDarker2 },
              text: "Profile",
              pathname: "profile"
            }
          ]}
        />
      </Base>
    </Router>
  );
}

export default App;
