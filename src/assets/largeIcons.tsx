export const LaptopIcon = (props: { laptopColor: string; screenColor: string }) => (
  <svg width="66" height="37" viewBox="0 0 66 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 4V32H1C0.447715 32 0 32.4477 0 33V36C0 36.5523 0.447714 37 0.999999 37H65C65.5523 37 66 36.5523 66 36V33C66 32.4477 65.5523 32 65 32H59V4C59 1.79086 57.2091 0 55 0H11C8.79086 0 7 1.79086 7 4Z"
      fill={props.laptopColor}
    />
    <path d="M10 4V32H56V4C56 3.44772 55.5523 3 55 3H11C10.4477 3 10 3.44772 10 4Z" fill={props.screenColor} />
  </svg>
);
