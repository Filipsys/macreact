import "./index.css";

import {
  WifiIcon,
  AppleIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
  DockSeperatorIcon,
  NotificationIcon,
  BinIcon,
  // CloseButtonIcon,
} from "./assets/navIcons";

import {
  SidebarIcon,
  LeftArrowIcon,
  RightArrowIcon,
  UploadIcon,
  SearchIcon as SearchIcon2,
} from "./assets/safariIcons";

import imgWallpaper from "./assets/backgrounds/sonoma4k.webp";
import finder from "./assets/icons/finder.webp";
import apps from "./assets/icons/apps.webp";
import mail from "./assets/icons/mail.webp";
import maps from "./assets/icons/maps.webp";
import messages from "./assets/icons/messages.webp";
import safari from "./assets/icons/safari.webp";
import settings from "./assets/icons/settings.webp";
import { useState, useRef } from "react";
// import { NavPopover } from "./assets/components/NavPopover";

const taskbarApps = [
  // ["Finder", finder],
  ["Apps", apps],
  ["Safari", safari],
  ["Mail", mail],
  ["Maps", maps],
  ["Messages", messages],
  ["Settings", settings],
];

const bookmarks = [
  ["Apple"],
  ["iCloud"],
  ["Google"],
  ["Facebook"],
  ["Twitter"],
  ["Instagram"],
  ["Spotify"],
  ["Netflix"],
  ["YouTube"],
];

