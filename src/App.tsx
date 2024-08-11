import "./index.css";

import {
  WifiIcon,
  AppleIcon,
  BatteryIcon,
  SearchIcon,
  ControlIcon,
} from "./assets/navIcons";

import imgWallpaper from "./assets/backgrounds/sonoma4k.jpg";
import finder from "./assets/icons/finder.png";
import mail from "./assets/icons/mail.png"; 
import maps from "./assets/icons/maps.png";
import messages from "./assets/icons/messages.png";
import safari from "./assets/icons/safari.png";
import settings from "./assets/icons/settings.png";

function App() {
  return (
    <div className="h-screen w-screen text-white">
      <nav className="w-screen h-10 font-[500] flex flex-row justify-between items-center shadow-sm z-10 backdrop-blur-3xl backdrop-brightness-95 [text-shadow:_0_2px_2px_rgb(0_0_0_/_30%)]">
        <div className="flex flex-row">
          <div className="px-5">
            <AppleIcon />
          </div>

          <ul className="flex flex-row h-5 w-fit text-[14px] text-center space-x-5">
            <li className="font-bold">Finder</li>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Go</li>
            <li>Window</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="flex flex-row">
          <ul className="flex flex-row h-5 w-fit text-sm text-center space-x-5">
            <li>
              <BatteryIcon />
            </li>
            <li>
              <WifiIcon />
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <ControlIcon />
            </li>
          </ul>

          <div className="text-[15px] text-center px-6">Mon 9:41 AM</div>
        </div>
      </nav>

      <div className="w-screen h-20 absolute bottom-0 left-0 flex items-center justify-center">
        <div className="w-fit backdrop-blur-2xl rounded-2xl border-2 border-white/10 backdrop-brightness-90">
          <ul className="flex flex-row justify-between">
            <li><img src={finder} alt="finder" style={{ width: "64px" }} /></li>
            {/* <li>Apps</li> */}
            <li><img src={safari} alt="safari" style={{ width: "64px" }} /></li>
            <li><img src={messages} alt="messages" style={{ width: "64px" }} /></li>
            <li><img src={mail} alt="mail" style={{ width: "64px" }} /></li>
            <li><img src={maps} alt="maps" style={{ width: "64px" }} /></li>
            <li><img src={settings} alt="settings" style={{ width: "64px" }} /></li>
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
