import { Text, Button, Img } from "./..";
import React from "react";

export default function MainDashboardRowiconfinderbu({
  deposittext = "Deposit from my Card",
  datetext = "28 January 2021",
  pricetext = "-$850",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-[1.06rem]`}>
      <Button size="4xl" shape="circle" className="w-[3.44rem] !rounded-[27px]">
        <Img src="images/img_iconfinder_busi.svg" />
      </Button>
      <div className="flex items-start gap-[0.81rem] self-end">
        <div className="flex flex-col items-start gap-[0.31rem]">
          <Text as="p" className="!font-medium !text-blue_gray-600">
            {deposittext}
          </Text>
          <Text size="lg" as="p">
            {datetext}
          </Text>
        </div>
        <Text as="p" className="mt-[0.63rem] !font-medium !text-red-700">
          {pricetext}
        </Text>
      </div>
    </div>
  );
}
