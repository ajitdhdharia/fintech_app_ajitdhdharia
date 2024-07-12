import React from "react";

const sizes = {
  "5xl": "text-[1.38rem] font-normal sm:text-[1.13rem]",
  xs: "text-[0.75rem] font-normal",
  lg: "text-[0.94rem] font-normal",
  s: "text-[0.81rem] font-normal",
  "3xl": "text-[1.13rem] font-medium sm:text-[0.94rem]",
  "4xl": "text-[1.25rem] font-normal sm:text-[1.06rem]",
  xl: "text-[1.00rem] font-normal sm:text-[0.81rem]",
  md: "text-[0.88rem] font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
