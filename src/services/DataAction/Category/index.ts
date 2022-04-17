import api from "../../AxiosConfig/Config";

export const getCategories = () => {
  return api.get('categories');
};


