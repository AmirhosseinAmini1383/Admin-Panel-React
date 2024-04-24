import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import { useIsLogin } from "../../hook/authHook";

const Index = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="waiting_center">صبر کنید</h1>
      ) : isLogin ? (
        <div>
          <Content />
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
