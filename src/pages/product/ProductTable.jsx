import React from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddProduct from "./AddProduct";

const ProductTable = () => {
  const data = [
    {
      id: "1",
      category: "دسته شماره فلان",
      title: "محصول شماره1",
      price: "20,000 تومان",
      stock: "10",
      like_count: "30",
      status: "فعال",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "category", title: "دسته" },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    { field: "like_count", title: "تعداد لایک" },
    { field: "status", title: "وضعیت" },
  ];
  const additionalElements = (itemId) => {
    console.log(itemId);
    return (
      <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش محصول"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_product_modal"
        ></i>
        <i
          className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
          title="ثبت ویژگی"
          data-bs-toggle="modal"
          data-bs-target="#add_product_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف محصول"
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
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };
  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={2}
        searchParams={searchParams}
      >
        <AddProduct />
      </PaginatedTable>
    </>
  );
};

export default ProductTable;
