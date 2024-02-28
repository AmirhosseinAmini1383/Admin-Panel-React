import React from "react";
import PaginatedTable from "../../components/PaginatedTable";

const CategoriTable = () => {
  const data = [
    {
      id: "1",
      category: "aaa",
      title: "Bmw",
      price: "10,000,000,000",
      stock: "5",
      like_count: "2",
      status: "1",
    },
    {
      id: "2",
      category: "ccc",
      title: "Benz",
      price: "9,500,000,000",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "3",
      category: "ccc",
      title: "Dena+",
      price: "980,000,000",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "4",
      category: "ccc",
      title: "Jak j5",
      price: "960,000,000",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "5",
      category: "ccc",
      title: "Shahin",
      price: "700,000,000",
      stock: "7",
      like_count: "2",
      status: "1",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];
  const additionalElements = (itemId) => {
    console.log(itemId);
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };
  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElements(itemId),
  };

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
      />
    </>
  );
};

export default CategoriTable;
