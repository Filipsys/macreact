import { mainContext } from "@/main";
import { TopNavigation } from "@components/safari/TopNavigation";
import { Bookmark } from "@components/safari/Bookmark";
import React, { useContext, useRef, useState } from "react";

const bookmarks = ["Apple", "iCloud", "Google", "Facebook", "Twitter", "Instagram", "Spotify", "Netflix", "YouTube"];

export const Safari = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const safariRef = useRef<HTMLDivElement>(null);
  const { activeApps, setCurrentActiveApp } = useContext(mainContext);

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

  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 flex h-[600px] w-[860px] -translate-x-1/2 -translate-y-1/2 resize-y flex-col rounded-xl backdrop-blur-xl backdrop-brightness-[.2] [box-shadow:0px_0px_0px_1px_rgb(122,_120,_120),0px_0px_0px_2px_rgb(32,_41,_38)]"
      style={{ display: activeApps.includes("Safari") ? "flex" : "none" }}
      ref={safariRef}
      onClick={() =>
        setCurrentActiveApp(["Safari", ["File", "Edit", "View", "History", "Bookmarks", "Develop", "Window", "Help"]])
      }
    >
      <TopNavigation position={position} setDragging={setDragging} setOffset={setOffset} handleMove={handleMove} />

      <div className="flex h-full w-full items-center justify-center rounded-b-xl border-[1px] border-t-0 border-[#bbbbbb]/[.09] bg-[#4A4A4A]/[.39] p-2">
        <div className="flex w-4/5 flex-col gap-2 px-16">
          <div className="text-xl font-bold">Favourites</div>

          <div className="mb-8 flex flex-wrap gap-4">
            {bookmarks.map((name, index) => (
              <Bookmark name={name} index={index.toString()} key={`bookmark-nr-${index}`} />
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
