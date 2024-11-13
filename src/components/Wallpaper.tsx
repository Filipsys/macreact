// import React, { useEffect, useRef } from "react";
import imgWallpaper from "../assets/backgrounds/sonoma4k.webp";

// const wallpapers: [] = [
//   ["assets/backgrounds/sonoma4k.webp", "Sonoma"],
//   ["assets/backgrounds/sonoma4k.webp", "Sonoma"],
//   ["assets/backgrounds/sonoma4k.webp", "Sonoma"],
//   ["assets/backgrounds/sonoma4k.webp", "Sonoma"],
// ];

export const Wallpaper = () => {
  // const [currentWallpaper, setCurrentWallpaper] = React.useState(0);
  // const wallpaperRef = useRef<HTMLDivElement>(null);
  // const contextMenuRef = useRef<HTMLDivElement>(null);

  // const handleRightClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //
  //   const { clientX, clientY } = e;
  //   const contextMenu = contextMenuRef.current;
  //   if (!contextMenu) return;
  //
  //   contextMenu.style.display = "block";
  //   contextMenu.style.left = `${clientX}px`;
  //   contextMenu.style.top = `${clientY}px`;
  //
  //   document.addEventListener("click", () => {
  //     contextMenu.style.display = "none";
  //     document.removeEventListener("click", () => {});
  //   });
  // }

  return (
    <div
      className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center"
      // ref={wallpaperRef}
      // onContextMenu={(e) => handleRightClick(e)}
    >
      <div className="absolute left-0 top-0 z-50 mt-6">
        <div className="grid grid-cols-2 m-4 gap-4 grid-rows-2">
          <div className="size-44 rounded-3xl bg-zinc-950/20 backdrop-blur-lg flex flex-col justify-center items-center p-6">
            <p className="font-bold text-2xl">
              <span>Wed</span> <span className="text-gray-300">Nov</span>
            </p>
            <p className="font-bold text-8xl">13</p>
          </div>
          <div className="size-44 rounded-3xl bg-zinc-950/20 backdrop-blur-lg" />
          <div className="rounded-3xl bg-zinc-950/20 backdrop-blur-lg col-span-2" />
        </div>
      </div>

      <img src={imgWallpaper} alt="wallpaper" className="h-full w-full object-cover" />
    </div>
  );
}