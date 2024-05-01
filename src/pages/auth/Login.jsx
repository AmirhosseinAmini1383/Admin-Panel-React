import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../../css/form.css";
import AuthFormikControl from "../../components/authForm/AuthFormikControl";
import { Alert } from "../../utils/alerts";
import { loginService } from "../../services/auth";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};
const onSubmit = async (values, submitMethods, navigate) => {
  try {
    const res = await loginService(values);
    if (res.status == 200) {
      localStorage.setItem("loginToken", JSON.stringify(res.data));
      navigate("/");
    } else {
      Alert("!ورود انجام نشد", res.data.message, "error");
    }
    submitMethods.setSubmitting(false);
  } catch (error) {
    submitMethods.setSubmitting(false);
    Alert("!خروج انجام نشد", "متاسفانه مشکلی از سمت سرور رخ داده است", "error");
  }
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
      onSubmit={(values, submitMethods) =>
        onSubmit(values, submitMethods, navigate)
      }
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <div className="container_Login">
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
                      src={"/assets/images/icon/hidePassword.png"}
                      className="toggle_Pass"
                      alt="hidePassword"
                    />
                  ) : (
                    <img
                      src={"/assets/images/icon/showPassword.png"}
                      className="toggle_Pass"
                      alt="showPassword"
                    />
                  )}
                </div>
                <AuthFormikControl
                  formik={formik}
                  control="switch"
                  name="remember"
                  label="مرا بخاطر بسپارید"
                />
                <div>
                  <button
                    className="button Add"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "...لطفا صبر کنید" : "ورود"}
                  </button>
                </div>
              </div>
            </Form>
            <div>
              <div className="login_info">
                <Link to={"/"}>ثبت نام کنید</Link>
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
