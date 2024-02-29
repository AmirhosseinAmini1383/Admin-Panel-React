import React, { useContext } from "react";
import { AdminContext } from "../context/adminLayoutContext";
import Categories from "./category/Categories";
import Products from "./product/Products";
import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Colors from "./colors/Colors";
import Guaranties from "./guaranties/Guaranties";
import Brands from "./brands/Brands";
import Discounts from "./discounts/Discounts";
import Carts from "./carts/Carts";
import Orders from "./orders/Orders";
import Deliveries from "./deliveries/Deliveries";
import Users from "./users/Users";
import Roles from "./roles/Roles";
import Permissions from "./permissions/Permissions";
import Questions from "./questions/Questions";
import Comments from "./comments/Comments";

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
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
