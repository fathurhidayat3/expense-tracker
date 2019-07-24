// @flow

import dayjs from "dayjs";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Base from "./components/Base";
import BottomNavbar from "./components/BottomNavbar";
import DateScroller from "./components/DateScroller";
import HeadingText from "./components/HeadingText";
import TopNavbar from "./components/TopNavbar/style";
import { color } from "./constants";
import { DataContext, DateContext } from "./contexts";
import { AddTransaction1, AddTransaction2, Daily, Stat } from "./pages";
import generateDayofMonth from "./utils/generateDayofMonth";

function App() {
  const [etDate, setEtDate] = React.useState(dayjs().format("YYYY-MM-DD"));
  const scrollerData = generateDayofMonth(etDate);

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

  // localStorage.clear();
  // localStorage.setItem("data", JSON.stringify(dummy));

  const initialState = () => JSON.parse(localStorage.getItem("data"));
  let [data, setData] = React.useState(initialState);

  return (
    <Router>
      <DataContext.Provider value={{ data: data || [], setData: setData }}>
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
