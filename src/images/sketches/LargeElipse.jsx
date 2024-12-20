import React from "react";

const LargeElipse = () => {
  return (
    <div>
      <svg
        width="120"
        height="119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.2"
          cx="59.9993"
          cy="59.75"
          r="59.25"
          fill="url(#paint0_linear_1463_5064)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1463_5064"
            x1="53.6243"
            y1="-32.5"
            x2="67.1243"
            y2="113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#038DBE" />
            <stop offset="1" stopColor="#F7FDFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LargeElipse;
