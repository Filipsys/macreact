export const DEBUG_MODE = true;

export const debug = (message: string) => {
  if (!DEBUG_MODE) return;

  console.log(`%c[ DEBUG ]`, "color: white; background:green; padding: 1px 3px", `\n${message}`);
};
