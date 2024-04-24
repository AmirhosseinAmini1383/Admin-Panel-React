import React from "react";
import Login from "../../pages/auth/Login";
import { Navigate, Route, Routes } from "react-router-dom";

import { useIsLogin } from "../../hook/authHook";

const AuthLayout = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <div>
      {loading ? (
        <h1 className="waiting_center">صبر کنید</h1>
      ) : !isLogin ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
