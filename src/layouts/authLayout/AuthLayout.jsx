import React from "react";
import Login from "../../pages/auth/Login";
import { Route, Routes } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
