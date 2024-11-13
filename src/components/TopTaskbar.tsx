import { AccountIcon, AppleIcon, MenuIcon, SearchIcon, WifiIcon } from "../assets/navIcons.tsx";

const getCurrentTime = () => {
  const changeTo12Hour = (hour: number) => {
    if (hour > 12) return { hour: hour - 12, pm: true };
    return { hour, pm: false };
  };

  const date = new Date();
  const timeDict = {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

  const time = changeTo12Hour(date.getHours());
  return (
    <span className="flex gap-[6px] cursor-default">
        <span>{timeDict.days[date.getDay()]} {date.getDate()} {timeDict.months[date.getMonth()]}</span>
        <span>{time.hour}:{date.getMinutes()} {time.pm ? "PM" : "AM"}</span>
      </span>
  );
};

export const TopTaskbar = () => {
  return (
    <nav
      className="z-10 flex h-6 w-screen flex-row items-center justify-between bg-gradient-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-[500] shadow-sm [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
      <div className="flex flex-row items-center">
        <div className="px-3">
          <AppleIcon />
        </div>

        <ul
          className="flex h-fit w-fit flex-row py-1 text-center text-[13px] *:flex *:h-[24px] *:items-center *:rounded-[4px] *:px-[11px] *:py-1 cursor-default">
          <li className="font-bold active:bg-white/[.2]">Finder</li>
          <li className="active:bg-white/[.2]">File</li>
          <li className="active:bg-white/[.2]">Edit</li>
          <li className="active:bg-white/[.2]">View</li>
          <li className="active:bg-white/[.2]">Go</li>
          <li className="active:bg-white/[.2]">Window</li>
          <li className="active:bg-white/[.2]">Help</li>
        </ul>
      </div>

      <div className="flex flex-row">
        <ul className="flex h-5 w-fit flex-row items-center justify-center gap-2 *:rounded-sm *:p-1 *:px-2">
          <li className="active:bg-white/[.2]">
            <WifiIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <SearchIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <AccountIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <MenuIcon />
          </li>
        </ul>

        <div className="px-4 text-center text-[13px] [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
          {getCurrentTime()}
        </div>
      </div>
    </nav>
  )
}