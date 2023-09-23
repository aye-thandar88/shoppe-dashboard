import React from "react";
import {
  FaChartLine,
  FaUserAlt,
  FaBabyCarriage,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      id="sideNav"
      className="lg:w-64 w-25 h-screen fixed rounded-none border-none py-16"
    >
      {/* <!-- Items --> */}
      <div className="p-4 space-y-4">
        {/* <!-- Inicio --> */}
        <a
          href="/dashboard"
          aria-label="dashboard"
          className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400"
        >
          <FaChartLine />
          <span className="-mr-1 font-medium lg:block hidden">Dashboard</span>
        </a>

        <a
          href="/users"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400"
        >
          <FaUserAlt />
          <span className="lg:block hidden">Users</span>
        </a>
        <a
          href="/shops"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400"
        >
          <FaBabyCarriage />
          <span className="lg:block hidden">Shops</span>
        </a>
        <a
          href="/reports"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400"
        >
          <FaClipboardList />
          <span className="lg:block hidden">Reports</span>
        </a>
        <a
          href="/settings"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400"
        >
          <FaCog />
          <span className="lg:block hidden">settings</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
