import React from "react";
import FlexWrapper from "../components/FlexWrapper";
import { ListGroup, ListGroupItem } from "../components/ListGroup";
import HeadingText from "../components/HeadingText";
import HelperText from "../components/HelperText";

const Daily = () => {
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
          {[0, 0, 0, 0, 0].map((item, index) => (
            <ListGroupItem key={index}>
              <img
                src="https://via.placeholder.com/150"
                alt="et-lgi"
                style={{
                  height: 35,
                  width: 35,
                  objectFit: "cover",
                  borderRadius: 35
                }}
              />
              <div
                style={{
                  flex: 1,
                  margin: "0 0 0 16px",
                  paddingBottom: 16,
                  borderBottom: "1px solid #a7a9aa"
                }}
              >
                <FlexWrapper justifyContent={"space-between"} noPadding>
                  <HeadingText type={"h5"}>Fathur Hidayat</HeadingText>
                  <HeadingText type={"h5"} color={"#6def6d"}>
                    $340.40
                  </HeadingText>
                </FlexWrapper>
                <HelperText>Fri, 10AM</HelperText>
              </div>
            </ListGroupItem>
          ))}

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
              <HeadingText type={"h4"}>$340.40</HeadingText>
            </div>
          </ListGroupItem>
        </ListGroup>
      </FlexWrapper>
    </div>
  );
};

export default Daily;
