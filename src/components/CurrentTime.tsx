import { timeDict } from "@/constants";
import { changeTo12Hour } from "@/utils";

export const CurrentTime = () => {
  const date = new Date();
  const time = changeTo12Hour(date.getHours());

  return (
    <span className="flex cursor-default gap-[6px]">
      <span>
        {timeDict.days[date.getDay()]} {date.getDate()} {timeDict.months[date.getMonth()]}
      </span>
      <span>
        {time.hour.toString().padStart(2, "0")}:{date.getMinutes().toString().padStart(2, "0")} {time.pm ? "PM" : "AM"}
      </span>
    </span>
  );
};
