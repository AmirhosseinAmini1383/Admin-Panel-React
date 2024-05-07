import React, { useEffect, useState } from "react";

import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import {
  deleteCategoryService,
  getCategoriesService,
} from "../../services/category";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Actions from "./tableAdditions/Actions";
import { Outlet, useParams } from "react-router-dom";
import { convertDateToJalali } from "../../utils/convertDate";
import { Alert, Confirm } from "../../utils/alerts";

const CategoriTable = () => {
  const params = useParams();
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleDeleteCategory = async (rowData) => {
    if (
      await Confirm(
        "حذف دسته بندی",
        `آیا از حذف ${rowData.title} اطمینان دارید؟`
      )
    ) {
      try {
        const res = await deleteCategoryService(rowData.id);
        if (res.status == 200) {
          setData(data.filter((d) => d.id != rowData.id));
          Alert("انجام شد", res.data.message, "success");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleGetCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];
  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteCategory={handleDeleteCategory}
        />
      ),
    },
  ];
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };
  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={10}
        searchParams={searchParams}
        loading={loading}
      >
        <AddCategory setForceRender={setForceRender} />
      </PaginatedTable>
    </>
  );
};

export default CategoriTable;
