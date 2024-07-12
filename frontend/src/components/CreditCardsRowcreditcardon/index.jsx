import { Text, Button, Img } from "./..";
import React from "react";

export default function CreditCardsRowcreditcardon({
  dynamicproperty2 = "Card Type",
  dynamicproperty3 = "Secondary",
  dynamicproperty4 = "Bank",
  dynamicproperty5 = "DBL Bank",
  dynamicproperty6 = "Card Number",
  dynamicproperty7 = "**** **** 5600",
  dynamicproperty8 = "Namain Card",
  dynamicproperty9 = "William ",
  dynamicproperty10 = "View Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col items-center p-[0.94rem] bg-white-A700 rounded-[20px]`}
    >
      <Button size="5xl" shape="round" className="w-[3.75rem]">
        <Img src="images/img_credit_card_1_indigo_600_01.svg" />
      </Button>
      <div className="ml-[0.94rem] flex flex-col gap-[0.31rem]">
        <Text as="p" className="!font-medium !text-blue_gray-900">
          {dynamicproperty2}
        </Text>
        <Text size="lg" as="p">
          {dynamicproperty3}
        </Text>
      </div>
      <div className="ml-[2.69rem] flex flex-col items-start gap-[0.31rem]">
        <Text as="p" className="!font-medium !text-blue_gray-900">
          {dynamicproperty4}
        </Text>
        <Text size="lg" as="p">
          {dynamicproperty5}
        </Text>
      </div>
      <div className="ml-[2.75rem] flex flex-col gap-[0.31rem]">
        <Text as="p" className="!font-medium !text-blue_gray-900">
          {dynamicproperty6}
        </Text>
        <Text size="lg" as="p">
          {dynamicproperty7}
        </Text>
      </div>
      <div className="ml-[2.94rem] flex flex-col items-start gap-[0.31rem]">
        <Text as="p" className="!font-medium !text-blue_gray-900">
          {dynamicproperty8}
        </Text>
        <Text size="lg" as="p">
          {dynamicproperty9}
        </Text>
      </div>
      <Text size="lg" as="p" className="ml-[2.13rem] !font-medium !text-indigo-500">
        {dynamicproperty10}
      </Text>
    </div>
  );
}
