import React from "react";
import Cards from "../../component/Cards";
import Table from "../../component/table";

const cardsData = [
  { id: "1", count: "44", title: "Transactions every 24 hours" },
  { id: "2", count: "14", title: "Data every 24 hours" },
  { id: "3", count: "33", title: "Users every 24 hours" },
];

const userData = [
  { id: "1", count: "44", title: "Transactions every 24 hours" },
  { id: "2", count: "14", title: "Data every 24 hours" },
];

const tableHeader = ["Shop", "User", "Rating"];

const rowsData = [
  ["Shop1", 3000, "*****"],
  ["Shop2", 444, "***"],
  ["Shop3", 356, "**"],
];

const Dashboard = () => {
  return (
    <div className="ml-16 lg:ml-64 h-screen py-14">
      {/* <div className="flex justify-around px-6 py-3 my-3 flex-wrap">
        <Cards cards={cardsData} />
      </div>
      <div className="px-10 my-3 ">
        <Cards cards={userData} />
      </div> */}
      <div className="px-10 pt-3 pb-16 my-3">
        <Table
          // tableCaption="able 3.1: Professional wrestlers and their signature moves."
          tableHeader={tableHeader}
          rows={rowsData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
