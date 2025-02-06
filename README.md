## TODO tasks

### High priority

- [x] Add app closing and hiding functionality to `WindowControl.tsx` component (most likely using `useContext()`).
- [x] Add SF Pro font.
- [x] Important states store inside ~~local storage.~~ [Dexie](https://dexie.org), a lightweight indexedDB wrapper that seems good for my use case.
- [x] Try adding react compiler to the project.
- [x] Clear out linting errors from RC, mostly refs. Switch out refs for ternary operators where possible.
- [ ] Migrate to Tailwind v4 (Shouldn't be that hard).

### Medium priority

- [ ] Fix and optimise window dragging.
- [x] Add [React Scan](https://github.com/aidenybai/react-scan) to website to improve debugging.
- [ ] Add logic and styling to the Safari search bar.
- [ ] Fix bottom apps navbar popup styling.
- [ ] Fix top navbar background colours.
- [x] Add a widget grid system.
- [x] Make an option for adding widgets.
- [x] Widgets select window.
- [ ] Context menu for widgets.
- [x] Make top taskbar change upon app focus.
- [ ] Fix top taskbar tabs active pseudoclass styling.
- [ ] Add context menus to top taskbar tabs.
- [ ] Fix dynamically added tailwind classes.
- [ ] Create a battery widget using the battery API.
- [x] Make only one context menu open on the screen. (Currently only works by clicking off, on the element it was instanciated on)
- [x] Add a feature for automatic page load in prod
- [x] Migrate React Scan to a dev dependency or disable it in production.

### Low priority

- [ ] Change hardcoded wallpapers amount in `ContextMenu.tsx`.
- [x] Add `@` aliases to project.
- [x] Fix date day set to one ahead.
- [x] Add date to the wallpaper date widget.
- [x] Add disabled state to context buttons and dropdowns.
- [ ] Add tabs feature into the safari app.
- [x] Add mobile & touchscreen website disable feature.
- [ ] Add icons to Safari bookmarks.
- [x] Fix window control to show icons on div hover, not circle element hovers.
- [x] Make current time change every minute.
- [x] Add dropdown icon to the context menu. ~~and dropdown functionality~~
- [x] Make a separate file with all the config data.
- [x] Fix z-index on Safari being under widgets.
- [x] Fix window control close icon to be more opaque.
- [x] Fix disabled buttons in Safari changing background on hover.
- [ ] Animate widgets window on exit.
- [ ] Fix "Delete widget" button & context menu position.
- [ ] Fix open context menu state to listen on topmost div.
- [x] Disable context menu buttons which don't yet have a behaviour hooked to them.
- [ ] Add battery widget icons (aka laptop and headphones icons).
- [x] Added errors to debug command.
- [ ] Check out the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) which could possibly save device resources while website while hidden.
- [ ] Fix context menu re-appearing on left click
