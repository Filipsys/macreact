import "./index.css";

import imgWallpaper from "./assets/wallpaper2.jpeg";

function App() {
  return (
    <div className="h-screen w-screen text-white">
      <nav className="w-screen h-6 font-medium flex flex-row justify-between bg-gradient-to-b from-[#1f2328] to-[#222a35] border-t-2 border-t-[#38383c] drop-shadow-[0px 5px 4px #000000]">
        <div className="flex flex-row">
          <div className="text-sm text-center px-5">A</div>

          <ul className="flex flex-row h-5 w-fit text-[14.5px] text-center space-x-5">
            <li className="font-extrabold">Finder</li>
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
            <li>Wifi</li>
            <li>ScreenCast</li>
            <li>Battery</li>
          </ul>

          <div className="text-[15px] text-center px-6">Mon 9:41 AM</div>

          <ul className="flex flex-row h-5 w-fit text-sm text-center space-x-5 pr-5">
            <li>Search</li>
            <li>Siri</li>
            <li>Settings</li>
          </ul>
        </div>
      </nav>

      <div className="absolute top-0 left-0 z-[-10] h-dvh w-full bg-cover bg-center bg-no-repeat">
        <img src={imgWallpaper} alt="wallpaper" />
      </div>
    </div>
  );
}

export default App;
