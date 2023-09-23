import React from "react";
import { useForm } from "react-hook-form";

const New = () => {
  const {
    users,
    handleSubmit,
    formState: { errors },
  } = useForm;

  const handleNewUser = (data) => {
    console.log(data);
  };

  return (
    <div className="my-3 px-10 py-3">
      <form onSubmit={handleSubmit(handleNewUser)}></form>
    </div>
  );
};

export default New;
