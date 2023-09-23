import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import PageNotFound from "./404Page";

const ErrorBoundary = () => {
  const error = useRouteError();

  console.log("error",error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <PageNotFound />;
    }
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorBoundary;
