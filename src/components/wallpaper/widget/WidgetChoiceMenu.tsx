import { SearchIcon } from "@/assets/navIcons";
import { useContext, useState } from "react";
import { AddWidgetIcon } from "@/assets/windowControlIcons";
import { ChoiceCategory } from "@components/wallpaper/widget/ChoiceCategory";
import { CalendarWidget } from "@components/wallpaper/widget/CalendarWidget";
import { timeDict, widgetCategoryList } from "@/constants";
import { mainContext } from "@/main";

const AddWidgetComponent = () => (
  <div className="absolute -left-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#6bd45f] opacity-0 transition-opacity group-hover:opacity-100">
    <AddWidgetIcon />
  </div>
);

export const WidgetChoiceMenu = (props: {
  setWidgetsPopupVisibility: (value: boolean) => void;
  possibleGridSpaces: [number, number][];
  setPossibleGridSpaces: (value: [number, number][]) => void;
}) => {
  const [currentActiveCategory, setCurrentActiveCategory] = useState<number>(0);
  const { widgetGridSpaces, setWidgetGridSpaces } = useContext(mainContext);
  const date = new Date();

  const nextPossibleWidgetPosition = () => {
    const currentPossiblePositions = [...props.possibleGridSpaces];

    if (currentPossiblePositions.length === widgetGridSpaces.length) throw new Error("Can't hold more widgets");

    const filteredPositions = currentPossiblePositions.filter((position, index) => {
      if (!widgetGridSpaces[index]) return true;

      const [x1, y1] = widgetGridSpaces[index][1];
      const [x2, y2] = position;

      return !(x1 === x2 && y1 === y2);
    });

    return filteredPositions[0];
  };

  return (
    <div className="pointer-events-none z-30 flex h-full w-full items-end justify-center overflow-hidden">
      <div className="animate-popup pointer-events-auto flex h-2/3 w-3/4 flex-col rounded-t-3xl border border-black/20 backdrop-blur-xl backdrop-brightness-[.70]">
        <div className="flex w-full flex-grow">
          <div className="h-full w-1/3 border-r-[1px] border-white/20 p-4">
            <div className="pb-4">
              <div className="flex items-center gap-2 rounded-md border-b-[1px] border-white/20 bg-white/10 px-2 py-1.5 text-sm text-white/30">
                <SearchIcon />

                <p>Search widgets</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {widgetCategoryList.map((element: string, index: number) => (
                <div
                  className={`flex items-center gap-2 rounded-xl p-2 text-sm ${currentActiveCategory == index ? "bg-white/20" : ""}`}
                  key={`widget-list-category-${index}`}
                  onClick={() => setCurrentActiveCategory(index)}
                >
                  <div className="size-7 rounded-md bg-white" />

                  <p>{element}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full flex-grow p-4">
            <ChoiceCategory
              categoryName="Batteries"
              widgets={[
                {
                  widgetName: "Status",
                  widgetDescription: "View the status of your Mac and connected Bluetooth accessories.",
                  size: "small",
                },
                {
                  widgetName: "Status",
                  widgetDescription: "View the status of your Mac and connected Bluetooth accessories.",
                  size: "medium",
                },
                {
                  widgetName: "Status",
                  widgetDescription: "View the status of your Mac and connected Bluetooth accessories.",
                  size: "small",
                },
              ]}
            />

            <ChoiceCategory
              categoryName="Calendar"
              widgets={[
                {
                  widgetName: "Date",
                  widgetDescription: "Track the current date.",
                  size: "small",
                  component: (
                    <div
                      className="group flex size-24 flex-col items-center justify-center rounded-xl bg-[#2e2e2e] drop-shadow-md"
                      onClick={() =>
                        setWidgetGridSpaces([
                          ...widgetGridSpaces,
                          [<CalendarWidget />, [nextPossibleWidgetPosition()[0], nextPossibleWidgetPosition()[1]]],
                        ])
                      }
                    >
                      <AddWidgetComponent />

                      <p className="text-[0.9rem] font-bold">
                        <span className="text-[#ff453a]">{timeDict.days[date.getDay()]}</span>{" "}
                        <span className="text-[#a1a1a1]">{timeDict.months[date.getMonth()]}</span>
                      </p>

                      <p className="font-SFProRounded text-[3.6rem] font-bold text-[#dfdfdf] [line-height:1]">
                        {date.getDate().toString().padStart(2, "0")}
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between border-t-[1px] border-white/20 p-4">
          <p className="text-sm">Drag a widget to place it on the desktop or the Notification Centre...</p>

          <div className="rounded-md bg-blue-500 px-5 py-1.5" onClick={() => props.setWidgetsPopupVisibility(false)}>
            <p className="text-sm">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};
