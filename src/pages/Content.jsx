import React, { useContext } from "react";
import { AdminContext } from "../context/adminLayoutContext";
import Categories from "./category/Categories";
import Products from "./product/Products";
import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Colors from "./colors/Colors";
import Guaranties from "./guaranties/Guaranties";
import Brands from "./brands/Brands";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/guaranties" element={<Guaranties />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
