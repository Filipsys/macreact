import { useContext, useEffect, useRef, useState } from "react";
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
  const widgetsRef = useRef<HTMLDivElement>(null);
  const [possibleGridSpaces, setPossibleGridSpaces] = useState<[number, number][]>([]);
  const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const widgetsDiv = widgetsRef.current;
    if (!widgetsDiv) throw new Error("Cannot find ref");

    const window = widgetsDiv.getBoundingClientRect();
    setWindowSize([window.width, window.height]);
  }, []);

  useEffect(() => {
    const gridWidth = windowSize[0];
    const gridHeight = windowSize[1];
    const gridElementSize = 176;
    const topPadding = 44;
    const leftPadding = 16;
    const bottomPadding = 80;
    const gridGap = 16;

    const possibleRows = Math.floor(gridWidth / gridElementSize); // TODO: Add grid gap
    const possibleColumns = Math.floor(gridHeight / gridElementSize);

    const positionsArray: [number, number][] = [];
    for (let widthIndex = 0; widthIndex <= possibleRows; widthIndex++) {
      /*
        Check if next index can fit on the wallpaper with spare space
        | widthIndex * gridElementSize - amount of widgets on screen
        | widthIndex * gridGap         - gaps between widgets
        | leftPadding * 2              - left and right padding between all the elements
        | gridElementSize              - the widget width itself
       */
      if (widthIndex * gridElementSize + widthIndex * gridGap + leftPadding * 2 + gridElementSize >= gridWidth)
        continue;

      for (let heightIndex = 0; heightIndex <= possibleColumns; heightIndex++) {
        if (
          heightIndex * gridElementSize + heightIndex * gridGap + topPadding + bottomPadding + gridElementSize >=
          gridHeight
        )
          continue;

        positionsArray.push([
          widthIndex * gridElementSize + widthIndex * gridGap + leftPadding,
          heightIndex * gridElementSize + heightIndex * gridGap + topPadding,
        ]);
      }
    }

    setPossibleGridSpaces(positionsArray);
  }, [windowSize]);

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

      <div className="absolute left-0 top-0 z-50 h-full w-full" ref={widgetsRef}>
        {possibleGridSpaces.map(([left, top], index) => (
          <div
            style={{
              position: "absolute",
              top: top,
              left: left,
            }}
            key={`grid-space-${index}`}
          >
            <CalendarWidget />
          </div>
        ))}
      </div>

      <img src={wallpapers[wallpaper]} alt="wallpaper" className="h-full w-full object-cover" />
    </div>
  );
};
