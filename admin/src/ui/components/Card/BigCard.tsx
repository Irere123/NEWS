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

export const BigCard: React.FC<CardProps> = ({
  height,
  width,
  borderSize = 1,
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
        border: `${borderSize}px solid ${borderColor}`,
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};
