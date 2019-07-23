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
import DataContext from "./contexts/DataContext";
import DateContext from "./contexts/DateContext";
import AddTransaction1 from "./pages/AddTransaction1";
import AddTransaction2 from "./pages/AddTransaction2";
import Daily from "./pages/Daily";
import Stat from "./pages/Stat";
import dummy from "./server/dummy.json";

function App() {
  const [etDate, setEtDate] = React.useState(dayjs().format("YYYY-MM-DD"));
  const scrollerData = Array.from(
    new Array(dayjs(etDate).daysInMonth()).fill().map((e, index) => {
      return {
        num: ("0" + (index + 1)).slice(-2),
        day: dayjs(etDate.substr(0, 8) + (index + 1)).format("ddd")
      };
    })
  );
  const leftBottomNav = [
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
  ];
  const rightBottomNav = [
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
  ];

  return (
    <Router>
      <DataContext.Provider value={{ data: dummy.data }}>
        <DateContext.Provider value={{ etDate: etDate, setEtDate: setEtDate }}>
          <Base>
            <TopNavbar>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <HeadingText type="h3">Expense Tracker</HeadingText>
              </div>

              <DateScroller
                defaultDate={("0" + etDate).slice(-2)}
                data={scrollerData}
                buttonStyle={{
                  activeBackground: "red",
                  activeColor: "yellow"
                }}
                onButtonClick={data =>
                  setEtDate(etDate.substr(0, 8) + data.num)
                }
              />
            </TopNavbar>

            <Route exact path="/" component={() => <Daily />} />
            <Route path="/stat" component={() => <Stat />} />
            <Route path="/budget" component={() => "budget"} />
            <Route path="/profile" component={() => "profile"} />
            <Route
              path="/add-transaction"
              component={() => <AddTransaction1 />}
            />
            <Route
              path="/add-transaction-2"
              component={() => <AddTransaction2 />}
            />

            <BottomNavbar
              defaultPath={"/"}
              leftNav={leftBottomNav}
              rightNav={rightBottomNav}
              buttonFloatingClick={"add-transaction"}
            />
          </Base>
        </DateContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
