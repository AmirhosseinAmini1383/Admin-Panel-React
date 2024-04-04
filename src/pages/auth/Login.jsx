import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import "../../css/style/Form.css";
import AuthFormikControl from "../../components/authForm/AuthFormikControl";
import { Link } from "react-router-dom";
import showPassword from "../../css/images/show-password.png";
import hidePassword from "../../css/images/hide-password.png";
import axios from "axios";
const Login = () => {
  const [visible, setVisible] = useState(true);
  const initialValues = {
    phone: "",
    password: "",
    remember: false,
  };

  const onSubmit = (values) => {
    axios
      .post("https://ecomadminapi.azhadev.ir/api/auth/login", {
        ...values,
        remember: values.remember ? 1 : 0,
      })
      .then((res) => {
        console.log(res);
      });
  };
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("وارد کردن شماره موبایل الزامی است")
      .matches(/^(09\d{9})$/, "شماره موبایل خود را به درستی وارد کنید"),
    password: Yup.string()
      .required("وارد کردن گذرواژه الزامی است")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    remember: Yup.boolean(),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
                      className="toggle-Pass"
                    />
                  ) : (
                    <img
                      src={showPassword}
                      alt="showPassword"
                      className="toggle-Pass"
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
                  <button className="btn Add" type="submit">
                    ورود
                  </button>
                </div>
              </div>
            </Form>
            <div>
              <div className="login-info">
                <Link to={"/register"}>ثبت نام کنید</Link>
                <p className="p-info">قبلا ثبت نام نکرده اید؟</p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
