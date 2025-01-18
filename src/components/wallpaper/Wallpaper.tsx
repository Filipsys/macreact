import { useContext, useEffect, useRef, useState } from "react";
import { WidgetChoiceMenu } from "@components/wallpaper/widget/WidgetChoiceMenu";
import {
  ContextCategory,
  ContextContainer,
  ContextItem,
  Divider,
  DropdownItem,
  ListenerWrapper,
} from "@components/ContextMenu";
import { mainContext } from "@/main";
import { wallpapers } from "@/constants";

export const Wallpaper = () => {
  const { wallpaper, setWallpaper, windowSize, widgetGridSpaces } = useContext(mainContext);
  const [widgetsPopupVisibility, setWidgetsPopupVisibility] = useState<boolean>(false);
  const [possibleGridSpaces, setPossibleGridSpaces] = useState<[number, number][]>([]);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const gridElementSize = 176;
  const topPadding = 44;
  const leftPadding = 16;
  const bottomPadding = 80;
  const gridGap = 16;

  const handleWallpaperChange = () => {
    setWallpaper(wallpaper < 3 ? wallpaper + 1 : 0);
  };

  useEffect(() => {
    const gridWidth = windowSize[0];
    const gridHeight = windowSize[1];

    const possibleRows = Math.floor(gridWidth / gridElementSize);
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
    <>
      {widgetsPopupVisibility ? (
        <WidgetChoiceMenu
          setWidgetsPopupVisibility={setWidgetsPopupVisibility}
          possibleGridSpaces={possibleGridSpaces}
          setPossibleGridSpaces={setPossibleGridSpaces}
        />
      ) : null}

      {widgetGridSpaces.map(([Element, [left, top]], index) => (
        <div
          style={{
            position: "absolute",
            top: top,
            left: left,
            zIndex: 10,
          }}
          key={`grid-widget-${index}`}
        >
          {Element}
        </div>
      ))}

      <div className="absolute left-0 top-0 h-dvh w-full bg-cover bg-center">
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

        <ListenerWrapper contextMenuRef={contextMenuRef}>
          <ContextContainer contextMenuRef={contextMenuRef}>
            <ContextCategory>
              <ContextItem name="New Folder" />
            </ContextCategory>
            <Divider />
            <ContextCategory>
              <ContextItem name="Get Info" disabled={true} />
              <ContextItem name="Change Wallpaper..." onClick={handleWallpaperChange} />
              <ContextItem name="Edit Widgets..." onClick={() => setWidgetsPopupVisibility(true)} />
            </ContextCategory>
            <Divider />
            <ContextCategory>
              <ContextItem name="Use Stacks" />
              <ContextItem>
                <DropdownItem name="Group Stacks By" />
              </ContextItem>
              <ContextItem name="Show View Options" />
            </ContextCategory>
            <Divider />
            <ContextCategory>
              <ContextItem>
                <DropdownItem name="Import from iPhone" />
              </ContextItem>
            </ContextCategory>
          </ContextContainer>

          <img src={wallpapers[wallpaper]} alt="wallpaper" className="absolute -z-50 h-full w-full object-cover" />
        </ListenerWrapper>
      </div>
    </>
  );
};
