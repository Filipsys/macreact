export const DEBUG_MODE = true;

export const debug = (message: string) => {
  if (!DEBUG_MODE) return;

  console.log(`%c[ DEBUG ]`, "color: white; background:green; padding: 1px 3px", `\n${message}`);
};

export const changeTo12Hour = (hour: number) => {
  if (hour > 12) return { hour: hour - 12, pm: true };
  return { hour, pm: false };
};
