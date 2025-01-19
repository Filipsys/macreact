import { useContext, useEffect, useState } from "react";
import { WidgetChoiceMenu } from "@components/wallpaper/widget/WidgetChoiceMenu";
import { ContextCategory, ContextContainer, ContextItem, Divider, DropdownItem } from "@components/ContextMenu";
import { mainContext } from "@/main";
import { wallpapers, gridData } from "@/constants";

export const Wallpaper = () => {
  const { wallpaper, setWallpaper, windowSize, widgetGridSpaces } = useContext(mainContext);
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0 });
  const [widgetsPopupVisibility, setWidgetsPopupVisibility] = useState<boolean>(false);
  const [possibleGridSpaces, setPossibleGridSpaces] = useState<[number, number][]>([]);

  const width = 10;
  const height = 10;

  const handleWallpaperChange = () => {
    setWallpaper(wallpaper < 3 ? wallpaper + 1 : 0);
  };

  useEffect(() => {
    const gridWidth = windowSize[0];
    const gridHeight = windowSize[1];

    const possibleRows = Math.floor(gridWidth / gridData.gridElementSize);
    const possibleColumns = Math.floor(gridHeight / gridData.gridElementSize);

    const positionsArray: [number, number][] = [];
    for (let widthIndex = 0; widthIndex <= possibleRows; widthIndex++) {
      /*
        Check if next index can fit on the wallpaper with spare space
        | widthIndex * gridData.gridElementSize - amount of widgets on screen
        | widthIndex * gridData.gridGap         - gaps between widgets
        | leftPadding * 2                       - left and right padding between all the elements
        | gridData.gridElementSize              - the widget width itself
       */
      if (
        widthIndex * gridData.gridElementSize +
          widthIndex * gridData.gridGap +
          gridData.leftPadding * 2 +
          gridData.gridElementSize >=
        gridWidth
      )
        continue;

      for (let heightIndex = 0; heightIndex <= possibleColumns; heightIndex++) {
        if (
          heightIndex * gridData.gridElementSize +
            heightIndex * gridData.gridGap +
            gridData.topPadding +
            gridData.bottomPadding +
            gridData.gridElementSize >=
          gridHeight
        )
          continue;

        positionsArray.push([
          widthIndex * gridData.gridElementSize + widthIndex * gridData.gridGap + gridData.leftPadding,
          heightIndex * gridData.gridElementSize + heightIndex * gridData.gridGap + gridData.topPadding,
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

      <div
        className="absolute left-0 top-0 h-dvh w-full bg-cover bg-center"
        onContextMenu={(e) => {
          e.preventDefault();
          console.log(width, height);
          setContextMenuState({ visible: true, width: width, height: height });
        }}
      >
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

        {contextMenuState.visible ? (
          <ContextContainer width={width} height={height}>
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
        ) : null}

        <img src={wallpapers[wallpaper]} alt="wallpaper" className="absolute -z-50 h-full w-full object-cover" />
      </div>
    </>
  );
};
