import React from "react";
// import PaginatedTable from "../../components/PaginatedTable";
import AddProduct from "./AddProduct";

const ProductTable = () => {
  // const data = [
  //   {
  //     id: "1",
  //     category: "دسته شماره فلان",
  //     title: "محصول شماره1",
  //     price: "20,000 تومان",
  //     stock: "10",
  //     like_count: "30",
  //     status: "فعال",
  //   },
  // ];

  // const dataInfo = [
  //   { field: "id", title: "#" },
  //   { field: "category", title: "دسته" },
  //   { field: "title", title: "عنوان" },
  //   { field: "price", title: "قیمت" },
  //   { field: "stock", title: "موجودی" },
  //   { field: "like_count", title: "تعداد لایک" },
  //   { field: "status", title: "وضعیت" },
  // ];
  // const additionalElements = (itemId) => {
  //   console.log(itemId);
  //   return (
  //     <>
  //       <i
  //         className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
  //         title="ویرایش محصول"
  //         data-bs-toggle="modal"
  //         data-bs-placement="top"
  //         data-bs-target="#add_product_modal"
  //       ></i>
  //       <i
  //         className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
  //         title="ثبت ویژگی"
  //         data-bs-toggle="modal"
  //         data-bs-target="#add_product_attr_modal"
  //       ></i>
  //       <i
  //         className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
  //         title="حذف محصول"
  //         data-bs-toggle="tooltip"
  //         data-bs-placement="top"
  //       ></i>
  //     </>
  //   );
  // };
  // const additionField = {
  //   title: "عملیات",
  //   elements: (itemId) => additionalElements(itemId),
  // };
  // const searchParams = {
  //   title: "جستجو",
  //   placeholder: "قسمتی از عنوان را وارد کنید",
  //   searchField: "title",
  // };
  return (
    // <>
    //   <PaginatedTable
    //     data={data}
    //     dataInfo={dataInfo}
    //     additionField={additionField}
    //     numOfPage={2}
    //     searchParams={searchParams}
    //   >
    //     <AddProduct />
    //   </PaginatedTable>
    // </>

    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          <AddProduct />
        </div>
      </div>

      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>دسته</th>
            <th>عنوان</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>تعداد لایک</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>دسته شماره فلان</td>
            <td>محصول شماره1</td>
            <td>20,000 تومان</td>
            <td>10</td>
            <td>
              <span className="text-success mx-2">30</span>
              <span className="text-danger mx-2">10</span>
            </td>
            <td>فعال</td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        aria-label=" navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProductTable;
