import { Heading, Text, Button, Img } from "./..";
import React from "react";

export default function InvestmentsRowmoneybagof({
  totalinvestedtext = "Total Invested Amount",
  pricetext = "$150,000",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full gap-[0.94rem] p-[1.56rem] sm:p-[1.25rem] bg-white-A700 rounded-[25px]`}
    >
      <Button size="6xl" shape="circle" className="w-[4.38rem] !rounded-[35px]">
        <Img src="images/img_money_bag_of_dollars.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[0.44rem]">
        <Text as="p">{totalinvestedtext}</Text>
        <Heading size="xl" as="h5" className="!text-indigo-600_01">
          {pricetext}
        </Heading>
      </div>
    </div>
  );
}
