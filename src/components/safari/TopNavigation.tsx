import { SidebarIcon, LeftArrowIcon, RightArrowIcon, UploadIcon, SearchIcon } from "../../assets/safariIcons";
import { WindowControl } from "../WindowControl";

export const TopNavigation = (props: {
  position: { x: number; y: number };
  setDragging: (arg: boolean) => void;
  setOffset: ({ x, y }: { x: number; y: number }) => void;
  handleMove: (e: React.MouseEvent) => void;
}) => (
  <nav
    className="relative flex h-12 w-full items-center justify-between rounded-t-xl bg-[rgb(49,_57,_56)] shadow-sm"
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
        <div className="rounded-md p-1 px-2 *:fill-gray-300 hover:bg-white/5">
          <SidebarIcon />
        </div>
      </div>

      <div className="z-10 flex gap-1">
        <div className="rounded-md p-1 px-2 *:fill-gray-300 hover:bg-white/5">
          <LeftArrowIcon />
        </div>
        <div className="rounded-md p-1 px-2 *:fill-gray-300 hover:bg-white/5">
          <RightArrowIcon />
        </div>
      </div>
    </div>

    <div className="absolute flex h-full w-full justify-center">
      <div className="h-full w-96 p-2">
        <div className="flex h-full w-full justify-center rounded-md bg-[#353130]">
          <div className="flex items-center">
            <div className="*:mr-1.5 *:size-3 *:fill-gray-300">
              <SearchIcon />
            </div>

            <span className="font-base text-sm text-gray-500">Search or enter website name</span>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute right-0 flex gap-3 px-4">
      <UploadIcon />
      <UploadIcon />
      <UploadIcon />
    </div>
  </nav>
);
