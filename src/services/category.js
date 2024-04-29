import httpService from "./httpservice";

export const getCategoriesService = (id = null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "get");
};
