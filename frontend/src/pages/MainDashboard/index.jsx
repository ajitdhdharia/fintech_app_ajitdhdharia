import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import MainDashboardColumnbalance from "../../components/MainDashboardColumnbalance";
import MainDashboardRowiconfinderbu from "../../components/MainDashboardRowiconfinderbu";
import Sidebar1 from "../../components/Sidebar1";
import React, { Suspense } from "react";

const data = [
  { deposittext: "Deposit from my Card", datetext: "28 January 2021", pricetext: "-$850" },
  { deposittext: "Deposit Paypal", datetext: "25 January 2021", pricetext: "+$2,500" },
  { deposittext: "Jemi Wilson", datetext: "21 January 2021", pricetext: "+$5,400" },
];

export default function MainDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Main Dashboard - Overview of Your Financial Activities</title>
        <meta
          name="description"
          content="Access your main dashboard to view transactions, accounts, investments, and more. Manage your finances with a comprehensive overview of balances, recent transactions, and weekly activity."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-100 pb-[1.88rem] sm:pb-[1.25rem]">
        {/* sidebar navigation section */}
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-center gap-[1.56rem]">
          {/* header section */}
          <Header />
          <div className="flex w-[93%] flex-col gap-[1.56rem] md:w-full md:p-[1.25rem]">
            {/* cards overview section */}
            <div className="flex items-center gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col gap-[1.06rem] md:self-stretch">
                <div className="flex flex-wrap items-start justify-between gap-[1.25rem]">
                  <Heading as="h1">My Cards</Heading>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Heading size="md" as="h2">
                      See All
                    </Heading>
                  </a>
                </div>
                <div className="flex gap-[1.88rem] md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(2)].map((d, index) => (
                      <MainDashboardColumnbalance
                        balance="Balance"
                        price="$5,756"
                        cardholder="CARD HOLDER"
                        eddycusuma="Eddy Cusuma"
                        validthru="VALID THRU"
                        p12twentytwo="12/22"
                        thirtysevenmillionsevenhundredeightyonethousandtwohundredthirtyfour="3778 **** **** 1234"
                        key={"balanceList" + index}
                        className="bg-indigo-600_01"
                      />
                    ))}
                  </Suspense>
                </div>
              </div>

              {/* recent transactions section */}
              <div className="flex w-[32%] flex-col items-start gap-[1.19rem] md:w-full">
                <Heading as="h3">Recent Transaction</Heading>
                <div className="self-stretch rounded-[25px] bg-white-A700 py-[1.56rem] pl-[1.56rem] pr-[1.50rem] sm:p-[1.25rem]">
                  <div className="flex flex-col gap-[0.63rem]">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <MainDashboardRowiconfinderbu {...d} key={"transactionList" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>

            {/* weekly activity section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[0.94rem] md:self-stretch">
                <Heading as="h4">Weekly Activity</Heading>
                <div className="self-stretch rounded-[25px] bg-white-A700 px-[1.63rem] pb-[1.69rem] pt-[1.63rem] sm:p-[1.25rem]">
                  <div className="flex flex-col items-end gap-[1.25rem]">
                    <div className="flex w-[30%] gap-[1.88rem] md:w-full">
                      <div className="flex w-[45%] items-center gap-[0.63rem] self-end">
                        <div className="h-[0.94rem] w-[0.94rem] self-start rounded-[7px] bg-indigo-200" />
                        <Text size="lg" as="p">
                          Diposit
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-[0.63rem] self-start">
                        <div className="h-[0.94rem] w-[0.94rem] self-end rounded-[7px] bg-indigo-600_01" />
                        <Text size="lg" as="p">
                          Withdraw
                        </Text>
                      </div>
                    </div>
                    <div className="self-stretch">
                      <div className="flex flex-col items-end gap-[0.50rem]">
                        <div className="flex items-center justify-between gap-[1.25rem] self-stretch md:flex-col">
                          <div className="flex flex-col items-center gap-[1.31rem]">
                            <Text size="s" as="p">
                              500
                            </Text>
                            <Text size="s" as="p">
                              400
                            </Text>
                            <Text size="s" as="p">
                              300
                            </Text>
                            <Text size="s" as="p">
                              200
                            </Text>
                            <Text size="s" as="p" className="self-start">
                              100
                            </Text>
                            <Text size="s" as="p" className="self-end">
                              0
                            </Text>
                          </div>
                          <Img
                            src="images/img_group_899.svg"
                            alt="graph image"
                            className="h-[11.63rem] w-[96%] md:w-full"
                          />
                        </div>
                        <div className="mr-[2.31rem] flex w-[89%] flex-wrap justify-between gap-[1.25rem] md:mr-0 md:w-full">
                          <Text size="s" as="p">
                            Sat
                          </Text>
                          <Text size="s" as="p">
                            Sun
                          </Text>
                          <Text size="s" as="p">
                            Mon
                          </Text>
                          <Text size="s" as="p">
                            Tue
                          </Text>
                          <Text size="s" as="p">
                            Wed
                          </Text>
                          <Text size="s" as="p">
                            Thu
                          </Text>
                          <Text size="s" as="p" className="h-[1.00rem] w-[1.00rem]">
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* expense statistics section */}
              <div className="flex w-[32%] flex-col items-start gap-[0.94rem] md:w-full">
                <Heading as="h5">Expense Statistics</Heading>
                <div className="self-stretch rounded-[25px] bg-white-A700 p-[1.94rem] sm:p-[1.25rem]">
                  <div className="relative h-[16.19rem]">
                    <div className="absolute left-[1.25rem] top-[0.00rem] m-auto flex h-[8.06rem] w-[69%] items-center justify-center bg-[url(/public/images/img_group_900.svg)] bg-cover bg-no-repeat px-[2.06rem] pb-[3.44rem] pt-[2.06rem] md:h-auto md:pb-[1.25rem] sm:p-[1.25rem]">
                      <Text
                        size="s"
                        as="p"
                        className="w-[84%] text-center !font-medium leading-[1.13rem] !text-white-A700"
                      >
                        <span className="text-[1.00rem] font-bold text-white-A700">
                          <>
                            30%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Entertainment</span>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0.69rem] left-[0.00rem] m-auto h-[11.81rem] w-[40%] bg-[url(/public/images/img_group_903.svg)] bg-cover bg-no-repeat pb-[4.69rem] pl-[0.94rem] pr-[0.88rem] pt-[4.63rem] md:h-auto md:py-[1.25rem]">
                      <Text size="s" as="p" className="text-center !font-medium leading-[1.13rem] !text-white-A700">
                        <span className="text-[1.00rem] font-bold text-white-A700">
                          <>
                            20%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Investment</span>
                      </Text>
                    </div>
                    <div className="absolute right-[0.00rem] top-[1.75rem] m-auto flex h-[6.38rem] w-[54%] items-center justify-center bg-[url(/public/images/img_group_901.svg)] bg-cover bg-no-repeat pb-[0.38rem] pl-[2.13rem] pr-[1.63rem] pt-[3.44rem] md:h-auto md:pt-[1.25rem] sm:px-[1.25rem]">
                      <Text
                        size="s"
                        as="p"
                        className="w-full text-center !font-medium leading-[1.13rem] !text-white-A700"
                      >
                        <span className="text-[1.00rem] font-bold text-white-A700">
                          <>
                            15%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Bill Expense</span>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0.00rem] right-[12%] m-auto flex w-[44%] flex-col items-center bg-indigo-200 px-[1.44rem] pb-[3.50rem] pt-[1.44rem] md:pb-[1.25rem] sm:p-[1.25rem]">
                      <Text
                        size="s"
                        as="p"
                        className="w-[66%] text-center !font-medium leading-[1.13rem] !text-white-A700 md:w-full md:p-[1.25rem]"
                      >
                        <span className="text-[1.00rem] font-bold text-white-A700">
                          <>
                            35%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Others</span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[1.88rem] md:flex-col">
              {/* quick transfer section */}
              <div className="flex w-[41%] flex-col items-start gap-[1.19rem] md:w-full">
                <Heading as="h6" className="!text-blue_gray-800">
                  Quick Transfer
                </Heading>
                <div className="flex flex-col gap-[1.69rem] self-stretch rounded-[25px] bg-white-A700 px-[1.56rem] py-[2.19rem] sm:p-[1.25rem]">
                  <div className="flex items-center justify-between gap-[1.25rem] sm:flex-col">
                    <div className="flex w-[79%] items-center justify-between gap-[1.25rem] sm:w-full">
                      <div className="flex w-[27%] flex-col items-center gap-[0.81rem]">
                        <Img
                          src="images/img_ellipse_18.png"
                          alt="contact image"
                          className="h-[4.38rem] w-[4.38rem] rounded-[50%]"
                        />
                        <div className="flex flex-col items-center gap-[0.25rem]">
                          <Heading size="s" as="h6" className="!text-indigo-700">
                            Livia Bator
                          </Heading>
                          <Heading size="xs" as="p" className="!text-blue_gray-400">
                            CEO
                          </Heading>
                        </div>
                      </div>
                      <div className="flex w-[30%] flex-col items-center gap-[0.94rem]">
                        <Img
                          src="images/img_ellipse_19.png"
                          alt="contact image"
                          className="h-[4.38rem] w-[4.38rem] rounded-[50%]"
                        />
                        <div className="flex flex-col items-center gap-[0.13rem]">
                          <Text as="p" className="!text-blue_gray-800">
                            Randy Press
                          </Text>
                          <Text size="lg" as="p">
                            Director
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[23%] flex-col gap-[0.88rem]">
                        <Img
                          src="images/img_ellipse_17.png"
                          alt="contact image"
                          className="h-[4.38rem] w-[4.38rem] rounded-[50%]"
                        />
                        <div className="flex flex-col items-center gap-[0.31rem]">
                          <Text as="p" className="!text-blue_gray-800">
                            Workman
                          </Text>
                          <Text size="lg" as="p">
                            Designer
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button shape="circle" className="w-[3.13rem] !rounded-[25px]">
                      <Img src="images/img_arrow_right_blue_gray_400.svg" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-[1.69rem]">
                    <Text as="p">Write Amount</Text>
                    <div className="flex flex-1 items-center justify-between gap-[1.25rem] rounded-[25px] bg-gray-100_04 pl-[1.88rem] sm:pl-[1.25rem]">
                      <Heading size="s" as="h6" className="!text-indigo-700">
                        525.50
                      </Heading>
                      <Button
                        size="2xl"
                        rightIcon={
                          <Img
                            src="images/img_save.svg"
                            alt="save"
                            className="h-[0.06rem] h-[1.50rem] w-[0.06rem] w-[1.50rem]"
                          />
                        }
                        className="min-w-[7.81rem] gap-[0.75rem] rounded-[25px] font-medium sm:px-[1.25rem]"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* balance history section */}
              <div className="flex flex-1 flex-col items-start gap-[1.06rem] md:self-stretch">
                <Heading as="h5">Balance History</Heading>
                <div className="self-stretch rounded-[25px] bg-white-A700 pb-[1.75rem] pl-[1.44rem] pr-[1.56rem] pt-[1.69rem] sm:p-[1.25rem]">
                  <div className="relative h-[13.75rem] md:h-auto">
                    <Img
                      src="images/img_group_gray_100_02.svg"
                      alt="history image"
                      className="mt-[0.44rem] h-[11.56rem] w-[93%]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center sm:relative sm:flex-col">
                      <div className="flex w-[7%] flex-col items-end gap-[1.88rem] sm:w-full">
                        <div className="flex items-center gap-[0.50rem] self-stretch">
                          <Text size="s" as="p">
                            800
                          </Text>
                          <div className="h-[0.06rem] w-[0.38rem] bg-blue_gray-400" />
                        </div>
                        <div className="flex items-center gap-[0.50rem] self-stretch">
                          <Text size="s" as="p">
                            600
                          </Text>
                          <div className="h-[0.06rem] w-[0.38rem] bg-blue_gray-400" />
                        </div>
                        <div className="flex items-center gap-[0.50rem] self-stretch">
                          <Text size="s" as="p">
                            400
                          </Text>
                          <div className="h-[0.06rem] w-[0.38rem] bg-blue_gray-400" />
                        </div>
                        <div className="flex items-center gap-[0.44rem] self-stretch">
                          <Text size="s" as="p">
                            200
                          </Text>
                          <div className="h-[0.06rem] w-[0.38rem] bg-blue_gray-400" />
                        </div>
                        <div className="flex w-[58%] items-center gap-[0.50rem] md:w-full">
                          <Text size="xs" as="p">
                            0
                          </Text>
                          <div className="mb-[0.38rem] h-[0.06rem] w-[0.38rem] self-end bg-blue_gray-400" />
                        </div>
                      </div>
                      <div className="relative ml-[-0.06rem] mt-[0.75rem] flex flex-1 flex-col gap-[0.25rem] sm:ml-0 sm:self-stretch">
                        <Img
                          src="images/img_vector_indigo_600_01.png"
                          alt="vector image"
                          className="h-[11.06rem] object-cover"
                        />
                        <div className="flex w-[90%] flex-col gap-[0.25rem] md:w-full">
                          <div className="flex justify-between gap-[1.25rem]">
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                            <Img src="images/img_group_blue_gray_400.svg" alt="month image" className="h-[0.25rem]" />
                          </div>
                          <div className="flex justify-between gap-[1.25rem] sm:flex-col">
                            <div className="flex w-[19%] flex-wrap justify-between gap-[1.25rem] sm:w-full">
                              <Text size="md" as="p" className="h-[1.06rem] w-[1.13rem] self-start">
                                Jul
                              </Text>
                              <Text size="md" as="p" className="self-end">
                                Aug
                              </Text>
                            </div>
                            <div className="flex w-[68%] flex-wrap justify-between gap-[1.25rem] sm:w-full">
                              <Text size="md" as="p" className="self-end">
                                Sep
                              </Text>
                              <Text size="md" as="p" className="self-start">
                                Oct
                              </Text>
                              <Text size="md" as="p" className="self-start">
                                Nov{" "}
                              </Text>
                              <Text size="md" as="p" className="self-start">
                                Dec
                              </Text>
                              <Text size="md" as="p" className="self-start">
                                Jan
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
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
