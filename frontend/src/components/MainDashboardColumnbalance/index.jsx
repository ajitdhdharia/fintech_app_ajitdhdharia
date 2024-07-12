import { Img, Text } from "./..";
import React from "react";

export default function MainDashboardColumnbalance({
  balance = "Balance",
  price = "$5,756",
  cardholder = "CARD HOLDER",
  eddycusuma = "Eddy Cusuma",
  validthru = "VALID THRU",
  p12twentytwo = "12/22",
  thirtysevenmillionsevenhundredeightyonethousandtwohundredthirtyfour = "3778 **** **** 1234",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-[1.50rem] gap-[1.88rem] sm:pt-[1.25rem] rounded-[25px]`}
    >
      <div className="flex w-[86%] items-start justify-between gap-[1.25rem]">
        <div className="flex flex-col items-start gap-[0.13rem]">
          <Text size="xs" as="p" className="!font-lato !text-white-A700">
            {balance}
          </Text>
          <Text size="4xl" as="p" className="!text-white-A700">
            {price}
          </Text>
        </div>
        <Img src="images/img_chip_card.png" alt="cardchipimage" className="h-[2.13rem] w-[2.13rem] object-cover" />
      </div>
      <div className="ml-[1.63rem] flex w-[70%] justify-between gap-[1.25rem] self-start">
        <div className="flex flex-col items-start gap-[0.25rem]">
          <Text size="xs" as="p" className="!text-white-A700_b2">
            {cardholder}
          </Text>
          <Text size="lg" as="p" className="!text-white-A700">
            {eddycusuma}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-[0.25rem]">
          <Text size="xs" as="p" className="!text-white-A700_b2">
            {validthru}
          </Text>
          <Text size="lg" as="p" className="!text-white-A700">
            {p12twentytwo}
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[1.25rem] self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient px-[1.50rem] py-[1.25rem] sm:px-[1.25rem]">
        <Text size="5xl" as="p" className="self-end !text-white-A700">
          {thirtysevenmillionsevenhundredeightyonethousandtwohundredthirtyfour}
        </Text>
        <Img src="images/img_contrast.svg" alt="securitychipimage" className="h-[1.88rem]" />
      </div>
    </div>
  );
}
