import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  let loggedIn = {
    firstName: "Ajit",
    lastName: "Dhdharia",
    email: "dhdhariaajit@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and Manage your account and transactions efficiently"
            user={loggedIn?.firstName || "Guest"}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 500.05}]} />
    </section>
  );
};

export default Home;
