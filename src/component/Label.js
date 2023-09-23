import React from "react";
import { LabelStyle } from "../theme";

const Label = ({ style, children }) => {
  const classNames = LabelStyle[style];
  return <label className={classNames}>{children}</label>;
};

export default Label;
