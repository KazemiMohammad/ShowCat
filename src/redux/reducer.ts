import { ShowCatActionType, IShowCatState, SET_SELECTED_CATEGORY, SET_CATEGORY_LIST, SET_CAT_IMAGE_LIST, SET_MORE_CAT_IMAGE_LIST } from "./types";

const initialState: IShowCatState = {
    selectedCategory: "",
    categoryList: [],
    catImageList: []
}

export const ShowCatReducer = (state: IShowCatState = initialState, action: ShowCatActionType): IShowCatState => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
                catImageList:[]
            };
        case SET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            };
        case SET_CAT_IMAGE_LIST:
            return {
                ...state,
                catImageList: action.payload
            };
        case SET_MORE_CAT_IMAGE_LIST:
            return {
                ...state,
                catImageList: [...state.catImageList, ...action.payload]
            };
        default:
            return state;
    }
}