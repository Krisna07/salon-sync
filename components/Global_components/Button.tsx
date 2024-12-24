"use client";
import React from "react";
import { twMerge } from "tw-merge";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "accent";
  size?: "small" | "medium" | "large";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center focus:outline-none transition-colors duration-200 rounded-md leading-4";

const variantStyles = {
  primary: "bg-primary-700 text-light hover:bg-primary-900 ",
  secondary: "bg-secondary-500 text-white hover:bg-secondary-600 ",
  danger: "bg-red-500 text-white hover:bg-red-600 ",
  accent: "bg-accent-500 text-white hover:bg-accent-600 ",
};

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const disabledStyles = "opacity-50 cursor-not-allowed";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}) => {
  const classes = twMerge(
    clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      disabled && disabledStyles,
      className
    )
  );

  return (
    <button className={classes} {...props} aria-disabled={disabled}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
