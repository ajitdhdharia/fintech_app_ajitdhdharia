import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import InvestmentsRowmoneybagof from "../../components/InvestmentsRowmoneybagof";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const data = [
  { totalinvestedtext: "Total Invested Amount", pricetext: "$150,000" },
  { totalinvestedtext: "Number of Investments", pricetext: "1,250" },
  { totalinvestedtext: "Rate of Return", pricetext: "+5.80%" },
];
const tableData = [
  { slNoText: "01.", nameHeaderText: "Trivago", priceHeaderText: "$520", returnHeaderText: "+5%" },
  { slNoText: "02.", nameHeaderText: "Canon", priceHeaderText: "$480", returnHeaderText: "+10%" },
  { slNoText: "03.", nameHeaderText: "Uber Food", priceHeaderText: "$350", returnHeaderText: "-3%" },
  { slNoText: "04.", nameHeaderText: "Nokia", priceHeaderText: "$940", returnHeaderText: "+2%" },
  { slNoText: "05.", nameHeaderText: "Tiktok", priceHeaderText: "$670", returnHeaderText: "-12%" },
];

export default function InvestmentsPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("slNoText", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[0.50rem] pl-[1.88rem] pt-[0.06rem] !font-medium sm:pl-[1.25rem]">
            SL No
          </Text>
        ),
        meta: { width: "7.00rem" },
      }),
      tableColumnHelper.accessor("nameHeaderText", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[0.50rem] pt-[0.06rem] !font-medium">
            Name
          </Text>
        ),
        meta: { width: "8.19rem" },
      }),
      tableColumnHelper.accessor("priceHeaderText", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[0.50rem] !font-medium">
            Price
          </Text>
        ),
        meta: { width: "6.50rem" },
      }),
      tableColumnHelper.accessor("returnHeaderText", {
        cell: (info) => (
          <Text as="p" className="!font-medium !text-green-600">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[0.50rem] pt-[0.06rem] !font-medium">
            Return
          </Text>
        ),
        meta: { width: "6.13rem" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Investment Summary - Track Your Portfolio Performance</title>
        <meta
          name="description"
          content="Stay on top of your investments with our Investment Summary page. Monitor your total invested amount, rate of return, and yearly investment trends to make informed financial decisions."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-100">
        {/* sidebar navigation section */}
        <Sidebar11 />
        <div className="flex flex-1 flex-col items-center gap-[1.94rem]">
          {/* main header section */}
          <Header />
          <div className="flex w-[93%] flex-col gap-[1.63rem] md:w-full md:p-[1.25rem]">
            {/* investment summary section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <InvestmentsRowmoneybagof {...d} key={"investmentList" + index} />
                ))}
              </Suspense>
            </div>

            {/* investment details section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <div className="flex w-full flex-col items-start gap-[1.06rem]">
                <Heading as="h1">Yearly Total Investment</Heading>
                <div className="self-stretch rounded-[25px] bg-white-A700 px-[1.63rem] pb-[1.69rem] pt-[1.63rem] sm:p-[1.25rem]">
                  <div className="flex items-start justify-between gap-[1.25rem] sm:flex-col">
                    <div className="flex flex-col items-end gap-[1.94rem]">
                      <Text size="s" as="p">
                        $40,000
                      </Text>
                      <Text size="s" as="p">
                        $30,000
                      </Text>
                      <Text size="s" as="p">
                        $20,000
                      </Text>
                      <Text size="s" as="p">
                        $10,000
                      </Text>
                      <Text size="s" as="p" className="h-[1.00rem] w-[1.00rem]">
                        $0
                      </Text>
                    </div>
                    <div className="mt-[0.81rem] flex flex-1 flex-col items-center sm:self-stretch">
                      <div className="h-[0.06rem] w-full self-stretch bg-gray-100_02" />
                      <Img
                        src="images/img_statistics.svg"
                        alt="statistics image"
                        className="mt-[0.38rem] h-[10.06rem] w-[92%]"
                      />
                      <div className="mt-[1.38rem] h-[0.06rem] w-full self-stretch bg-gray-100_02" />
                      <div className="mt-[0.44rem] flex flex-wrap justify-between gap-[1.25rem] self-stretch">
                        <Text size="s" as="p">
                          2016
                        </Text>
                        <Text size="s" as="p">
                          2017
                        </Text>
                        <Text size="s" as="p">
                          2018
                        </Text>
                        <Text size="s" as="p">
                          2019
                        </Text>
                        <Text size="s" as="p">
                          2020
                        </Text>
                        <Text size="s" as="p">
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[1.06rem]">
                <Heading as="h2">Monthly Revenue</Heading>
                <div className="flex items-start justify-between gap-[1.25rem] self-stretch rounded-[25px] bg-white-A700 px-[1.63rem] pb-[1.69rem] pt-[1.63rem] sm:flex-col sm:p-[1.25rem]">
                  <div className="flex flex-col items-end gap-[1.94rem]">
                    <Text size="s" as="p">
                      $40,000
                    </Text>
                    <Text size="s" as="p">
                      $30,000
                    </Text>
                    <Text size="s" as="p">
                      $20,000
                    </Text>
                    <Text size="s" as="p">
                      $10,000
                    </Text>
                    <Text size="s" as="p" className="h-[1.00rem] w-[1.06rem]">
                      $0
                    </Text>
                  </div>
                  <div className="mt-[0.81rem] flex-1 sm:self-stretch">
                    <div className="h-[0.06rem] bg-gray-100_02" />
                    <div className="relative mt-[1.56rem] h-[6.94rem]">
                      <div className="absolute left-0 right-0 top-[1.38rem] m-auto flex w-full flex-col gap-[2.94rem]">
                        <div className="h-[0.06rem] bg-gray-100_02" />
                        <div className="h-[0.06rem] bg-gray-100_02" />
                      </div>
                      <Img
                        src="images/img_vector_6.svg"
                        alt="vector six image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[6.94rem] w-full"
                      />
                    </div>
                    <div className="mt-[0.44rem] h-[0.06rem] bg-gray-100_02" />
                    <div className="mt-[2.81rem] h-[0.06rem] bg-gray-100_02" />
                    <div className="mt-[0.44rem] flex flex-wrap justify-between gap-[1.25rem]">
                      <Text size="s" as="p">
                        2016
                      </Text>
                      <Text size="s" as="p">
                        2017
                      </Text>
                      <Text size="s" as="p">
                        2018
                      </Text>
                      <Text size="s" as="p">
                        2019
                      </Text>
                      <Text size="s" as="p">
                        2020
                      </Text>
                      <Text size="s" as="p">
                        2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* personal investments section */}
            <div className="flex gap-[1.88rem] md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[0.94rem] md:self-stretch">
                <Heading as="h3">My Investment</Heading>
                <div className="flex flex-col gap-[0.94rem] self-stretch">
                  <div className="flex items-center rounded-[20px] bg-white-A700 p-[0.94rem] sm:flex-col">
                    <Button size="5xl" shape="round" className="w-[3.75rem] sm:p-[1.25rem]">
                      <Img src="images/img_favorite.svg" />
                    </Button>
                    <div className="ml-[1.25rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        Apple Store
                      </Text>
                      <Text size="lg" as="p">
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="ml-[3.50rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        $54,000
                      </Text>
                      <Text size="lg" as="p">
                        Envestment Value
                      </Text>
                    </div>
                    <div className="ml-[2.75rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-green-600">
                        +16%
                      </Text>
                      <Text size="lg" as="p">
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center rounded-[20px] bg-white-A700 p-[0.94rem] sm:flex-col">
                    <Button size="5xl" shape="round" className="w-[3.75rem] sm:p-[1.25rem]">
                      <Img src="images/img_contrast_indigo_600_01.svg" />
                    </Button>
                    <div className="ml-[1.25rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        Samsung Mobile
                      </Text>
                      <Text size="lg" as="p">
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="ml-[3.50rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-blue_gray-900">
                        $25,300
                      </Text>
                      <Text size="lg" as="p">
                        Envestment Value
                      </Text>
                    </div>
                    <div className="ml-[2.75rem] flex flex-col items-start gap-[0.31rem] sm:ml-0">
                      <Text as="p" className="!font-medium !text-red-700">
                        -4%
                      </Text>
                      <Text size="lg" as="p">
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-[1.25rem] rounded-[20px] bg-white-A700 py-[0.94rem] pl-[0.94rem] pr-[2.25rem] sm:flex-col sm:pr-[1.25rem]">
                    <div className="flex items-center gap-[1.25rem]">
                      <Button size="5xl" shape="round" className="w-[3.75rem]">
                        <Img src="images/img_settings_indigo_600_01_60x60.svg" />
                      </Button>
                      <div className="flex flex-col items-start gap-[0.31rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Tesla Motors
                        </Text>
                        <Text size="lg" as="p">
                          Electric Vehicles
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[45%] justify-between gap-[1.25rem] sm:w-full">
                      <div className="flex flex-col items-start gap-[0.31rem]">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          $8,200
                        </Text>
                        <Text size="lg" as="p">
                          Envestment Value
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-[0.31rem]">
                        <Text as="p" className="!font-medium !text-green-600">
                          +25%
                        </Text>
                        <Text size="lg" as="p">
                          Return Value
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* trending stocks section */}
              <div className="flex w-[41%] flex-col items-start gap-[2.56rem] md:w-full">
                <Heading as="h4">Trending Stock</Heading>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "flex-wrap" }}
                  rowDataProps={{ className: "flex-wrap" }}
                  className="self-stretch rounded-[25px] bg-white-A700"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
