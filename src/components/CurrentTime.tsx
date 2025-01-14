export const CurrentTime = () => {
  const changeTo12Hour = (hour: number) => {
    if (hour > 12) return { hour: hour - 12, pm: true };
    return { hour, pm: false };
  };

  const date = new Date();
  const timeDict = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

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
