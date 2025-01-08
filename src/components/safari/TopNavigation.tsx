import { SidebarIcon, LeftArrowIcon, RightArrowIcon, UploadIcon, SearchIcon } from "@/assets/safariIcons";
import { WindowControl } from "@components/WindowControl";
import { useState } from "react";

const navigationButtonsEnabled = false;

export const TopNavigation = (props: {
  position: { x: number; y: number };
  setDragging: (arg: boolean) => void;
  setOffset: ({ x, y }: { x: number; y: number }) => void;
  handleMove: (e: React.MouseEvent) => void;
}) => {
  let [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <nav
      className="relative flex h-12 w-full items-center justify-between rounded-t-xl bg-[#3e3938] shadow-sm"
      onMouseDown={(e) => {
        props.setDragging(true);
        props.setOffset({
          x: e.clientX - props.position.x,
          y: e.clientY - props.position.y,
        });
      }}
      onMouseUp={() => props.setDragging(false)}
      onMouseLeave={() => props.setDragging(false)}
      onMouseMove={(e) => props.handleMove(e)}
    >
      <div className="absolute left-0 flex items-center px-4">
        <WindowControl />

        <div className="z-10 px-[12px]">
          <div className="rounded-md p-1 px-2 *:fill-[#bfbab9] hover:bg-white/5">
            <SidebarIcon />
          </div>
        </div>

        <div className="z-10 flex gap-1">
          <div
            className={`rounded-md p-1 px-2 ${navigationButtonsEnabled ? "*:fill-[#bfbab9]" : "*:fill-[#635e5c]"} hover:bg-white/5`}
          >
            <LeftArrowIcon />
          </div>
          <div
            className={`rounded-md p-1 px-2 ${navigationButtonsEnabled ? "*:fill-[#bfbab9]" : "*:fill-[#635e5c]"} hover:bg-white/5`}
          >
            <RightArrowIcon />
          </div>
        </div>
      </div>

      <div className="absolute flex h-full w-full justify-center">
        <div className="h-full w-96 p-2">
          <div
            className="relative flex h-full w-full rounded-md bg-[#302b2a]"
            onClick={() => setIsClicked(!isClicked)}
            style={{
              border: isClicked ? "3px solid #446f96" : "",
            }}
          >
            <input type="text" className="peer z-10 w-full bg-transparent outline-none" />

            <div className="absolute left-0 top-0 flex w-full items-center justify-center px-2 peer-focus-within:justify-start">
              <div className="*:mr-1.5 *:size-3 *:fill-[#999595]">
                <SearchIcon />
              </div>

              <span className="font-base text-sm text-gray-500">Search or enter website name</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 flex gap-5 px-6 *:fill-[#635e5c]">
        <UploadIcon />
        <UploadIcon />
        <UploadIcon />
      </div>
    </nav>
  );
};
