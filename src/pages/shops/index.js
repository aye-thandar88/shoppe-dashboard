import React from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import Lists from "./Lists";

const Shops = () => {
  const handleNewUser = () => {};
  return (
    <div className="ml-16 lg:ml-64 h-screen py-14">
      <div className="flex justify-start w-full items-center my-3 py-5">
        <div className="flex justify-center w-72">
          <Input inputType="search" placeholder="Search" inputStyle="default">
            <span
              class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </Input>
          {/* <!--Search icon--> */}
        </div>
        <div>
          <Button type="primary" size="sm" onClick={handleNewUser}>
            Add New
          </Button>
        </div>
      </div>
      
      {/* <Lists /> */}
    </div>
  );
};

export default Shops;
