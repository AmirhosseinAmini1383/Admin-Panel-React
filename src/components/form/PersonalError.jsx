import React from "react";

const PersonalError = ({ children }) => {
  // console.log(children);
  return (
    <small className="d-block text-danger mb-4 error_message">{children}</small>
  );
};

export default PersonalError;
