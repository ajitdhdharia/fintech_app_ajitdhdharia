import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch items-center p-[1.25rem] border-gray-300 border-b border-solid bg-white-A700`}
    >
      <div className="mx-auto flex w-full max-w-[69.38rem] items-center justify-between gap-[1.25rem] md:flex-col">
        <Heading size="4xl" as="h3" className="!text-gray-900 sm:text-[1.50rem]">
          Overview
        </Heading>
        <div className="flex w-[46%] items-center justify-center gap-[1.88rem] md:w-full sm:flex-col">
          <Input
            name="Search Field"
            placeholder={`Search for something`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            prefix={
              <Img
                src="images/img_search_blue_gray_400.svg"
                alt="search"
                className="h-[0.06rem] h-[1.25rem] w-[0.06rem] w-[1.25rem] cursor-pointer"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#888ea2ff" />
              ) : null
            }
            className="flex-grow gap-[0.94rem] rounded-[25px] text-blue_gray-400 sm:px-[1.25rem]"
          />
          <a href="#">
            <Button shape="circle" className="w-[3.13rem] !rounded-[25px]">
              <Img src="images/img_settings_1.svg" />
            </Button>
          </a>
          <a href="#">
            <Button shape="circle" className="w-[3.13rem] !rounded-[25px]">
              <Img src="images/img_002_notification_1.svg" />
            </Button>
          </a>
          <Img src="images/img_ellipse_1.png" alt="profile image" className="h-[3.75rem] w-[3.75rem] rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
