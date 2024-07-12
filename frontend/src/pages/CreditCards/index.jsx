import { Helmet } from "react-helmet";
import { Heading, Button, SelectBox, Img, Text, Input } from "../../components";
import CreditCardsRow from "../../components/CreditCardsRow";
import CreditCardsRow001blockOne from "../../components/CreditCardsRow001blockOne";
import CreditCardsRowcreditcardon from "../../components/CreditCardsRowcreditcardon";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import React, { Suspense } from "react";

const data = [
  {
    dynamicproperty2: "Card Type",
    dynamicproperty3: "Secondary",
    dynamicproperty4: "Bank",
    dynamicproperty5: "DBL Bank",
    dynamicproperty6: "Card Number",
    dynamicproperty7: "**** **** 5600",
    dynamicproperty8: "Namain Card",
    dynamicproperty9: "William ",
    dynamicproperty10: "View Details",
  },
  {
    dynamicproperty2: "Card Type",
    dynamicproperty3: "Secondary",
    dynamicproperty4: "Bank",
    dynamicproperty5: "BRC Bank",
    dynamicproperty6: "Card Number",
    dynamicproperty7: "**** **** 4300",
    dynamicproperty8: "Namain Card",
    dynamicproperty9: "Michel",
    dynamicproperty10: "View Details",
  },
  {
    dynamicproperty2: "Card Type",
    dynamicproperty3: "Secondary",
    dynamicproperty4: "Bank",
    dynamicproperty5: "ABM Bank",
    dynamicproperty6: "Card Number",
    dynamicproperty7: "**** **** 7560",
    dynamicproperty8: "Namain Card",
    dynamicproperty9: "Edward",
    dynamicproperty10: "View Details",
  },
];
const data1 = [
  { blockcardtext: "Block Card", instantlyblocktext: "Instantly block your card" },
  { blockcardtext: "Change Pin Code", instantlyblocktext: "Choose another pin code" },
  { blockcardtext: "Add to Google Pay", instantlyblocktext: "Withdraw without any card" },
  { blockcardtext: "Add to Apple Pay", instantlyblocktext: "Withdraw without any card" },
  { blockcardtext: "Add to Apple Store", instantlyblocktext: "Withdraw without any card" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CreditCardsPage() {
  return (
    <>
      <Helmet>
        <title>Credit Card Management - Organize Your Finances</title>
        <meta
          name="description"
          content="Efficiently manage your credit cards, view balances, and track expenses with our Credit Card Management tool. Add new cards and customize settings for a seamless banking experience."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-100 pb-[1.88rem] sm:pb-[1.25rem]">
        {/* sidebar navigation section */}
        <Sidebar11 />
        <div className="flex flex-1 flex-col items-center gap-[1.69rem]">
          {/* page header section */}
          <Header />
          <div className="flex w-[93%] flex-col gap-[1.50rem] md:w-full md:p-[1.25rem]">
            {/* cards overview section */}
            <div className="flex flex-col items-start gap-[1.00rem]">
              <Heading as="h1">My Cards</Heading>
              <div className="flex gap-[1.88rem] self-stretch md:flex-col">
                <div className="flex w-full flex-col items-center gap-[2.06rem] rounded-[25px] bg-indigo-600_01 pt-[1.50rem] sm:pt-[1.25rem]">
                  <div className="flex w-[86%] flex-col gap-[1.63rem] md:w-full md:p-[1.25rem]">
                    <div className="flex items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start gap-[0.19rem]">
                        <Text size="xs" as="p" className="!text-white-A700">
                          Balance
                        </Text>
                        <Text size="4xl" as="p" className="!text-white-A700">
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chip_card.png"
                        alt="card image"
                        className="h-[2.13rem] w-[2.13rem] object-cover"
                      />
                    </div>
                    <div className="flex w-[76%] justify-between gap-[1.25rem] md:w-full">
                      <div className="flex flex-col items-start gap-[0.25rem]">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          CARD HOLDER
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-[0.25rem]">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          VALID THRU
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[1.25rem] self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient px-[1.50rem] py-[1.25rem] sm:px-[1.25rem]">
                    <Text size="5xl" as="p" className="self-end !text-white-A700">
                      3778 **** **** 1234
                    </Text>
                    <Img src="images/img_contrast.svg" alt="card contrast image" className="h-[1.88rem]" />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[1.81rem] rounded-[25px] bg-indigo-500 pt-[1.50rem] sm:pt-[1.25rem]">
                  <div className="flex w-[86%] items-start justify-between gap-[1.25rem] md:w-full md:p-[1.25rem]">
                    <div className="flex flex-col items-start gap-[0.19rem]">
                      <Text size="xs" as="p" className="!text-white-A700">
                        Balance
                      </Text>
                      <Text size="4xl" as="p" className="!text-white-A700">
                        $5,756
                      </Text>
                    </div>
                    <Img
                      src="images/img_chip_card.png"
                      alt="chip card image"
                      className="h-[2.13rem] w-[2.13rem] object-cover"
                    />
                  </div>
                  <div className="ml-[1.63rem] flex w-[70%] justify-between gap-[1.25rem] self-start md:ml-0 md:w-full md:p-[1.25rem]">
                    <div className="flex flex-col items-start gap-[0.25rem]">
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        CARD HOLDER
                      </Text>
                      <Text size="lg" as="p" className="!text-white-A700">
                        Eddy Cusuma
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-[0.25rem]">
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        VALID THRU
                      </Text>
                      <Text size="lg" as="p" className="!text-white-A700">
                        12/22
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[1.25rem] self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient px-[1.50rem] py-[1.25rem] sm:px-[1.25rem]">
                    <Text size="5xl" as="p" className="self-end !text-white-A700">
                      3778 **** **** 1234
                    </Text>
                    <Img src="images/img_contrast.svg" alt="contrast image" className="h-[1.88rem]" />
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[1.81rem] rounded-[25px] border border-solid border-gray-100_02 bg-indigo-300_02 pt-[1.50rem] sm:pt-[1.25rem]">
                  <div className="flex w-[86%] items-start justify-between gap-[1.25rem] md:w-full md:p-[1.25rem]">
                    <div className="flex flex-col items-start gap-[0.19rem]">
                      <Text size="xs" as="p" className="!text-white-A700">
                        Balance
                      </Text>
                      <Text size="4xl" as="p" className="!text-white-A700">
                        $5,756
                      </Text>
                    </div>
                    <Img
                      src="images/img_chip_card.png"
                      alt="chipcard"
                      className="h-[2.13rem] w-[2.13rem] object-cover"
                    />
                  </div>
                  <div className="ml-[1.63rem] flex w-[70%] justify-between gap-[1.25rem] self-start md:ml-0 md:w-full md:p-[1.25rem]">
                    <div className="flex flex-col items-start gap-[0.25rem]">
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        CARD HOLDER
                      </Text>
                      <Text size="lg" as="p" className="!text-white-A700">
                        Eddy Cusuma
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-[0.25rem]">
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        VALID THRU
                      </Text>
                      <Text size="lg" as="p" className="!text-white-A700">
                        12/22
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[1.25rem] self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient px-[1.50rem] py-[1.25rem] sm:px-[1.25rem]">
                    <Text size="5xl" as="p" className="self-end !text-white-A700">
                      3778 **** **** 1234
                    </Text>
                    <Img src="images/img_contrast.svg" alt="contrast" className="h-[1.88rem]" />
                  </div>
                </div>
              </div>
            </div>

            {/* card expense statistics section */}
            <div className="flex items-center gap-[1.88rem] md:flex-col">
              <div className="flex w-[32%] flex-col items-start gap-[1.06rem] md:w-full">
                <Heading as="h2">Card Expense Statistics</Heading>
                <div className="flex flex-col items-center gap-[0.88rem] self-stretch rounded-[25px] bg-white-A700 px-[1.88rem] pb-[1.69rem] pt-[1.88rem] sm:p-[1.25rem]">
                  <Img
                    src="images/img_group_346_chart.png"
                    alt="chart image"
                    className="h-[11.63rem] w-[65%] object-cover"
                  />
                  <div className="flex w-[86%] flex-col gap-[0.75rem] md:w-full md:flex-row sm:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(2)].map((d, index) => (
                        <CreditCardsRow text1="DBL Bank" text2="BRC Bank" key={"statisticsList" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>

              {/* card list section */}
              <div className="flex flex-1 flex-col items-start gap-[1.19rem] md:self-stretch">
                <Heading as="h3">Card List</Heading>
                <div className="flex flex-col gap-[1.25rem] self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <CreditCardsRowcreditcardon {...d} key={"cardsList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>

            {/* add new card section */}
            <div className="flex items-center gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[1.19rem] md:self-stretch">
                <Heading as="h4">Add New Card</Heading>
                <div className="flex flex-col items-start gap-[1.81rem] self-stretch rounded-[25px] bg-white-A700 px-[1.88rem] pb-[2.38rem] pt-[1.69rem] sm:p-[1.25rem]">
                  <Text as="p" className="w-[94%] leading-[1.75rem] md:w-full md:p-[1.25rem]">
                    Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a
                    Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain
                    cash advances.
                  </Text>
                  <div className="flex flex-col gap-[1.31rem] self-stretch">
                    <div className="flex items-center gap-[1.88rem] md:flex-col">
                      <div className="flex w-full flex-col items-start gap-[0.56rem]">
                        <Text as="p">Card Type</Text>
                        <Input
                          shape="round"
                          name="Card Type Field"
                          placeholder={`Classic`}
                          className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[0.63rem]">
                        <Text as="p">Name On Card</Text>
                        <Input
                          shape="round"
                          name="Name Field"
                          placeholder={`My Cards`}
                          className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[1.88rem] md:flex-col">
                      <div className="flex w-full flex-col items-start gap-[0.63rem]">
                        <Text as="p">Card Number</Text>
                        <Input
                          shape="round"
                          type="password"
                          name="Card Number Field"
                          placeholder={`**** **** **** ****`}
                          className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[0.56rem]">
                        <Text as="p">Expiration Date</Text>
                        <SelectBox
                          shape="round"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                              className="h-[0.06rem] h-[1.50rem] w-[0.06rem] w-[1.50rem]"
                            />
                          }
                          name="Expiration Dropdown"
                          placeholder={`25 January 2025`}
                          options={dropDownOptions}
                          className="gap-[0.06rem] self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <Button size="2xl" className="min-w-[10.00rem] rounded-[9px] font-medium sm:px-[1.25rem]">
                    Add Card
                  </Button>
                </div>
              </div>

              {/* card settings section */}
              <div className="flex w-[32%] flex-col items-start gap-[1.06rem] md:w-full">
                <Heading as="h5">Card Setting</Heading>
                <div className="flex flex-col gap-[1.25rem] self-stretch rounded-[25px] bg-white-A700 py-[1.88rem] pl-[1.88rem] pr-[3.06rem] md:pr-[1.25rem] sm:p-[1.25rem]">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <CreditCardsRow001blockOne {...d} key={"settingsList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
