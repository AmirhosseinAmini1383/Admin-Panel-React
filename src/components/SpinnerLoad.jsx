import React from "react";

const SpinnerLoad = ({ colorClass, isSmall, inline, waiting_center }) => {
  return (
    <span
      className={`text-center ${!inline ? "d-block" : "mx-2"} ${colorClass}`}
    >
      <div
        className={`spinner-border ${isSmall ? "spinner-border-sm" : ""}${
          waiting_center ? "waiting_center" : ""
        }`}
        role="status"
      ></div>
    </span>
  );
};

export default SpinnerLoad;
