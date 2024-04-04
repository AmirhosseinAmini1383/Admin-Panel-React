import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../Personal/PersonalError";

const Input = (props) => {
  const { label, type, name, placeholder, formik } = props;
  const isError = formik.errors[name] && formik.touched[name];
  // console.log(formik.errors);
  return (
    <div className="displayform">
      <label className="form-label">{label}</label>
      <FastField
        type={type}
        className={`form-control input_margin_bottom ${
          isError ? "input-err" : ""
        }`}
        placeholder={placeholder}
        name={name}
      />

      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Input;
