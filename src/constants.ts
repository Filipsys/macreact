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

export const timeDict = {
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export const wallpapers = [
  "./public/backgrounds/sequoia-light.webp",
  "./public/backgrounds/sonoma4k.webp",
  "./public/backgrounds/wallpaper2.webp",
  "./public/backgrounds/sequoia-dark.webp",
];

export const widgetCategoryList = ["All Widgets", "Batteries", "Calendar", "Clock", "Contacts", "Find My", "GitHub"];

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
