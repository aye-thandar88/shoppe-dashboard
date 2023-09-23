import React from "react";
import { SelectStyle } from "../theme";
import Option from "./Option";

const Select = ({ style, listArr }) => {
  const classNames = SelectStyle[style];

  return (
    <select class={classNames}>
      {listArr.map((list) => (
        <Option value={list.value} label={list.label} />
      ))}
    </select>
  );
};

export default Select;
