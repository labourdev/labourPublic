import React from "react";

const SmallElipse = () => {
  return (
    <div>
      <svg
        width="45"
        height="44"
        viewBox="0 0 45 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.3"
          cx="22.4987"
          cy="22"
          r="21.75"
          fill="url(#paint0_linear_1463_5066)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1463_5066"
            x1="5.62366"
            y1="7.75"
            x2="44.2487"
            y2="39.625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F36211" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SmallElipse;
