import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useIsLogin } from "../../hook/authHook";
import Login from "../../pages/auth/Login";
import SpinnerLoad from "../../components/SpinnerLoad";
// import Register from "../../pages/auth/Register";

const AuthLayout = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <div>
      {loading ? (
        <SpinnerLoad colorClass={"text-primary"} waiting_center={true} />
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
