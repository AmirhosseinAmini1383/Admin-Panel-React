import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section id="content_section" className="bg-light py-2 px-3"></section>
    </div>
  );
};

export default Index;
