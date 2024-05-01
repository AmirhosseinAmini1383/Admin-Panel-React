import React from "react";
import { Navigate } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import { useIsLogin } from "../../hook/authHook";
import SpinnerLoad from "../../components/SpinnerLoad";

const Index = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <AdminContextContainer>
      {loading ? (
        <SpinnerLoad colorClass={"text-primary"} waiting_center={true} />
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
