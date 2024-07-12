import React from "react";

const sizes = {
  "3xl": "text-[1.56rem] font-semibold md:text-[1.44rem] sm:text-[1.31rem]",
  "2xl": "text-[1.38rem] font-semibold sm:text-[1.13rem]",
  xl: "text-[1.25rem] font-semibold sm:text-[1.06rem]",
  "4xl": "text-[1.75rem] font-semibold md:text-[1.63rem] sm:text-[1.44rem]",
  s: "text-[1.00rem] font-bold sm:text-[0.81rem]",
  md: "text-[1.06rem] font-semibold sm:text-[0.88rem]",
  xs: "text-[0.94rem] font-bold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
