import React from "react";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";

const Product = () => {
  return (
    <div
      id="manage_product_section"
      className="manage_product_section main_section"
    >
      <h4 className="text-center my-3">مدیریت محصولات</h4>
      <ProductTable />
    </div>
  );
};

export default Product;
