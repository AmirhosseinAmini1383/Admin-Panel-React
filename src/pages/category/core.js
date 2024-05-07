import * as Yup from "yup";

import {
  createNewCategoryService,
  editCategoryService,
} from "../../services/category";
import { Alert } from "../../utils/alerts";

export const initialValues = {
  parent_id: "",
  title: "",
  description: "",
  image: null,
  is_active: true,
  show_in_menu: true,
};
export const onSubmit = async (values, actions, setForceRender, editId) => {
  try {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    if (editId) {
      const res = await editCategoryService(editId, values);
      // console.log(res);
      if (res.status == 200) {
        Alert("ویرایش رکورد", res.data.message, "success");
        actions.resetForm();
        setForceRender((last) => last + 1);
      }
    } else {
      const res = await createNewCategoryService(values);
      // console.log(res);
      if (res.status == 201) {
        Alert("ثبت رکورد", res.data.message, "success");
        actions.resetForm();
        setForceRender((last) => last + 1);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const validationSchema = Yup.object({
  parent_id: Yup.number(),
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  description: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  image: Yup.mixed()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
      value === null || value === undefined ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      value === null || value === undefined ? true : value.type === "image/jpeg"
    )
    .nullable(),
  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
});
