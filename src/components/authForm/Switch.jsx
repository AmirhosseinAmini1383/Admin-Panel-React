import { FastField } from "formik";
import React from "react";

const Switch = ({ name, label }) => {
  return (
    <div className="check-box-container">
      <label className="switch">
        <FastField type="checkbox" name={name} />
        <span className="slider round"></span>
      </label>
      <p className="remember-text">{label}</p>
    </div>
  );
};

export default Switch;
