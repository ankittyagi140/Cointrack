import React from "react";
import "./dropDown.scss";

const DropDown = ({ options, onChange, name }) => {
  return (
    <>
      <select
        onChange={(e) => onChange(e.target.value)}
        name={name}
        className="dropDrown_select"
      >
        <option>Select currency</option>
        {options.map((option, index) => (
          <option key={index} vlaue={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
export default DropDown;
