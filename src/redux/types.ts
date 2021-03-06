export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export const SET_CAT_IMAGE_LIST = "SET_CAT_IMAGE_LIST";
export const SET_MORE_CAT_IMAGE_LIST = "SET_MORE_CAT_IMAGE_LIST";

export interface ICategory {
    id: string,
    name: string,
}
export interface ICatImage {
    height: number,
    id: string,
    url: string,
    width: number
}
export interface IShowCatState {
    selectedCategory: string,
    categoryList: ICategory[];
    catImageList: ICatImage[],
}

interface setSelectedCategory {
    type: typeof SET_SELECTED_CATEGORY;
    payload: string;
  }
interface setCategoryList {
    type: typeof SET_CATEGORY_LIST;
    payload: ICategory[];
  }
interface setCatImageList {
    type: typeof SET_CAT_IMAGE_LIST;
    payload: ICatImage[];
  }
interface setMoreCatImageList {
    type: typeof SET_MORE_CAT_IMAGE_LIST;
    payload: ICatImage[];
  }
  
export type ShowCatActionType = setSelectedCategory | setCategoryList | setCatImageList|setMoreCatImageList;