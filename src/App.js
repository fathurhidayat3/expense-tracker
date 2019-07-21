// @flow

import dayjs from "dayjs";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Base from "./components/Base";
import BottomNavbar from "./components/BottomNavbar";
import ButtonIcon from "./components/ButtonIcon";
import DateScroller from "./components/DateScroller";
import HeadingText from "./components/HeadingText";
import TopNavbar from "./components/TopNavbar/style";
import { color } from "./constants";
import DateContext from "./contexts/DateContext";
import Daily from "./pages/Daily";
import Stat from "./pages/Stat";

function App() {
  const [etDate, setEtDate] = React.useState(dayjs().format("YYYY-MM-DD"));

  return (
    <Router>
      <DateContext.Provider value={{ etDate: etDate, setEtDate: setEtDate }}>
        <Base>
          <TopNavbar>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <HeadingText type="h3">Daily transaction</HeadingText>

              <ButtonIcon
                icon={{ name: "Search", size: 15, color: color.dark }}
              />
            </div>

            <DateScroller
              defaultDate={("0" + etDate).slice(-2)}
              data={Array.from(
                new Array(dayjs(etDate).daysInMonth())
                  .fill()
                  .map((e, index) => {
                    return {
                      num: ("0" + (index + 1)).slice(-2),
                      day: dayjs(etDate.substr(0, 8) + (index + 1)).format(
                        "ddd"
                      )
                    };
                  })
              )}
              buttonStyle={{
                activeBackground: "red",
                activeColor: "yellow"
              }}
              onButtonClick={data => setEtDate(etDate.substr(0, 8) + data.num)}
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
                icon: {
                  name: "Calendar",
                  size: 15,
                  color: color.grayDarker2
                },
                text: "Daily",
                pathname: "/"
              },
              {
                icon: {
                  name: "BarChart2",
                  size: 15,
                  color: color.grayDarker2
                },
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
      </DateContext.Provider>
    </Router>
  );
}

export default App;
