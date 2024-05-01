import httpService from "./httpservice";

export const getCategoriesService = (id = null) => {
  return httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "get");
};

export const createNewCategoryService = (data) => {
  if (data.image) {
    let formData = new FormData();
    formData.append("parent_id", data.parent_id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("is_active", data.is_active);
    formData.append("show_in_menu", data.show_in_menu);
    data = formData;
  }
  return httpService("/admin/categories", "post", data);
};
