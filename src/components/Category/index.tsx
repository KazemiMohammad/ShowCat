import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory, IShowCatState } from "../../redux/types";
import { setCategoryList, setSelectedCategory } from "../../redux/actions";
import { getCategories } from "../../services/DataAction/Category";
import { StyledCategoryList, StyledCategoryItem } from "./Catgory.styled";

export default function CategoryList() {
  const [loading, setLoading] = useState<Boolean>(true);
  const dispatch = useDispatch();
  const { selectedCategory, categoryList } = useSelector(
    (state: IShowCatState) => state
  );

  const loadCategories = useCallback(async () => {
    const categoryies = await getCategories();
    dispatch(setCategoryList(categoryies.data as ICategory[]));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleClichCategory = (id: string) => {
    dispatch(setSelectedCategory(id));
  };
  return (
    <>
      {!!loading && <p>loading...</p>}
      {!loading && (
        <StyledCategoryList>
          {categoryList.map((item) => (
            <StyledCategoryItem
              key={item.id}              
              isSelected={item.id===selectedCategory}
              onClick={() => handleClichCategory(item.id)}
            >
              {item.name}
            </StyledCategoryItem>
          ))}
        </StyledCategoryList>
      )}
    </>
  );
}
