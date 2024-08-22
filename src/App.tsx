import "./index.css";

import {
  WifiIcon,
  AppleIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
} from "./assets/navIcons";

import imgWallpaper from "./assets/backgrounds/sonoma4k.webp";
import finder from "./assets/icons/finder.webp";
import apps from "./assets/icons/apps.webp";
import mail from "./assets/icons/mail.webp";
import maps from "./assets/icons/maps.webp";
import messages from "./assets/icons/messages.webp";
import safari from "./assets/icons/safari.webp";
import settings from "./assets/icons/settings.webp";

// backdrop-blur-[100px] backdrop-brightness-90 484a91 5161b4 5075bb

function App() {
  return (
    <div className="h-screen w-screen select-none text-white">
      <nav className="z-10 flex h-max w-screen flex-row items-center justify-between bg-gradient-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-[500] shadow-sm [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
        <div className="flex flex-row items-center">
          <div className="px-5">
            <AppleIcon />
          </div>

          <ul className="flex h-fit w-fit flex-row py-1 text-center text-[13px]">
            <li className="flex h-[24px] items-center rounded-[4px] px-2 py-1 font-bold hover:bg-white/[.2]">
              Finder
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              File
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              Edit
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              View
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              Go
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              Window
            </li>
            <li className="flex h-[24px] items-center rounded-[4px] px-[11px] py-1 hover:bg-white/[.2]">
              Help
            </li>
          </ul>
        </div>

        <div className="flex flex-row">
          <ul className="flex h-5 w-fit flex-row items-center justify-center gap-2">
            <li>
              <div className="rounded-sm p-1 hover:bg-white/[.2]">
                <WifiIcon />
              </div>
            </li>
            <li>
              <div className="rounded-sm p-1 hover:bg-white/[.2]">
                <SearchIcon />
              </div>
            </li>
            <li>
              <div className="rounded-sm p-1 hover:bg-white/[.2]">
                <AccountIcon />
              </div>
            </li>
            <li>
              <div className="rounded-sm p-1 hover:bg-white/[.2]">
                <MenuIcon />
              </div>
            </li>
          </ul>

          <div className="px-5 text-center text-[13px] [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
            Mon Jun 5 9:41 AM
          </div>
        </div>
      </nav>

      <div className="pointer-events-none absolute left-0 top-0 flex h-fit w-screen items-center justify-center pt-12 text-[#252525]">
        <div className="flex w-[344px] gap-2 rounded-2xl bg-[#f6f6f6] p-3 drop-shadow-[0px_0px_10px_rgb(0_0_0_/_30%)]">
          <div className="flex min-w-10 items-center justify-center">
            <img
              src={safari}
              alt="settings-icon"
              className="size-10 drop-shadow-sm"
            />
          </div>
          <div className="w-fit text-xs">
            <p className="font-bold">Title goes here</p>
            <p className="font-medium leading-4">
              This is the description of the notification and it is very long
            </p>
          </div>
          <div className="relative w-8">
            <p className="absolute right-0 top-0 text-xs text-zinc-200">now</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
        <div className="h-[65px] w-fit rounded-2xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]">
          <ul className="flex flex-row justify-between gap-[2px] pt-1">
            <li>
              <div className="h-[60px] pl-1">
                <img src={finder} alt="finder" style={{ width: "50px" }} />
                <div className="h[10px] flex w-full items-center justify-center">
                  <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                </div>
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={apps} alt="apps" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={safari} alt="safari" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={messages} alt="messages" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={mail} alt="mail" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px]">
                <img src={maps} alt="maps" style={{ width: "50px" }} />
              </div>
            </li>
            <li>
              <div className="h-[60px] pr-1">
                <img src={settings} alt="settings" style={{ width: "50px" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute left-0 top-0 z-[-10] h-dvh w-full bg-cover bg-center bg-no-repeat">
        <img src={imgWallpaper} alt="wallpaper" />
      </div>
    </div>
  );
}

export default App;
