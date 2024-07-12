import { Heading, Text, Button, Img } from "./..";
import React from "react";

export default function AccountsRowmoneytagone({
  dynamicproperty2 = "My Balance",
  dynamicproperty3 = "$12,750",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-[0.94rem] p-[1.56rem] sm:p-[1.25rem] bg-white-A700 rounded-[25px]`}
    >
      <Button size="6xl" shape="circle" className="w-[4.38rem] !rounded-[35px]">
        <Img src="images/img_money_tag_1.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[0.31rem]">
        <Text as="p">{dynamicproperty2}</Text>
        <Heading size="3xl" as="h4" className="!text-indigo-600_01">
          {dynamicproperty3}
        </Heading>
      </div>
    </div>
  );
}
