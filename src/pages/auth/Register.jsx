import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import "../../css/form.css";
import FormikControl from "../../components/authForm/AuthFormikControl";
import { Link, useNavigate } from "react-router-dom";
import { registerService } from "../../services/auth";
import { Alert } from "../../utils/alerts";

const initialValues = {
  phone: "",
  password: "",
  confirmPassword: "",
  remember: false,
};
const onSubmit = async (values, submitMethods, navigate) => {
  try {
    const res = await registerService(values);
    if (res.status == 200) {
      localStorage.setItem("registerToken", JSON.stringify(res.data));
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], " گذرواژه و تکرار آن باید یکسان باشند")
    .required("تکرار گذرواژه الزامی است"),
  remember: Yup.boolean(),
});
const Register = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, submitMethods) => {
        onSubmit(values, submitMethods, navigate);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div>
            <h1 className="title">&lt;/A&gt; ثبت نام در </h1>
            <Form>
              <div className="form">
                <FormikControl
                  formik={formik}
                  control="input"
                  type="text"
                  placeholder="شماره موبایل"
                  label="برای ثبت نام شماره موبایل خود را وارد کنید"
                  name="phone"
                />
                <FormikControl
                  formik={formik}
                  control="input"
                  type="password"
                  placeholder="گذرواژه"
                  label="گذرواژه خود را وارد کنید"
                  name="password"
                />
                <FormikControl
                  formik={formik}
                  control="input"
                  type="password"
                  placeholder="تکرار گذرواژه"
                  label="گذرواژه خود را تکرار کنید"
                  name="confirmPassword"
                />
                <FormikControl
                  formik={formik}
                  control="switch"
                  name="remember"
                  label="مرا بخاطر بسپارید"
                />
                <div className="btnform">
                  <button className="button Add" type="submit">
                    {formik.isSubmitting ? "لطفا صبر کیند..." : "ثبت نام"}
                  </button>
                </div>
              </div>
            </Form>
            <div>
              <div className="login_info">
                <Link to={"/login"}>وارد شوید</Link>
                <p className="p_info">قبلا ثبت نام کرده اید؟</p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Register;
