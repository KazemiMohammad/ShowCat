import { SET_CATEGORY_LIST, SET_CAT_IMAGE_LIST,ICategory,ICatImage, SET_SELECTED_CATEGORY,SET_MORE_CAT_IMAGE_LIST } from "./types";


export const setSelectedCategory = (payload:string) => {
    return {
      type: SET_SELECTED_CATEGORY,
      payload
    };
  };

  export const setCategoryList = (payload:ICategory[]) => {
    return {
      type: SET_CATEGORY_LIST,
      payload
    };
  };

  export const setCatImageList = (payload:ICatImage[]) => {
    return {
      type: SET_CAT_IMAGE_LIST,
      payload
    };
  };

  export const setMoreCatImageList = (payload:ICatImage[]) => {
    return {
      type: SET_MORE_CAT_IMAGE_LIST,
      payload
    };
  };

