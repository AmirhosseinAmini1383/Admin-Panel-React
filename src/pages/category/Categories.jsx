import React from "react";
import CategoriTable from "./CategoriTable";
import AddAttributes from "./AddAttributes";

const Categories = () => {
  return (
    <div
      id="manage_product_category"
      className="manage_product_category main_section"
    >
      <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
      <CategoriTable />
      <AddAttributes />
    </div>
  );
};

export default Categories;
