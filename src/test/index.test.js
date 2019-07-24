import generateDayofMonth from "../utils/generateDayofMonth";

describe("Utility test", () => {
  test("Check generated day of month", () => {
    let generatedData = [
      { day: "Mon", num: "01" },
      { day: "Tue", num: "02" },
      { day: "Wed", num: "03" },
      { day: "Thu", num: "04" },
      { day: "Fri", num: "05" },
      { day: "Sat", num: "06" },
      { day: "Sun", num: "07" },
      { day: "Mon", num: "08" },
      { day: "Tue", num: "09" },
      { day: "Wed", num: "10" },
      { day: "Thu", num: "11" },
      { day: "Fri", num: "12" },
      { day: "Sat", num: "13" },
      { day: "Sun", num: "14" },
      { day: "Mon", num: "15" },
      { day: "Tue", num: "16" },
      { day: "Wed", num: "17" },
      { day: "Thu", num: "18" },
      { day: "Fri", num: "19" },
      { day: "Sat", num: "20" },
      { day: "Sun", num: "21" },
      { day: "Mon", num: "22" },
      { day: "Tue", num: "23" },
      { day: "Wed", num: "24" },
      { day: "Thu", num: "25" },
      { day: "Fri", num: "26" },
      { day: "Sat", num: "27" },
      { day: "Sun", num: "28" },
      { day: "Mon", num: "29" },
      { day: "Tue", num: "30" },
      { day: "Wed", num: "31" }
    ];
    expect(generateDayofMonth("2019-07-21")).toEqual(generatedData);
  });
});
