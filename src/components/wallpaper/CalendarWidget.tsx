export const CalendarWidget = () => {
  const date = new Date();

  const timeDict = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

  return (
    <div className="size-44 rounded-3xl backdrop-blur-3xl backdrop-brightness-[.85]">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#3f3b36] bg-opacity-25 p-6">
        <p className="text-2xl font-bold">
          <span>{timeDict.days[date.getDay()]}</span>{" "}
          <span className="text-gray-300">{timeDict.months[date.getMonth()]}</span>
        </p>

        <p className="text-8xl font-bold opacity-90">{date.getDate().toString().padStart(2, "0")}</p>
      </div>
    </div>
  );
};
