import React from "react";
import Input from "./input";
import Switch from "./Switch";

const AuthFormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "switch":
      return <Switch {...props} />;
    default:
      break;
  }
};
export default AuthFormikControl;
