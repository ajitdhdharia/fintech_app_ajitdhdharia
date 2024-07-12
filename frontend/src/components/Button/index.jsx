import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs",
    indigo_700: "bg-indigo-700 shadow-xs text-white-A700",
    indigo_600_01: "bg-indigo-600_01 text-white-A700",
    gray_100_04: "bg-gray-100_04",
  },
};
const sizes = {
  "2xl": "h-[3.13rem] px-[1.50rem] text-[1.00rem]",
  "4xl": "h-[3.44rem] px-[0.81rem]",
  sm: "h-[1.88rem] px-[0.56rem]",
  "6xl": "h-[4.38rem] px-[1.25rem]",
  "3xl": "h-[3.13rem] px-[0.75rem]",
  "5xl": "h-[3.75rem] px-[1.06rem]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "3xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["2xl", "4xl", "sm", "6xl", "3xl", "5xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "indigo_700", "indigo_600_01", "gray_100_04"]),
};

export { Button };