function App() {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [notificationIsActive, setNotificationIsActive] = useState(false);
  // const [safariIsActive, setSafariIsActive] = useState(false);
  const [activeApps, setActiveApps] = useState<string[]>([]);
  const [hiddenApps, setHiddenApps] = useState<string[]>([]);
  const [appsWithNotifications, setAppsWithNotifications] = useState<[string, number][]>([["Messages", 3]] as [
    string,
    number,
  ][]);
  const safariRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const changeto12Hour = (hour: number) => {
      if (hour > 12) return { hour: hour - 12, pm: true };
      return { hour, pm: false };
    };

    const date = new Date();
    const timeDict = {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    };

    const time = changeto12Hour(date.getHours());
    return (
      <span className="flex gap-[6px]">
        <span>
          {timeDict.days[date.getDay()]} {timeDict.months[date.getMonth()]} {date.getDate()}
        </span>
        <span>
          {time.hour}:{date.getMinutes()} {time.pm ? "PM" : "AM"}
        </span>
      </span>
    );
  };

  const handleAppChange = (app: string) => {
    if (activeApps.includes(app)) return;

    if (hiddenApps.includes(app))
      return setHiddenApps(hiddenApps.filter((a) => a !== app)), setActiveApps([...activeApps, app]);

    setActiveApps([...activeApps, app]);
  };

  const closeApp = (app: string) => {
    setActiveApps(activeApps.filter((a) => a !== app));
  };

  const hideApp = (app: string) => {
    setHiddenApps([...hiddenApps, app]);
    setActiveApps(activeApps.filter((a) => a !== app));
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!safariRef.current) return;
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });

    safariRef.current.style.left = `${position.x}px`;
    safariRef.current.style.top = `${position.y}px`;
  };

  return (
    <div className="select-none text-white">
      {/* Top Taskbar */}
      <nav className="z-10 flex h-max w-screen flex-row items-center justify-between bg-gradient-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-[500] shadow-sm [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
        <div className="flex flex-row items-center">
          <div className="px-5">
            <AppleIcon />
          </div>

          <ul className="flex h-fit w-fit flex-row py-1 text-center text-[13px] *:flex *:h-[24px] *:items-center *:rounded-[4px] *:px-[11px] *:py-1">
            <li className="px-2 font-bold hover:bg-white/[.2]">Finder</li>
            <li className="hover:bg-white/[.2]">File</li>
            <li className="hover:bg-white/[.2]">Edit</li>
            <li className="hover:bg-white/[.2]">View</li>
            <li className="hover:bg-white/[.2]">Go</li>
            <li className="hover:bg-white/[.2]">Window</li>
            <li className="hover:bg-white/[.2]">Help</li>
          </ul>
        </div>

        <div className="flex flex-row">
          <ul className="flex h-5 w-fit flex-row items-center justify-center gap-2 *:rounded-sm *:p-1">
            <li className="hover:bg-white/[.2]">
              <WifiIcon />
            </li>
            <li className="hover:bg-white/[.2]">
              <SearchIcon />
            </li>
            <li className="hover:bg-white/[.2]">
              <AccountIcon />
            </li>
            <li className="hover:bg-white/[.2]">
              <MenuIcon />
            </li>
          </ul>

          <div className="px-5 text-center text-[13px] [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
            {getCurrentTime()}
          </div>
        </div>
      </nav>

      {/* Notification */}
      <div
        className="pointer-events-none absolute left-0 top-0 flex h-fit w-screen items-center justify-center pt-12 text-[#252525]"
        style={{
          display: notificationIsActive ? "block" : "none",
        }}
      >
        <div className="flex w-[344px] gap-2 rounded-2xl bg-[#f6f6f6] p-3 drop-shadow-[0px_0px_10px_rgb(0_0_0_/_30%)]">
          <div className="flex min-w-10 items-center justify-center">
            <img src={safari} alt="settings-icon" className="size-10 drop-shadow-sm" />
          </div>
          <div className="w-fit text-xs">
            <p className="font-bold">Title goes here</p>
            <p className="font-medium leading-4">This is the description of the notification and it is very long</p>
          </div>
          <div className="relative w-8">
            <p className="absolute right-0 top-0 text-xs text-zinc-200">now</p>
          </div>
        </div>
      </div>

      {/* Safari */}
      <div
        className="absolute left-1/2 top-1/2 flex h-[660px] w-[860px] -translate-x-1/2 -translate-y-1/2 resize-y flex-col rounded-xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]"
        ref={safariRef}
        style={{
          display: activeApps.includes("Safari") ? "flex" : "none",
        }}
      >
        <nav
          className="relative flex h-11 w-full items-center justify-between rounded-t-xl bg-[#414242] shadow-sm"
          // onMouseDown={(e) => (
          //   setDragging(true),
          //   setOffset({
          //     x: e.clientX - position.x,
          //     y: e.clientY - position.y,
          //   })
          // )}
          // onMouseUp={() => setDragging(false)}
          // onMouseLeave={() => setDragging(false)}
          // onMouseMove={(e) => handleMove(e)}
        >
          <div className="absolute left-0 flex items-center px-4">
            <div className="z-10 flex gap-[6px] *:size-[10px] *:rounded-full *:transition-colors">
              <div className="bg-red-600 *:size-3" onClick={() => closeApp("Safari")}>
                {/* <CloseButtonIcon /> */}
              </div>
              <div className="bg-yellow-600" />
              <div className="bg-green-500" onClick={() => hideApp("Safari")} />
            </div>

            <div className="z-10 px-[12px]">
              <div className="rounded-md p-1 px-2 hover:bg-white">
                <SidebarIcon />
              </div>
            </div>

            <div className="z-10 flex gap-1">
              <div className="rounded-md p-1 px-2 hover:bg-white">
                <LeftArrowIcon />
              </div>
              <div className="rounded-md p-1 px-2 hover:bg-white">
                <RightArrowIcon />
              </div>
            </div>
          </div>

          <div className="absolute flex h-full w-full justify-center">
            <div className="h-full w-96 p-2">
              <div className="flex h-full w-full justify-center rounded-md bg-[#dbe5eb]">
                <div className="flex items-center">
                  <div className="*:mr-1 *:size-3">
                    <SearchIcon2 />
                  </div>
                  <span className="text-xs font-extralight text-gray-400">Search or enter website name</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 flex gap-3 px-4">
            <UploadIcon />
            <UploadIcon />
            <UploadIcon />
          </div>
        </nav>

        <div className="flex h-full w-full items-center justify-center rounded-b-xl border-[1px] border-t-0 border-[#bbbbbb]/[.09] bg-[#4A4A4A]/[.39] p-2">
          <div className="flex w-4/5 flex-col gap-2 px-16">
            <div className="text-xl font-bold">Favourites</div>
            <div className="mb-8 flex flex-wrap gap-4">
              {bookmarks.map(([name]) => (
                <div className="flex flex-col items-center gap-2 pb-2">
                  <div className="size-16 rounded-lg bg-slate-300" />
                  <p className="text-xs [line-height:.7]">{name}</p>
                </div>
              ))}
            </div>

            <div className="text-xl font-bold">Security & Privacy report</div>
            <div className="flex flex-row items-center gap-4 rounded-xl bg-black p-4">
              <div>16</div>
              <div className="text-sm">In the last 7 days Safari has blocked 16 tracking sites.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
        <div className="h-[65px] w-fit rounded-2xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]">
          <ul className="flex flex-row justify-between gap-[2px] pt-1">
            <li>
              <div className="h-[60px] pl-1">
                <img src={finder} alt="finder" className="w-[50px]" />
                {/* <div className="h[10px] flex w-full items-center justify-center">
                  <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                </div> */}
              </div>
            </li>

            {taskbarApps.map(([name, icon]) => (
              <li key={name}>
                <div
                  className="relative h-[60px]"
                  onClick={() => {
                    handleAppChange(name);
                  }}
                >
                  <div
                    className={`${!activeApps.includes(name) && !hiddenApps.includes(name) ? null : "animate-jumpup"}`}
                  >
                    <div className="absolute right-0 top-0 z-20 size-[18px]">
                      {appsWithNotifications.some(([appName]) => appName === name) && (
                        <NotificationIcon
                          amount={appsWithNotifications.find(([appName]) => appName === name)?.[1] ?? 0}
                        />
                      )}
                    </div>

                    <div className="group/iconElement">
                      <div className="absolute flex w-full -translate-y-12 flex-col items-center opacity-0 transition-opacity group-hover/iconElement:opacity-100">
                        <div className="h-fit w-fit rounded-md bg-black px-2 py-1">{name}</div>

                        <div
                          className="h-5 w-5 -translate-y-1 bg-black"
                          style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }}
                        />
                      </div>

                      <img src={icon} alt={name} className="w-[50px] active:brightness-75" />
                    </div>
                  </div>

                  <div
                    className="h[10px] flex w-full items-center justify-center"
                    style={{
                      display: activeApps.includes(name) || hiddenApps.includes(name) ? "flex" : "none",
                    }}
                  >
                    <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                  </div>
                </div>
              </li>
            ))}

            <li>
              <div className="flex h-full items-center justify-center px-[6px] *:mb-2 *:opacity-40">
                <DockSeperatorIcon />
              </div>
            </li>

            <li>
              <div className="h-[60px] pr-1 *:h-[50px]">
                <BinIcon />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Wallpaper */}
      <div className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center bg-no-repeat">
        <img src={imgWallpaper} alt="wallpaper" />
      </div>
    </div>
  );
}

export default App;
