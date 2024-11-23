import {
  LeftArrowIcon,
  RightArrowIcon,
  SearchIcon as SearchIcon2,
  SidebarIcon,
  UploadIcon
} from "../assets/safariIcons.tsx";
import React, { useContext, useRef, useState } from "react";
import { mainContext } from "../main.tsx";

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

export const Safari = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const safariRef = useRef<HTMLDivElement>(null);

  const { activeApps, setActiveApps, hiddenApps, setHiddenApps } = useContext(mainContext);

  const handleMove = (e: React.MouseEvent) => {
    if (!safariRef.current) return;
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });

    // safariRef.current.style.left = `${position.x}px`;
    // safariRef.current.style.top = `${position.y}px`;
  };

  const closeApp = (app: string) => {
    setActiveApps(activeApps.filter((a) => a !== app));
  };

  const hideApp = (app: string) => {
    setHiddenApps([...hiddenApps, app]);
    setActiveApps(activeApps.filter((a) => a !== app));
  };

  return (
    <div
      className="absolute left-1/2 top-1/2 flex h-[660px] w-[860px] -translate-x-1/2 -translate-y-1/2 resize-y flex-col rounded-xl backdrop-blur-xl backdrop-brightness-[.38] [box-shadow:0px_0px_0px_1px_rgb(122,_120,_120),0px_0px_0px_2px_rgb(32,_41,_38)]"
      style={{ display: activeApps.includes("Safari") ? "flex" : "none" }}
      ref={safariRef}
    >
      <nav
        className="relative flex h-12 w-full items-center justify-between rounded-t-xl bg-[rgb(49,_57,_56)] shadow-sm"
        onMouseDown={(e) => {
          setDragging(true)
          setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
          })
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(e) => handleMove(e)}
      >
        <div className="absolute left-0 flex items-center px-4">
          <div className="z-10 flex gap-[6px] *:size-[10px] *:rounded-full *:transition-colors">
            <div className="bg-red-600 *:size-3" onClick={() => closeApp("Safari")}>
              {/* <CloseButtonIcon /> */}
            </div>
            <div className="bg-yellow-600" onClick={() => hideApp("Safari")} />
            <div className="bg-green-500" />
          </div>

          <div className="z-10 px-[12px]">
            <div className="rounded-md p-1 px-2 hover:bg-white/5 *:fill-gray-300">
              <SidebarIcon />
            </div>
          </div>

          <div className="z-10 flex gap-1">
            <div className="rounded-md p-1 px-2 hover:bg-white/5 *:fill-gray-300">
              <LeftArrowIcon />
            </div>
            <div className="rounded-md p-1 px-2 hover:bg-white/5 *:fill-gray-300">
              <RightArrowIcon />
            </div>
          </div>
        </div>

        <div className="absolute flex h-full w-full justify-center">
          <div className="h-full w-96 p-2">
            <div className="flex h-full w-full justify-center rounded-md bg-[#353130]">
              <div className="flex items-center">
                <div className="*:mr-1.5 *:size-3 *:fill-gray-300">
                  <SearchIcon2 />
                </div>

                <span className="text-sm font-base text-gray-500">Search or enter website name</span>
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

      <div
        className="flex h-full w-full items-center justify-center rounded-b-xl border-[1px] border-t-0 border-[#bbbbbb]/[.09] bg-[#4A4A4A]/[.39] p-2">
        <div className="flex w-4/5 flex-col gap-2 px-16">
          <div className="text-xl font-bold">Favourites</div>

          <div className="mb-8 flex flex-wrap gap-4">
            {bookmarks.map(([name], index) => (
              <div className="flex flex-col items-center gap-2 pb-2" key={`bookmarks-${index}`}>
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
  )
}