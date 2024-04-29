import React, { useEffect, useState } from "react";

import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesService } from "../../services/category";
import { Alert } from "../../utils/alerts";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Actions from "./tableAdditions/Actions";

const CategoriTable = () => {
  const [data, setData] = useState([]);
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Alert("خطا", res.data.message, "error");
      }
    } catch (error) {
      Alert("خطا", "متاسفانه مشکلی از سمت سرور رخ داده است", "error");
    }
  };
  useEffect(() => {
    handleGetCategories();
  }, []);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
    { field: "created_at", title: "تارخ" },
  ];
  const additionField = [
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];
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
        <AddCategory />
      </PaginatedTable>
    </>
  );
};

export default CategoriTable;
