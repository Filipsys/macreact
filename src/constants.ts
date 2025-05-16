import finder from "@/assets/icons/finder.webp";
import apps from "@/assets/icons/apps.webp";
import safari from "@/assets/icons/safari.webp";
import mail from "@/assets/icons/mail.webp";
import maps from "@/assets/icons/maps.webp";
import messages from "@/assets/icons/messages.webp";
import settings from "@/assets/icons/settings.webp";

import type { JSX } from "react/jsx-runtime";

export const taskbarApps = [
  ["Finder", finder],
  ["Apps", apps],
  ["Safari", safari],
  ["Mail", mail],
  ["Maps", maps],
  ["Messages", messages],
  ["Settings", settings],
];

export interface MainContext {
  activeApps: string[];
  setActiveApps: (apps: string[]) => void;
  hiddenApps: string[];
  setHiddenApps: (apps: string[]) => void;
  wallpaper: number;
  setWallpaper: (wallpaperNumber: number) => void;
  windowSize: [number, number];
  setWindowSize: ([width, height]: [number, number]) => void;
  widgetGridSpaces: [JSX.Element, [number, number]][];
  setWidgetGridSpaces: (widgetGridSpaces: [JSX.Element, [number, number]][]) => void;
  currentActiveApp: [string, string[]];
  setCurrentActiveApp: ([appName, appTabs]: [string, string[]]) => void;
  lastUsedApps: string[];
  setLastUsedApps: (apps: string[]) => void;
  contextMenuIsOpen: boolean;
  setContextMenuIsOpen: (value: boolean) => void;
  dbLoaded: boolean;
  setDbLoaded: (value: boolean) => void;
  isUnfocused: boolean;
  setIsUnfocused: (value: boolean) => void;
}

export interface Widget {
  widgetName: string;
  widgetDescription: string;
  size: "small" | "medium" | "large";
  component?: JSX.Element;
}

export const appsTabsDict: { [key: string]: string[] } = {
  Finder: ["File", "Edit", "View", "Go", "Window", "Help"],
  Safari: ["File", "Edit", "View", "History", "Bookmarks", "Develop", "Window", "Help"],
};

export const appleButtonDropdownValues = [
  ["About This Mac"],
  ["System Settings...", "App Store..."],
  ["Recent Items"],
  ["Force Quit..."],
  ["Sleep", "Restart...", "Shut Down..."],
  ["Lock Screen", "Log Out [USERNAME]..."],
];

export const appTabDropdownValues = {
  Finder: {
    Finder: [
      ["About Finder"],
      ["Settings..."],
      ["Empty Bin..."],
      ["Services"],
      ["Hide Finder", "Hide Other", "Show All"],
    ],
    File: [
      [
        "New Finder Window",
        "New Folder",
        "New Folder with Selection",
        "New Smart Folder",
        "New Tab",
        "Open",
        "Open With",
        "Close Window",
      ],
      ["Get Info", "Rename", "Compress", "Duplicate", "Make alias", "Quick look [...]", "Print"],
      ["Share"],
      ["Show Original", "Add to sidebar"],
      ["Move to bin", "Eject"],
      ["Tags"],
      ["Find"],
    ],
    Edit: [
      ["Undo move of [...]", "Redo"],
      ["Cut", "Copy", "Paste", "Select All"],
      ["Show Clipboard"],
      ["Autofill", "Start Dictation", "Emojis & Symbols"],
    ],
    View: [
      ["as Icon", "as Lists", "as Columns", "as Gallery"],
      ["Use Groups", "Sort By", "Clean Up", "Clean Up By"],
      ["Show Tab Bar", "Show All Tabs"],
      ["Hide Sidebar", "Show Preview"],
      ["Hide Toolbar", "Hide Path Bar", "Show Status Bar"],
      ["Customise Toolbar..."],
      ["Show View Options", "Show Preview Options"],
      ["Enter Fullscreen"],
    ],
    Go: [
      ["Back", "Forward", "Enclosing Folder"],
      [
        "Recents",
        "Documents",
        "Desktop",
        "Downloads",
        "Home",
        "Computer",
        "Airdrop",
        "Network",
        "iCloud Drive",
        "Shared",
        "Applications",
        "Utilities",
      ],
      ["Recent Folders"],
      ["Go to Folder...", "Connet to Server..."],
    ],
    Window: [
      ["Minimise", "Zoom", "Fill", "Centre"],
      ["Move & Resize", "Full-Screen TIle"],
      ["Remove Window From Set", "Cycle Through Windows", "Show Progress Window"],
      ["Bring All to Front"],
      ["Show Previous Tab", "Show Next Tab", "Move Tab to New Window", "Merge All Windows"],
      ["[USERNAME]"],
    ],
    Help: [["Mac User Guide", "Tips For Your Mac"]],
  },
  Safari: {
    Test: [["Test"]],
  },
};

export const timeDict = {
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export const widgetCategoryList = [
  ["All Widgets", 0],
  ["Batteries", 1],
  ["Calendar", 2],
  ["Clock", 3],
  ["Contacts", 4],
  ["Find My", 5],
  ["GitHub", 6],
] as [string, number][];

export const bookmarks = [
  "Apple",
  "iCloud",
  "Google",
  "Facebook",
  "Twitter",
  "Instagram",
  "Spotify",
  "Netflix",
  "YouTube",
];

export const wallpapers = [
  "./backgrounds/sequoia-light.webp",
  "./backgrounds/sonoma4k.webp",
  "./backgrounds/wallpaper2.webp",
  "./backgrounds/sequoia-dark.webp",
];

export const gridData = {
  gridElementSize: 176,
  topPadding: 44,
  leftPadding: 16,
  bottomPadding: 80,
  gridGap: 16,
};

export const globalVariablesList = [
  "wallpaperIndex",
  "activeApps",
  "hiddenApps",
  "currentActiveApp",
  "windowSize",
  "contextMenuIsOpen",
];

export const globalVariableDefaults = {
  wallpaperIndex: 0,
  windowSize: [0, 0],
  activeApps: [],
  hiddenApps: [],
  lastUsedApps: ["Finder"],
  currentActiveApp: ["Finder", ["File", "Edit", "View", "Go", "Window", "Help"]],
  contextMenuIsOpen: false,
};
