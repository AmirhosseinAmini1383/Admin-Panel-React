import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, FastField } from "formik";

import PaginatedTable from "../../../components/PaginatedTable";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PrevPageButton from "../../../components/PrevPageButton";
import {
  addCategoryAttributesService,
  getCategoryAttributesService,
} from "../../../services/categoryAttributes";
import FormikControl from "../../../components/form/FormikControl";
import { Alert } from "../../../utils/alerts";

const initialValues = {
  title: "",
  unit: "",
  in_filter: true,
};

const onSubmit = async (values, actions, categoryId, setData) => {
  try {
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };
    const res = await addCategoryAttributesService(categoryId, values);
    if (res.status == 201) {
      Alert("انجام شد", res.data.message, "success");
      setData((oldData) => [...oldData, res.data.data]);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  unit: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  in_filter: Yup.boolean(),
});

const AddAttributes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
  ];
  const additionField = [
    {
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <AttrAction rowData={rowData} />,
    },
  ];
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };
  const handleGetCategoryAttribute = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttributesService(
        location.state.CategoryData.id
      );
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategoryAttribute();
  }, []);
  return (
    <>
      <h4 className="text-center my-3">مدیریت ویژگی های دسته بندی</h4>
      <h6 className="text-center my-3">
        ویژگی های :{" "}
        <span className="text-primary">
          {location.state.CategoryData.title}
        </span>
      </h6>
      <div className="container">
        <div className="row justify-content-center">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, location.state.CategoryData.id, setData)
            }
            validationSchema={validationSchema}
          >
            <Form>
              <div className="row my-3">
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  className="col-md-6 col-lg-4 my-1"
                  placeholder="عنوان ویژگی جدید"
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="unit"
                  label="واحد"
                  className="col-md-6 col-lg-4 my-1"
                  placeholder="واحد ویژگی جدید"
                />
                <div className="col-8 col-lg-2 my-1">
                  <FormikControl
                    control="switch"
                    name="in_filter"
                    label="نمایش در فیلتر"
                  />
                </div>
                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
                  <FastField>
                    {({ form }) => {
                      return (
                        <i
                          className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text"
                          title="ثبت ویژگی"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          onClick={() => {
                            form.submitForm();
                          }}
                        ></i>
                      );
                    }}
                  </FastField>
                </div>
              </div>
            </Form>
          </Formik>

          <hr />

          <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            additionField={additionField}
            numOfPage={10}
            searchParams={searchParams}
            loading={loading}
          >
            <PrevPageButton />
          </PaginatedTable>
        </div>
      </div>
    </>
  );
};

export default AddAttributes;
