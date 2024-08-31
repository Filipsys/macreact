import "./index.css";

import {
  WifiIcon,
  AppleIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
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

function App() {
  const [dragging, setDragging] = useState(false);
  const safariRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const changeto12Hour = (hour: number) => {
      if (hour > 12) return { hour: hour - 12, pm: true };
      return { hour, pm: false };
    };

    const date = new Date();
    const timeDict = {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };

    const time = changeto12Hour(date.getHours());
    return (
      <span className="flex gap-[6px]">
        <span>
          {timeDict.days[date.getDay()]} {timeDict.months[date.getMonth()]}{" "}
          {date.getDate()}
        </span>
        <span>
          {time.hour}:{date.getMinutes()} {time.pm ? "PM" : "AM"}
        </span>
      </span>
    );
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!safariRef.current) return;
    if (!dragging) return;

    const x = e.clientX;
    const y = e.clientY;
    const safariWidth = safariRef.current.clientWidth;
    const safariHeight = safariRef.current.clientHeight;
    const safariLeft = safariRef.current.offsetLeft;
    const safariTop = safariRef.current.offsetTop;

    const newX = safariLeft + safariWidth - x;
    const newY = safariTop + safariHeight - y;

    safariRef.current.style.left = `${newX}px`;
    safariRef.current.style.top = `${newY}px`;
  };

  return (
    <div className="select-none text-white">
      <nav className="z-10 flex h-max w-screen flex-row items-center justify-between bg-gradient-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-[500] shadow-sm [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
        <div className="flex flex-row items-center">
          <div className="px-5">
            <AppleIcon />
          </div>

          <ul className="flex h-fit w-fit flex-row py-1 text-center text-[13px] *:flex *:h-[24px] *:items-center *:rounded-[4px] *:px-[11px] *:py-1 *:hover:bg-white/[.2]">
            <li className="px-2 font-bold">Finder</li>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Go</li>
            <li>Window</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="flex flex-row">
          <ul className="flex h-5 w-fit flex-row items-center justify-center gap-2 *:rounded-sm *:p-1 *:hover:bg-white/[.2]">
            <li>
              <WifiIcon />
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <AccountIcon />
            </li>
            <li>
              <MenuIcon />
            </li>
          </ul>

          <div className="px-5 text-center text-[13px] [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
            {getCurrentTime()}
          </div>
        </div>
      </nav>

      <div className="pointer-events-none absolute left-0 top-0 flex h-fit w-screen items-center justify-center pt-12 text-[#252525]">
        <div className="flex w-[344px] gap-2 rounded-2xl bg-[#f6f6f6] p-3 drop-shadow-[0px_0px_10px_rgb(0_0_0_/_30%)]">
          <div className="flex min-w-10 items-center justify-center">
            <img
              src={safari}
              alt="settings-icon"
              className="size-10 drop-shadow-sm"
            />
          </div>
          <div className="w-fit text-xs">
            <p className="font-bold">Title goes here</p>
            <p className="font-medium leading-4">
              This is the description of the notification and it is very long
            </p>
          </div>
          <div className="relative w-8">
            <p className="absolute right-0 top-0 text-xs text-zinc-200">now</p>
          </div>
        </div>
      </div>

      <div
        className="absolute flex h-[660px] w-[860px] resize-y flex-col rounded-xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]"
        ref={safariRef}
      >
        <nav
          className="relative flex h-11 w-full items-center justify-between rounded-t-xl bg-white/90 shadow-sm"
          onMouseDown={() => setDragging(true)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onMouseMove={(e) => handleMove(e)}
        >
          <div className="absolute left-0 flex items-center px-4">
            <div className="flex gap-[6px]">
              <div className="size-[10px] rounded-full bg-gray-400 opacity-75" />
              <div className="size-[10px] rounded-full bg-gray-400 opacity-75" />
              <div className="size-[10px] rounded-full bg-gray-400 opacity-75" />
            </div>

            <div className="px-[18px] *:h-[14px]">
              <SidebarIcon />
            </div>

            <div className="flex gap-4 *:h-[14px]">
              <LeftArrowIcon />
              <RightArrowIcon />
            </div>
          </div>

          <div className="absolute flex h-full w-full justify-center">
            <div className="h-full w-96 p-2">
              <div className="flex h-full w-full justify-center rounded-md bg-[#dbe5eb]">
                <div className="flex items-center">
                  <div className="*:mr-1 *:size-3">
                    <SearchIcon2 />
                  </div>
                  <span className="text-xs font-extralight text-gray-400">
                    Search or enter website name
                  </span>
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

        <div className="h-full w-full rounded-b-xl bg-white/60 p-2"></div>
      </div>

      <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
        <div className="h-[65px] w-fit rounded-2xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]">
          <ul className="flex flex-row justify-between gap-[2px] pt-1">
            <li>
              <div className="h-[60px] pl-1">
                <img src={finder} alt="finder" style={{ width: "50px" }} />
                <div className="h[10px] flex w-full items-center justify-center">
                  <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                </div>
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={apps} alt="apps" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={safari} alt="safari" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={messages} alt="messages" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={mail} alt="mail" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={maps} alt="maps" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px] pr-1">
                <img src={settings} alt="settings" style={{ width: "50px" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center bg-no-repeat">
        <img src={imgWallpaper} alt="wallpaper" />
      </div>
    </div>
  );
}

export default App;
