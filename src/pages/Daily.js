// @flow

import dayjs from "dayjs";
import React from "react";
import Avatar from "../components/Avatar";
import FlexWrapper from "../components/FlexWrapper";
import HeadingText from "../components/HeadingText";
import HelperText from "../components/HelperText";
import { ListGroup, ListGroupItem } from "../components/ListGroup";
import DataContext from "../contexts/DataContext";
import DateContext from "../contexts/DateContext";

const Daily = () => {
  let sumAmount = 0;

  return (
    <DataContext.Consumer>
      {({ data }) => (
        <DateContext.Consumer>
          {({ etDate }) => {
            const filteredData = data.filter(
              item =>
                dayjs(item.date).format("DD-MM-YYYY") ===
                  dayjs(etDate).format("DD-MM-YYYY") && item
            );

            return (
              <div
                style={{
                  flex: 1,
                  padding: "8px 0 24px 0",
                  overflowY: "scroll",
                  zIndex: 1
                }}
              >
                <FlexWrapper>
                  <ListGroup>
                    {filteredData.map((item, index) => {
                      sumAmount += parseInt(item.amount);

                      return (
                        <ListGroupItem key={index}>
                          <Avatar
                            src="https://via.placeholder.com/150"
                            alt="et-lgi"
                            height={"35px"}
                            width={"35px"}
                            borderRadius={"35px"}
                          />
                          <div
                            style={{
                              flex: 1,
                              margin: "0 0 0 16px",
                              paddingBottom: 16,
                              borderBottom: "1px solid #a7a9aa"
                            }}
                          >
                            <FlexWrapper
                              justifyContent={"space-between"}
                              noPadding
                            >
                              <HeadingText type={"h5"}>{item.name}</HeadingText>
                              <HeadingText type={"h5"} color={"#6def6d"}>
                                ${item.amount}
                              </HeadingText>
                            </FlexWrapper>
                            <HelperText>
                              {dayjs(item.date).format("ddd, hA")}
                            </HelperText>
                          </div>
                        </ListGroupItem>
                      );
                    })}

                    {sumAmount > 0 ? (
                      <ListGroupItem key={99}>
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: 51
                          }}
                        >
                          <HelperText>Total</HelperText>
                          <HeadingText type={"h4"}>${sumAmount}</HeadingText>
                        </div>
                      </ListGroupItem>
                    ) : (
                      "Belum ada data transaksi"
                    )}
                  </ListGroup>
                </FlexWrapper>
              </div>
            );
          }}
        </DateContext.Consumer>
      )}
    </DataContext.Consumer>
  );
};

export default Daily;
