import httpService from "./httpservice";

export const getCategoryAttributesService = (categoryId) => {
  return httpService(`/admin/categories/${categoryId}/attributes`, "get");
};

export const addCategoryAttributesService = (categoryId, data) => {
  return httpService(
    `/admin/categories/${categoryId}/attributes`,
    "post",
    data
  );
};
