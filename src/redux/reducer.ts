import { ShowCatActionType, ShowCatState, SET_SELECTED_CATEGORY, SET_CATEGORY_LIST, SET_CAT_IMAGE_LIST } from "./types";

const initialState: ShowCatState={
    selectedCategory : "",
    categoryList: [],
    CatImageList: []
}

export const ShowCatReducer = (state = initialState, action: ShowCatActionType): ShowCatState => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        case SET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            };
        case SET_CAT_IMAGE_LIST:
            return {
                ...state,
                CatImageList: action.payload
            };
        default:
            return state;
    }
}