export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export const SET_CAT_IMAGE_LIST = "SET_CAT_IMAGE_LIST";

export interface Category {
    id: string,
    name: string,
}
export interface CatImage {
    height: number,
    id: string,
    url: string,
    width: number
}

export interface ShowCatState {
    selectedCategory: string,
    categoryList: Category[];
    CatImageList: CatImage[],
}


interface setSelectedCategory {
    type: typeof SET_SELECTED_CATEGORY;
    payload: string;
  }
interface setCategoryList {
    type: typeof SET_CATEGORY_LIST;
    payload: Category[];
  }
interface setCatImageList {
    type: typeof SET_CAT_IMAGE_LIST;
    payload: CatImage[];
  }
  
export type ShowCatActionType = setSelectedCategory | setCategoryList | setCatImageList;