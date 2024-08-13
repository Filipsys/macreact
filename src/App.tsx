import "./index.css";

import {
  WifiIcon,
  AppleIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
} from "./assets/navIcons";

import imgWallpaper from "./assets/backgrounds/sonoma4k.jpg";
import finder from "./assets/icons/finder.png";
import apps from "./assets/icons/apps.png";
import mail from "./assets/icons/mail.png"; 
import maps from "./assets/icons/maps.png";
import messages from "./assets/icons/messages.png";
import safari from "./assets/icons/safari.png";
import settings from "./assets/icons/settings.png";

// backdrop-blur-[100px] backdrop-brightness-90 484a91 5161b4 5075bb

function App() {
  return (
    <div className="h-screen w-screen text-white select-none">
      <nav className="w-screen h-max font-[500] flex flex-row justify-between items-center shadow-sm z-10 [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)] bg-gradient-to-r from-[#363b87] to-[#3058b6] via-[#3952a7] ">
        <div className="flex flex-row items-center">
          <div className="px-5">
            <AppleIcon />
          </div>

          <ul className="flex flex-row h-fit w-fit text-[13px] text-center  py-1">
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] font-bold px-2 py-1">Finder</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">File</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">Edit</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">View</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">Go</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">Window</li>
            <li className="flex items-center h-[24px] rounded-[4px] hover:bg-white/[.2] px-[11px] py-1">Help</li>
          </ul>
        </div>

        <div className="flex flex-row">
          <ul className="flex flex-row h-5 w-fit items-center justify-center space-x-5">
            <li>
              <WifiIcon />
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <AccountIcon />
            </li>
            <li>
              <MenuIcon />
            </li>
          </ul>

          <div className="text-[13px] text-center  px-5 [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">Mon Jun 5 9:41 AM</div>
        </div>
      </nav>

      

      <div className="w-screen h-fit absolute bottom-0 left-0 flex items-center justify-center pb-1">
        <div className="w-fit h-[65px] backdrop-blur-2xl rounded-2xl border-[1px] border-white/10 backdrop-brightness-[.8]">
          <ul className="flex flex-row justify-between gap-[2px] pt-1">
            <li><div className="h-[60px] pl-1">
              <img src={finder} alt="finder" style={{ width: "50px" }} />
              <div className="w-full h[10px] flex items-center justify-center"><div className="w-[4px] h-[4px] bg-gray-400 opacity-75 rounded-full" /></div>  
            </div>
            </li>
            <li><div className="h-[60px]"><img src={apps} alt="apps" style={{ width: "50px" }} /></div></li>
            <li><div className="h-[60px]"><img src={safari} alt="safari" style={{ width: "50px" }} /></div></li>
            <li><div className="h-[60px]"><img src={messages} alt="messages" style={{ width: "50px" }} /></div></li>
            <li><div className="h-[60px]"><img src={mail} alt="mail" style={{ width: "50px" }} /></div></li>
            <li><div className="h-[60px]"><img src={maps} alt="maps" style={{ width: "50px" }} /></div></li>
            <li><div className="h-[60px] pr-1"><img src={settings} alt="settings" style={{ width: "50px" }} /></div></li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-[-10] h-dvh w-full bg-cover bg-center bg-no-repeat">
        <img src={imgWallpaper} alt="wallpaper" />
      </div>
    </div>
  );
}

export default App;
