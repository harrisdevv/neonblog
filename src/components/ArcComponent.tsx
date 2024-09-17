import React from "react";

const ArcComponent = ({ width, height }: { width: number; height: number }) => {
  const viewBoxSize = Math.min(width, height); // Maintain aspect ratio

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle Arc */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "#ff0080", stopOpacity: 0.2}} />
          {/* <stop offset="0%" style={{ stopColor: "#ff0080", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "#800080", stopOpacity: 0.3 }} /> */}
        </linearGradient>
      </defs>
      <g transform={`rotate(180, ${viewBoxSize / 2}, ${viewBoxSize / 2})`}>
        <path
          fill="url(#grad1)"
          d={`M${viewBoxSize / 2},${viewBoxSize / 8} 
              A${viewBoxSize / 2.5},${viewBoxSize / 2.5} 0 0,1 
              ${viewBoxSize * 0.875},${viewBoxSize / 2} 
              L${viewBoxSize * 0.7},${viewBoxSize / 2} 
              A${viewBoxSize / 4},${viewBoxSize / 4} 0 0,0 
              ${viewBoxSize / 2},${viewBoxSize * 0.3} Z`}
        />
      </g>
    </svg>
  );
};

export default ArcComponent;
