import React from "react";
import { primaryOrange } from "../../theme/colors";

export default function LogoIcon({
  width = "25px",
  height = "25px",
  fill = primaryOrange
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="m8 1.288 6.842 5.56L12.267 15H3.733L1.158 6.847 8 1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z" />
    </svg>
  );
}
