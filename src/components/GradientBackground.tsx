import React from "react";

// Define your props interface to include 'bottom'
interface GradientBackgroundProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

export const GradientBackgroundBluePurple: React.FC<
  GradientBackgroundProps
> = ({ top, left, right, bottom, width, height }) => (
  <>
    <div
      className={`absolute ${top} ${left} ${right} ${bottom} w-${width} h-${height} bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl delay-200`}
    ></div>
  </>
);

export const GradientBackgroundPinkPurple: React.FC<
  GradientBackgroundProps
> = ({ top, left, right, bottom, width, height }) => (
  <>
    <div
      className={`absolute ${top} ${left} ${right} ${bottom} w-${width} h-${height} bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-50 blur-3xl animate-pulse`}
    ></div>
  </>
);
