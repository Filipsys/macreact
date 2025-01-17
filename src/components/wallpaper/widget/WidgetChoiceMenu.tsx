import { SearchIcon } from "@/assets/navIcons";
import { ChoiceCategory } from "./ChoiceCategory";
import { useState } from "react";
// import { SuggestionsCategory } from "./SuggestionsCategory";

const widgetCategoryList = ["All Widgets", "Batteries", "Calendar", "Clock", "Contacts", "Find My", "GitHub"];

export const WidgetChoiceMenu = (props: { setWidgetsPopupVisibility: (value: boolean) => void }) => {
  const [currentActiveCategory, setCurrentActiveCategory] = useState<number>(0);

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
            {/* <SuggestionsCategory /> */}

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
