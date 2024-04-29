import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useIsLogin } from "../../hook/authHook";
import Login from "../../pages/auth/Login";
// import Register from "../../pages/auth/Register";

const AuthLayout = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <div>
      {loading ? (
        <img
          src={"/assets/images/icon/loading.gif"}
          alt="loading"
          className="waiting_center"
        />
      ) : !isLogin ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          {/* <Route path="/auth/register" element={<Register />} /> */}
        </Routes>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
