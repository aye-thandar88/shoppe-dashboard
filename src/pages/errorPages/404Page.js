import React from "react";
import Button from "../../component/Button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap h-screen gap-10">
      <img src="404-error.png" alt="404-error" className="w-52 md:w-72" />
      <div className="flex flex-col gap-3 items-center">
        <span className="font-semibold text-2xl">Oops! Page Not Found</span>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Button type={"secondary"} size={"sm"}>Back Home</Button>
      </div>
    </div>
  );
};

export default PageNotFound;
