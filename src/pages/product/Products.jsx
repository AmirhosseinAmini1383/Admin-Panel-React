import React from "react";
import ProductTable from "./ProductTable";
import SetAttribute from "./SetAttribute";

const Products = () => {
  return (
    <div
      id="manage_product_section"
      className="manage_product_section main_section"
    >
      <h4 className="text-center my-3">مدیریت محصولات</h4>
      <ProductTable />
      <SetAttribute />
    </div>
  );
};

export default Products;
