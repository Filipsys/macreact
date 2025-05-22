import { timeDict } from "@/constants";
import { changeTo12Hour } from "@/utils";
import { useEffect, useState } from "react";

export const CurrentTime = () => {
  const date = new Date();
  const [time, setTime] = useState(() => new Date());
  const is12HourTime = true;

  useEffect(() => {
    let timeoutID: ReturnType<typeof setTimeout>;

    const updateTime = () => {
      const timeNow = new Date();
      setTime(timeNow);

      const millisecondsTillNextMinute = (60 - timeNow.getSeconds()) * 1000 - timeNow.getMilliseconds();
      timeoutID = setTimeout(updateTime, millisecondsTillNextMinute);
    };

    const newDate = new Date();
    const millisecondsTillNextMinute = (60 - newDate.getSeconds()) * 1000 - newDate.getMilliseconds();
    timeoutID = setTimeout(updateTime, millisecondsTillNextMinute);

    return () => clearTimeout(timeoutID);
  }, []);

  const FormattedTime = (props: { day: string; dayNumber: number; month: string; hours: string; minutes: string }) => {
    return (
      <>
        <span>
          {props.day} {props.dayNumber} {props.month}
        </span>
        <span>
          {is12HourTime ? changeTo12Hour(Number(props.hours)).hour : props.hours}:{props.minutes}{" "}
          {is12HourTime ? "PM" : "AM"}
        </span>
      </>
    );
  };

  return (
    <span className="flex cursor-default gap-[6px]">
      <FormattedTime
        day={timeDict.days[date.getDay()]}
        dayNumber={date.getDate()}
        month={timeDict.months[date.getMonth()]}
        hours={time.getHours().toString().padStart(2, "0")}
        minutes={date.getMinutes().toString().padStart(2, "0")}
      />
    </span>
  );
};
