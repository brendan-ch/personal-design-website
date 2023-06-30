import * as React from "react";

function HamburgerNotification(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 4H1V2h24v2zM31 17.5H1v-2h30v2zM31 30H1v-2h30v2z"
        fill="#121212"
      />
      <path d="M32 4a3 3 0 11-6 0 3 3 0 016 0z" fill="#121212" />
    </svg>
  );
}

export default HamburgerNotification;