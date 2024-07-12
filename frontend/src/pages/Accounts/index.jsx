import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";
import AccountsRowmoneytagone from "../../components/AccountsRowmoneytagone";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import React, { Suspense } from "react";

const data = [
  { dynamicproperty2: "My Balance", dynamicproperty3: "$12,750" },
  { dynamicproperty2: "Income", dynamicproperty3: "$5,600" },
  { dynamicproperty2: "Expense", dynamicproperty3: "$3,460" },
  { dynamicproperty2: "Total Saving", dynamicproperty3: "$7,920" },
];

export default function AccountsPage() {
  return (
    <>
      <Helmet>
        <title>Account Overview - Manage Your Financial Health</title>
        <meta
          name="description"
          content="Get a snapshot of your account balances, income, expenses, and total savings. Monitor your last transactions and debit & credit overview to maintain your financial well-being."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-100">
        {/* sidebar navigation section */}
        <Sidebar11 />
        <div className="flex flex-1 flex-col items-center gap-[1.94rem]">
          {/* header controls section */}
          <Header />
          <div className="flex w-[93%] flex-col gap-[1.44rem] md:w-full md:p-[1.25rem]">
            {/* balance overview section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <AccountsRowmoneytagone {...d} key={"financialList" + index} />
                ))}
              </Suspense>
            </div>

            {/* recent transactions section */}
            <div className="flex items-center gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[1.19rem] md:self-stretch">
                <Heading as="h1">Last Transaction</Heading>
                <div className="flex flex-col gap-[0.63rem] self-stretch rounded-[25px] bg-white-A700 p-[1.56rem] sm:p-[1.25rem]">
                  <div className="flex flex-1 items-center justify-between gap-[1.25rem] md:flex-col">
                    <div className="flex items-center sm:flex-col">
                      <Button size="4xl" shape="round" className="w-[3.44rem]">
                        <Img src="images/img_renew_1.svg" />
                      </Button>
                      <div className="ml-[1.56rem] flex flex-col items-start gap-[0.25rem] sm:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Spotify Subscription
                        </Text>
                        <Text size="lg" as="p">
                          25 Jan 2021
                        </Text>
                      </div>
                      <Text as="p" className="ml-[1.94rem] sm:ml-0">
                        Shopping
                      </Text>
                      <Text as="p" className="ml-[2.69rem] sm:ml-0">
                        1234 ****
                      </Text>
                      <Text as="p" className="ml-[2.81rem] sm:ml-0">
                        Pending
                      </Text>
                    </div>
                    <Text as="p" className="!font-medium !text-red-700">
                      -$150
                    </Text>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-[1.25rem] sm:flex-col">
                    <div className="flex items-start gap-[1.56rem]">
                      <Button size="4xl" shape="round" className="w-[3.44rem]">
                        <Img src="images/img_settings_indigo_600_01.svg" />
                      </Button>
                      <div className="flex flex-col items-start gap-[0.38rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Mobile Service
                        </Text>
                        <Text size="lg" as="p">
                          25 Jan 2021
                        </Text>
                      </div>
                    </div>
                    <Text as="p">Service</Text>
                    <div className="flex w-[44%] flex-wrap justify-between gap-[1.25rem] sm:w-full">
                      <Text as="p" className="self-start">
                        1234 ****
                      </Text>
                      <Text as="p" className="self-end">
                        Completed
                      </Text>
                      <Text as="p" className="self-start !font-medium !text-red-700">
                        -$340
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-[1.25rem] md:flex-col">
                    <div className="flex items-center gap-[1.56rem]">
                      <Button size="4xl" shape="round" className="w-[3.44rem]">
                        <Img src="images/img_settings_indigo_600_01_55x55.svg" />
                      </Button>
                      <div className="flex flex-col items-start gap-[0.25rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Emilly Wilson
                        </Text>
                        <Text size="lg" as="p">
                          25 Jan 2021
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[61%] flex-wrap justify-between gap-[1.25rem] md:w-full">
                      <Text as="p" className="self-start">
                        Transfer
                      </Text>
                      <Text as="p" className="self-start">
                        1234 ****
                      </Text>
                      <Text as="p" className="self-end">
                        Completed
                      </Text>
                      <Text as="p" className="self-start !font-medium !text-green-600">
                        +$780
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* card details section */}
              <div className="flex w-[32%] flex-col gap-[1.06rem] md:w-full">
                <div className="flex flex-wrap items-center justify-between gap-[1.25rem]">
                  <Heading as="h2">My Card</Heading>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Heading size="md" as="h3">
                      See All
                    </Heading>
                  </a>
                </div>
                <div className="flex flex-col items-center gap-[2.31rem] rounded-[25px] bg-indigo-600_01 pt-[1.50rem] sm:pt-[1.25rem]">
                  <div className="flex w-[86%] flex-col gap-[1.38rem] md:w-full md:p-[1.25rem]">
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
                  <div className="flex items-center justify-between gap-[1.25rem] self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient py-[1.25rem] pl-[1.63rem] pr-[1.50rem] sm:px-[1.25rem]">
                    <Text size="5xl" as="p" className="self-end !text-white-A700">
                      3778 **** **** 1234
                    </Text>
                    <Img src="images/img_contrast.svg" alt="contrast image" className="h-[1.88rem]" />
                  </div>
                </div>
              </div>
            </div>

            {/* debit credit overview section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[1.19rem] md:self-stretch">
                <Heading as="h4">Debit & Credit Overview</Heading>
                <div className="flex flex-col gap-[1.63rem] self-stretch rounded-[25px] bg-white-A700 px-[1.69rem] pb-[1.63rem] pt-[1.69rem] sm:p-[1.25rem]">
                  <div className="flex justify-between gap-[1.25rem] sm:flex-col">
                    <Text as="p">
                      <span className="text-blue_gray-800_01">$7,560</span>
                      <span className="text-blue_gray-400">&nbsp;Debited &&nbsp;</span>
                      <span className="text-blue_gray-800_01">$5,420 Credited in this Week</span>
                    </Text>
                    <div className="flex w-[24%] justify-center gap-[1.56rem] self-start sm:w-full sm:self-auto">
                      <div className="flex w-full items-center justify-center gap-[0.63rem]">
                        <div className="h-[0.94rem] w-[0.94rem] rounded-[5px] bg-indigo-600_01 shadow-bs" />
                        <Text as="p">Debit</Text>
                      </div>
                      <div className="flex w-full items-center justify-center gap-[0.63rem]">
                        <div className="h-[0.94rem] w-[0.94rem] rounded-[5px] bg-indigo-200" />
                        <Text as="p">Credit</Text>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center gap-[0.75rem]">
                      <div className="flex items-end self-stretch md:flex-col">
                        <div className="h-[8.44rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01" />
                        <div className="ml-[0.63rem] h-[14.63rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[6.63rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[11.63rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[6.38rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[8.69rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[13.25rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[7.69rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[9.38rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[13.38rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[9.88rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[6.56rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                        <div className="ml-[1.88rem] h-[11.19rem] w-[1.88rem] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                        <div className="ml-[0.63rem] h-[13.50rem] w-[1.88rem] rounded-[10px] bg-indigo-200 md:ml-0" />
                      </div>
                      <div className="flex w-[93%] flex-wrap justify-between gap-[1.25rem] md:w-full">
                        <Text size="md" as="p">
                          Sat
                        </Text>
                        <Text size="md" as="p">
                          Sun
                        </Text>
                        <Text size="md" as="p">
                          Mon
                        </Text>
                        <Text size="md" as="p">
                          Tue
                        </Text>
                        <Text size="md" as="p">
                          Wed
                        </Text>
                        <Text size="md" as="p">
                          Thu
                        </Text>
                        <Text size="md" as="p" className="h-[1.06rem] w-[1.06rem]">
                          Fri
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* invoices section */}
              <div className="flex w-[32%] flex-col items-start gap-[1.19rem] md:w-full">
                <Heading as="h5">Invoices Sent</Heading>
                <div className="flex flex-col gap-[1.31rem] self-stretch rounded-[25px] bg-white-A700 px-[1.56rem] pb-[1.94rem] pt-[1.88rem] sm:p-[1.25rem]">
                  <div className="flex flex-1 items-center gap-[1.25rem]">
                    <Button size="5xl" shape="round" className="w-[3.75rem]">
                      <Img src="images/img_apple_2_1.svg" />
                    </Button>
                    <div className="flex flex-1 items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start gap-[0.31rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Apple Store
                        </Text>
                        <Text size="lg" as="p">
                          5h ago
                        </Text>
                      </div>
                      <Heading size="s" as="h6" className="mt-[0.69rem] !text-indigo-600_01">
                        $450
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-[1.25rem]">
                    <div className="flex items-center gap-[1.25rem]">
                      <Button size="5xl" shape="round" className="w-[3.75rem]">
                        <Img src="images/img_settings_indigo_600_01_55x55.svg" />
                      </Button>
                      <div className="flex flex-col items-start gap-[0.44rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Michael
                        </Text>
                        <Text size="lg" as="p">
                          2 days ago
                        </Text>
                      </div>
                    </div>
                    <Heading size="s" as="h6" className="!text-indigo-600_01">
                      $160
                    </Heading>
                  </div>
                  <div className="flex flex-1 items-center gap-[1.25rem]">
                    <Button size="5xl" shape="round" className="w-[3.75rem]">
                      <Img src="images/img_vector.svg" />
                    </Button>
                    <div className="flex flex-1 items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start gap-[0.38rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Playstation
                        </Text>
                        <Text size="lg" as="p">
                          5 days ago
                        </Text>
                      </div>
                      <Heading size="s" as="h6" className="mt-[0.69rem] !text-indigo-600_01">
                        $1085
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-[1.25rem]">
                    <Button size="5xl" shape="round" className="w-[3.75rem]">
                      <Img src="images/img_settings_indigo_600_01_55x55.svg" />
                    </Button>
                    <div className="flex flex-1 items-center justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start gap-[0.44rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          William
                        </Text>
                        <Text size="lg" as="p">
                          10 days ago
                        </Text>
                      </div>
                      <Heading size="s" as="h6" className="!text-indigo-600_01">
                        $90
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
