import React from "react";
import { TextAreaStyle } from "../theme";

const TextArea = ({ placeholder, style, row }) => {
  const classNames = TextAreaStyle[style];
  return (
    <textarea
      rows={row}
      className={classNames}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
