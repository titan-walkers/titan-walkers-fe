import React from "react";

const IconXMark = ({
  width = 8,
  height = 8,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      width={width}
      height={height}
    >
      <path
        d="m4.64 4 3.04 3.04a.453.453 0 0 1-.64.64L4 4.64.96 7.68a.453.453 0 0 1-.64-.64L3.36 4 .32.96A.453.453 0 1 1 .96.32L4 3.36 7.04.32a.453.453 0 1 1 .64.64L4.64 4z"
        fill="#929294"
        opacity="1"
      />
    </svg>
  );
};

export default IconXMark;
