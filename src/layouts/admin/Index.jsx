import React from "react";
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
        <img
          src={"/assets/images/icon/loading.gif"}
          alt="loading"
          className="waiting_center"
        />
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
