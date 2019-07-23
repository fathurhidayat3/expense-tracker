import React from "react";

const DataContext = React.createContext({
  data: {},
  addData: () => {}
});

export default DataContext;
