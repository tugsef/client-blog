import React from "react";
import { cx } from "./utils";
export const PointerLogo = ({
  className,
  ...rest
}: {
  className?: string;
  rest?: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("h-auto", className)}
  >
    <path
      fill="currentColor"
      d="M16 22h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2Zm0-18h4v4a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2ZM3 22h5a1 1 0 0 0 0-2H4v-4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1ZM3 9a1 1 0 0 0 1-1V4h4a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default PointerLogo;

export const LinkArrow = ({ className, ...rest }:{className:string,rest?:string[]}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
