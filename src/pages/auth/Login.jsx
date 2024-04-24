import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../../css/style/form.css";
import AuthFormikControl from "../../components/authForm/AuthFormikControl";
import showPassword from "../../css/images/show-password.png";
import hidePassword from "../../css/images/hide-password.png";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};
const onSubmit = (values, navigate) => {
  axios
    .post("https://ecomadminapi.azhadev.ir/api/auth/login", {
      ...values,
      remember: values.remember ? 1 : 0,
    })
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        localStorage.setItem("loginToken", JSON.stringify(res.data));
        navigate("/");
      }
    });
};
const validationSchema = Yup.object({
  phone: Yup.string()
    .required("وارد کردن شماره موبایل الزامی است")
    .matches(/^(09\d{9})$/, "شماره موبایل خود را به درستی وارد کنید"),
  password: Yup.string().required("وارد کردن گذرواژه الزامی است"),
  // .matches(
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$/,
  //   "فقط از حروف و اعداد استفاده شود"
  // ),
  remember: Yup.boolean(),
});
const Login = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values, navigate)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div>
            <h1 className="title">&lt;/A&gt; ورود به </h1>
            <Form>
              <div className="form">
                <AuthFormikControl
                  formik={formik}
                  control="input"
                  // type="number"
                  type="text"
                  placeholder="شماره موبایل"
                  label="برای ورود شماره موبایل خود را وارد کنید"
                  name="phone"
                />
                <AuthFormikControl
                  formik={formik}
                  control="input"
                  type={visible ? "text" : "password"}
                  placeholder="گذرواژه"
                  label="رمزعبور خود را وارد کنید"
                  name="password"
                />
                <div
                  className="icon_password"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? (
                    <img
                      src={hidePassword}
                      alt="hidePassword"
                      className="toggle_Pass"
                    />
                  ) : (
                    <img
                      src={showPassword}
                      alt="showPassword"
                      className="toggle_Pass"
                    />
                  )}
                </div>
                <AuthFormikControl
                  formik={formik}
                  control="switch"
                  name="remember"
                  label="مرا بخاطر بسپارید"
                />
                <div className="btnform">
                  <button className="button Add" type="submit">
                    ورود
                  </button>
                </div>
              </div>
            </Form>
            <div>
              <div className="login_info">
                <Link to={"/register"}>ثبت نام کنید</Link>
                <p className="p_info">قبلا ثبت نام نکرده اید؟</p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
