import type { Dispatch, SetStateAction } from "react";

export const FullscreenPrompt = (props: { setIsFullscreen: Dispatch<SetStateAction<boolean | null>> }) => (
  <div className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-black">
    <p className="text-white">Would you like to enter fullscreen? (recommended)</p>

    <div className="flex gap-4 *:border *:px-3 *:py-1">
      <button
        type="button"
        className="border-white/20 bg-white text-black"
        onClick={() => {
          props.setIsFullscreen(true);
          document.body.requestFullscreen();
        }}
      >
        Yes
      </button>

      <button
        type="button"
        className="border-white/20 bg-black text-white"
        onClick={() => props.setIsFullscreen(false)}
      >
        No
      </button>
    </div>
  </div>
);
