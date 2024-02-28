import React, { useContext } from "react";
import { AdminContext } from "../context/adminLayoutContext";
import Category from "./category/Category";
import Product from "./product/Product";
import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
