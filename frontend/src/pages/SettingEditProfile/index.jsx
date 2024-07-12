import { Helmet } from "react-helmet";
import { Button, Input, Text, SelectBox, Img, Heading } from "../../components";
import MegaMenu1 from "../../components/MegaMenu1";
import Sidebar11 from "../../components/Sidebar11";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingEditProfilePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Edit Your Profile - Update Personal Information</title>
        <meta
          name="description"
          content="Manage your profile settings by updating your personal information such as name, email, and address. Ensure your account details are current for a personalized banking experience."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full items-start justify-center bg-gray-100">
        {/* sidebar navigation section */}
        <Sidebar11 />

        {/* header section */}
        <div className="flex flex-1 flex-col items-center gap-[1.94rem]">
          <header className="relative flex items-center justify-center gap-[1.88rem] self-stretch border-b border-solid border-gray-300 bg-white-A700 p-[1.25rem] md:flex-col">
            <ul className="flex items-center gap-[30.13rem]">
              <li>
                <a href="#" className="cursor-pointer sm:text-[1.50rem]">
                  <Heading size="4xl" as="h3" className="!text-gray-900 hover:font-normal">
                    Services
                  </Heading>
                </a>
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-[0.94rem] rounded-[25px] bg-gray-100_03 px-[0.94rem] pb-[0.88rem] pt-[0.94rem]">
                  <Img
                    src="images/img_search_blue_gray_400.svg"
                    alt="search icon"
                    className="h-[1.25rem] w-[1.25rem]"
                  />
                  <Text size="lg" as="p" className="cursor-pointer hover:text-gray-900">
                    Search for something
                  </Text>
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
            </ul>
            <a href="#">
              <Button shape="circle" className="w-[3.13rem] !rounded-[25px] md:p-[1.25rem]">
                <Img src="images/img_settings_1.svg" />
              </Button>
            </a>
            <a href="#">
              <Button shape="circle" className="w-[3.13rem] !rounded-[25px] md:p-[1.25rem]">
                <Img src="images/img_002_notification_1.svg" />
              </Button>
            </a>
            <Img src="images/img_ellipse_1.png" alt="profile image" className="h-[3.75rem] w-[3.75rem] rounded-[50%]" />
          </header>

          {/* profile settings section */}
          <div className="flex w-[93%] flex-col gap-[3.19rem] rounded-[25px] bg-white-A700 px-[1.88rem] pb-[1.88rem] pt-[2.25rem] md:w-full sm:gap-[1.56rem] sm:p-[1.25rem]">
            <div className="flex flex-col items-start">
              <div className="relative z-[1] flex w-[38%] items-start justify-between gap-[1.25rem] md:w-full">
                <div className="flex w-[28%] flex-col items-center gap-[0.50rem]">
                  <Text as="p" className="!font-medium !text-indigo-600_01">
                    Edit Profile
                  </Text>
                  <div className="h-[0.19rem] w-full self-stretch rounded-tl-[1px] rounded-tr-[1px] bg-indigo-600_01" />
                </div>
                <Text as="p" className="!font-medium">
                  Preferences
                </Text>
                <Text as="p" className="!font-medium">
                  Security
                </Text>
              </div>
              <div className="relative mt-[-0.06rem] h-[0.06rem] w-full self-stretch bg-gray-300" />
            </div>
            <div className="flex items-start justify-between gap-[1.25rem] md:flex-col">
              <div className="flex w-[13%] justify-center md:w-full">
                <div className="flex w-full items-center justify-center">
                  <Img
                    src="images/img_ellipse_28.png"
                    alt="avatar image"
                    className="h-[8.13rem] w-[8.13rem] rounded-[50%]"
                  />
                  <Button
                    size="sm"
                    shape="circle"
                    className="relative mb-[1.00rem] ml-[-1.75rem] w-[1.88rem] self-end !rounded-[15px]"
                  >
                    <Img src="images/img_group_194.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex w-[82%] flex-col items-end gap-[1.88rem] md:w-full">
                <div className="flex flex-col gap-[1.31rem] self-stretch">
                  <div className="flex gap-[1.81rem] md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Your Name</Text>
                      <Input
                        shape="round"
                        name="Name Input"
                        placeholder={`Charlene Reed `}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">User Name</Text>
                      <Input
                        shape="round"
                        name="Username Input"
                        placeholder={`Charlene Reed `}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[1.81rem] md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Email</Text>
                      <Input
                        shape="round"
                        name="Email Input"
                        placeholder={`user@gmail.com `}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Password</Text>
                      <Input
                        shape="round"
                        type="password"
                        name="Password Input"
                        placeholder={`**********`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[1.81rem] md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Date of Birth</Text>
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown_blue_gray_400.svg"
                            alt="arrow_down"
                            className="h-[0.00rem] h-[0.38rem] w-[0.00rem] w-[0.75rem]"
                          />
                        }
                        name="Birthdate Dropdown"
                        placeholder={`25 January 1990`}
                        options={dropDownOptions}
                        className="gap-[0.06rem] self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Present Address</Text>
                      <Input
                        shape="round"
                        name="Address Input"
                        placeholder={`San Jose, California, USA`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-[1.81rem] md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Permanent Address</Text>
                      <Input
                        shape="round"
                        name="Permanent Input"
                        placeholder={`San Jose, California, USA`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[0.56rem]">
                      <Text as="p">City</Text>
                      <Input
                        shape="round"
                        name="City Input"
                        placeholder={`San Jose`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-[1.81rem] md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[0.63rem]">
                      <Text as="p">Postal Code</Text>
                      <Input
                        shape="round"
                        name="Postal Code Input"
                        placeholder={`45962`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[0.56rem]">
                      <Text as="p">Country</Text>
                      <Input
                        shape="round"
                        name="Country Input"
                        placeholder={`USA`}
                        className="self-stretch border border-solid border-gray-300 sm:pr-[1.25rem]"
                      />
                    </div>
                  </div>
                </div>
                <Button size="2xl" className="min-w-[11.88rem] rounded-[15px] font-medium sm:px-[1.25rem]">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
