import safari from "../assets/icons/safari.webp";
import { useState } from "react";

export const Notification = () => {
  const [notificationIsActive] = useState(false);

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 flex h-fit w-screen items-center justify-center pt-12 text-[#252525]"
      style={{ display: notificationIsActive ? "block" : "none" }}
    >
      <div className="flex w-[344px] gap-2 rounded-2xl bg-[#f6f6f6] p-3 drop-shadow-[0px_0px_10px_rgb(0_0_0_/_30%)]">
        <div className="flex min-w-10 items-center justify-center">
          <img src={safari} alt="settings-icon" className="size-10 drop-shadow-sm" />
        </div>
        <div className="w-fit text-xs">
          <p className="font-bold">Title goes here</p>
          <p className="font-medium leading-4">This is the description of the notification and it is very long</p>
        </div>
        <div className="relative w-8">
          <p className="absolute right-0 top-0 text-xs text-zinc-200">now</p>
        </div>
      </div>
    </div>
  )
}