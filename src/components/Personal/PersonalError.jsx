import React from "react";

const PersonalError = ({ children }) => {
  // console.log(children);
  // return <span className="err-validate">*{children}</span>;
  <small className="d-block text-danger mb-4 error_message">{children}</small>;
};

export default PersonalError;
