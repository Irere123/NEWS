import React from "react";

import "./card.css";

interface CardProps {
  height: string;
  width: string;
  borderRadius?: string;
  borderColor?: string;
  borderSize?: number;
  mx?: string;
  my?: string;
}

export const Card: React.FC<CardProps> = ({
  height,
  width,
  borderSize,
  borderColor = "#000",
  borderRadius = "5",
  mx,
  my,
  children,
  ...props
}) => {
  return (
    <div
      className="card"
      {...props}
      style={{
        borderRadius: `${borderRadius}px`,
        border: borderSize ? `${borderSize}px solid ${borderColor} ` : "",
        maxWidth: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </div>
  );
};
