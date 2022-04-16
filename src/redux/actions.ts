import { SET_CATEGORY_LIST, SET_CAT_IMAGE_LIST,Category,CatImage, SET_SELECTED_CATEGORY } from "./types";


export const setSelectedCategory = (payload:string) => {
    return {
      type: SET_SELECTED_CATEGORY,
      payload
    };
  };

  export const setCategoryList = (payload:Category[]) => {
    return {
      type: SET_CATEGORY_LIST,
      payload
    };
  };

  export const setCatImageList = (payload:CatImage[]) => {
    return {
      type: SET_CAT_IMAGE_LIST,
      payload
    };
  };

