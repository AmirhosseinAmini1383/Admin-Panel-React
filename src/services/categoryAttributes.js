import httpService from "./httpservice";

export const getCategoryAttributesService = (categoryId) => {
  return httpService(`/admin/categories/${categoryId}/attributes`, "get");
};
