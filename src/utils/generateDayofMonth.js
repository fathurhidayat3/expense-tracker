import dayjs from "dayjs";

export default function(date) {
  return Array.from(
    new Array(dayjs().daysInMonth()).fill().map((e, index) => {
      return {
        num: ("0" + (index + 1)).slice(-2),
        day: dayjs(date.substr(0, 8) + (index + 1)).format("ddd")
      };
    })
  );
}
