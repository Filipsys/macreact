import { useRef } from "react";
import { AppleIcon } from "@/assets/navIcons";

export const LoadingScreen = () => {
  const loadingScreenRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (!loadingScreenRef.current) return;
    if (!loadingRef.current) return;

    loadingRef.current.style.transition = "width 1.5s";
    loadingRef.current.style.width = "70%";

    setTimeout(() => {
      if (!loadingRef.current) return;

      loadingRef.current.style.transition = "width 2s";
      loadingRef.current.style.width = "100%";

      setTimeout(() => {
        if (!loadingScreenRef.current) return;

        loadingScreenRef.current.style.transition = "opacity 200ms";
        loadingScreenRef.current.style.opacity = "0";

        setTimeout(() => {
          if (!loadingScreenRef.current) return;

          loadingScreenRef.current.style.display = "none";
        }, 200);
      }, 2000);
    }, 1000);
  }, 1000);

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-16 bg-black pt-16"
      ref={loadingScreenRef}
    >
      <div className="*:size-16">
        <AppleIcon />
      </div>

      <div className="relative w-44">
        <div className="absolute h-1 w-44 rounded-sm bg-[#494949]" />
        <div className="absolute h-1 w-0 rounded-sm bg-white" ref={loadingRef} />
      </div>
    </div>
  );
};
