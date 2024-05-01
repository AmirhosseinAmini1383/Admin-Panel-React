import React from "react";

const PersonalError = ({ children }) => {
  // console.log(children);
  return <span className="err-validate">*{children}</span>;
};

export default PersonalError;
