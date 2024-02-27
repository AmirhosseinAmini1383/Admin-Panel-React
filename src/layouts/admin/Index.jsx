import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";

const Index = () => {
  return (
    <AdminContextContainer>
      <div>
        <Content />
        <Navbar />
        <Sidebar />
      </div>
    </AdminContextContainer>
  );
};

export default Index;
