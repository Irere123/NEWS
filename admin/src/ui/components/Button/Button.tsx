import React from "react";

import "./button.css";

interface ButtonProps {
  type: "button" | "submit";
  size?: "large" | "medium" | "small" | "extra-small";
  colorText?: string;
  borderSize?: number;
  disabled?: boolean;
  fontSize?: string;
  borderColor?: string;
  backgroundColor?: string;
  variant?: "circle" | "rounded" | "square";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  borderSize,
  fontSize = "18",
  borderColor = "#000",
  size = "medium",
  variant = "rounded",
  backgroundColor = "transparent",
  colorText = "#000",
  type,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={["button", `button--${size}`, `button--${variant}`].join(" ")}
      style={{
        backgroundColor,
        color: colorText,
        border: borderSize ? `${borderSize}px solid ${borderColor}` : "0px",
        fontSize: `${fontSize}px`,
      }}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
