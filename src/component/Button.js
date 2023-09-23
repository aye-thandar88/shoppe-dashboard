import React from "react";
import { ButtonSize, ButtonType, IconStyle } from "../theme";

const Button = ({ type, size, children, onClick }) => {
  const classNames =
    ButtonSize[size] + " " + ButtonType[type] + IconStyle["center"];

  return <button className={classNames} onClick={onClick}>{children}</button>;
};

export default Button;
