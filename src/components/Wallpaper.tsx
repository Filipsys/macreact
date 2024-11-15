// import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { mainContext } from "../main.tsx";

const wallpapers = [
  "src/assets/backgrounds/sequoia-light.jpg",
  "src/assets/backgrounds/sonoma4k.webp",
  "src/assets/backgrounds/wallpaper2.webp",
  "src/assets/backgrounds/sequoia-dark.jpg",
];

export const Wallpaper = () => {
  const { values }: any = useContext(mainContext);

  return (
    <div className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center">
      {wallpapers.map((_wallpaper, index) => (
        <img
          src={wallpapers[index]}
          alt="preloaded-img"
          key={`preloaded-img-${index}`}
          style={{
            position: "absolute",
            width: "0px",
            height: "0px",
          }}
        />
      ))}

      <div className="absolute left-0 top-0 z-50 mt-6">
        <div className="m-4 grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex size-44 flex-col items-center justify-center rounded-3xl p-6 backdrop-blur-xl backdrop-brightness-[.70]">
            <p className="text-2xl font-bold">
              <span>Wed</span> <span className="text-gray-300">Nov</span>
            </p>
            <p className="text-8xl font-bold">13</p>
          </div>
          <div className="size-44 rounded-3xl backdrop-blur-xl backdrop-brightness-[.70]" />
          <div className="col-span-2 rounded-3xl backdrop-blur-xl backdrop-brightness-[.70]" />
        </div>
      </div>

      <img src={wallpapers[values.wallpaper]} alt="wallpaper" className="h-full w-full object-cover" />
    </div>
  );
}