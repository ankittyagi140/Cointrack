import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const ControlledCheckbox = ({ onChange, checked }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export default ControlledCheckbox;
