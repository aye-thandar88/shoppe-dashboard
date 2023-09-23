import React from "react";

const Option = ({ value, label }) => {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
};

export default Option;
