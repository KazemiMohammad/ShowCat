import api from "../../AxiosConfig/Config";

export const searchCats = async (categoryId:string,pageNumber:number) => {
    return await api.get(`//api.thecatapi.com/v1/images/search?category_ids=${categoryId}&limit=10&page=${pageNumber}`);
  };