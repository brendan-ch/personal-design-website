import * as React from "react";

function LogoStandalone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 4V1h3v3h-3zM19 4V1h3v3h-3zM22 4V1h3v3h-3zM25 4V1h3v3h-3zM25 7V4h3v3h-3zM25 10V7h3v3h-3zM25 13v-3h3v3h-3zM25 16v-3h3v3h-3zM25 19v-3h3v3h-3zM25 22v-3h3v3h-3zM22 22v-3h3v3h-3zM19 22v-3h3v3h-3zM16 22v-3h3v3h-3zM13 13v-3h3v3h-3zM10 13v-3h3v3h-3zM7 13v-3h3v3H7zM4 13v-3h3v3H4zM4 16v-3h3v3H4zM4 19v-3h3v3H4zM4 22v-3h3v3H4zM4 25v-3h3v3H4zM4 28v-3h3v3H4zM4 31v-3h3v3H4zM7 31v-3h3v3H7zM10 31v-3h3v3h-3zM13 31v-3h3v3h-3z"
        fill="#121212"
      />
    </svg>
  );
}

export default LogoStandalone;