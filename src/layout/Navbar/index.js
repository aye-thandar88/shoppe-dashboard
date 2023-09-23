import React, { useState } from "react";
import Button from "../../component/Button";
import { FaEllipsisV } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 px-6 flex justify-between items-center md:px-10 bg-gradient-to-r to-sky-600 from-cyan-400 fixed w-full top-0">
      <div className="flex gap-2 items-center">
        <img src="coffee5.jpeg" className="w-10 border-2 rounded-full" />
        <span className="font-extrabold text-2xl font-serif">Shoppe</span>
      </div>
      <div>
        <Button onClick={() => setOpen(!open)}>
          <FaEllipsisV />
        </Button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute md:mr-8 mr-4 right-0 z-10 mt-48 w-56 origin-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
