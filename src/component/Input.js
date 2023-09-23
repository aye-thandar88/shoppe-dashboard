import React from "react";
import { IconStyle, InputStyle } from "../theme";

const Input = ({ inputStyle, inputType, placeholder, inputName, children }) => {
  const classNames = InputStyle[inputStyle];
  return (
    <div className="relative">
      <div className={IconStyle["left"]}>{children}</div>
      <input
        type={inputType}
        name={inputName}
        className={classNames}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
