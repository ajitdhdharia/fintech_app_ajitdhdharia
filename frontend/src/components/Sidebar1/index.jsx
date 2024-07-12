import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="252px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 50 } }}
      className={`${props.className} flex flex-col h-screen pt-[1.88rem] gap-[3.13rem] top-[0.00rem] sm:pt-[1.25rem] bg-white-A700 !sticky overflow-auto`}
    >
      <Img src="images/img_sidebar_logo.png" alt="sidebar logo" className="h-[2.50rem] w-[10.06rem] object-contain" />
      <Menu
        menuItemStyles={{
          button: {
            padding: "1.06rem",
            gap: "1.25rem",
            alignSelf: "start",
            color: "#888ea2",
            fontWeight: 500,
            fontSize: "1.13rem",
            [`&:hover, &.ps-active`]: { color: "#314ca3" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.00rem" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="images/img_home.svg"
              alt="home icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_television.svg"
              alt="television icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Transactions
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_user_3_1.svg"
              alt="user icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Accounts
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_settings.svg"
              alt="settings icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Investments
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_credit_card_1.svg"
              alt="credit card icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Credit Cards
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_loan_1.svg"
              alt="loan icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Loans
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_service_1.svg"
              alt="service icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Services
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_laptop.svg"
              alt="laptop icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          My Privileges
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_search.svg"
              alt="search icon"
              className="h-[0.06rem] h-[1.56rem] w-[0.06rem] w-[1.56rem]"
            />
          }
        >
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
