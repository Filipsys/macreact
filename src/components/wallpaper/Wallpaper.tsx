import { useContext } from "react";
import { mainContext } from "@/main";
import { CalendarWidget } from "@components/wallpaper/CalendarWidget";

const wallpapers = [
  "./backgrounds/sequoia-light.webp",
  "./backgrounds/sonoma4k.webp",
  "./backgrounds/wallpaper2.webp",
  "./backgrounds/sequoia-dark.webp",
];

export const Wallpaper = () => {
  const { wallpaper } = useContext(mainContext);

  return (
    <div className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center">
      {wallpapers.map((wallpaper, index) => (
        <img
          src={wallpaper}
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
          <CalendarWidget />

          <div className="size-44 rounded-3xl backdrop-blur-xl backdrop-brightness-[.75]" />
          <div className="col-span-2 rounded-3xl backdrop-blur-xl backdrop-brightness-[.75]" />
        </div>
      </div>

      <img src={wallpapers[wallpaper]} alt="wallpaper" className="h-full w-full object-cover" />
    </div>
  );
};
