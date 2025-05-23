import { useContext, useRef, useState } from "react";
import { TopNavigation } from "@components/safari/TopNavigation";
import { Bookmark } from "@components/safari/Bookmark";
import { appsTabsDict, bookmarks } from "@/constants";
import { mainContext } from "@/main";

import type { MouseEvent } from "react";

export const Safari = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const { activeApps, setCurrentActiveApp } = useContext(mainContext);
  const safariRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent): void => {
    if (!safariRef.current) return;
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });

    // safariRef.current.style.left = `${position.x}px`;
    // safariRef.current.style.top = `${position.y}px`;
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 z-20 flex h-[600px] w-[860px] -translate-x-1/2 -translate-y-1/2 resize-y flex-col rounded-xl [box-shadow:0px_0px_0px_1px_rgb(122,120,120),0px_0px_0px_2px_rgb(32,41,38)] backdrop-blur-xl backdrop-brightness-[.4]"
      style={{ display: activeApps.includes("Safari") ? "flex" : "none" }}
      ref={safariRef}
      onClick={() => setCurrentActiveApp(["Safari", appsTabsDict.Safari])}
      onKeyUp={() =>
        setCurrentActiveApp(["Safari", ["File", "Edit", "View", "History", "Bookmarks", "Develop", "Window", "Help"]])
      }
    >
      <TopNavigation position={position} setDragging={setDragging} setOffset={setOffset} handleMove={handleMove} />

      <div className="flex h-full w-full items-center justify-center rounded-b-xl border border-t-0 border-[#bbbbbb]/[.09] bg-[#4A4A4A]/[.39] p-2">
        <div className="flex w-4/5 flex-col gap-2 px-16">
          <div className="text-xl font-bold">Favourites</div>

          <div className="mb-8 flex flex-wrap gap-4">
            {bookmarks.map((name, index) => (
              <Bookmark name={name} index={index} key={`bookmark-${name}`} />
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
  );
};
