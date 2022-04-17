import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatImageList, setMoreCatImageList } from "../../redux/actions";
import { ICatImage, IShowCatState } from "../../redux/types";
import { searchCats } from "../../services/DataAction/Search";
import CatImage from "../CatImage";
import { StyledButton } from "../General/Button.styled";
import Spin from "../Spin";
import { StyledCatList } from "./CatList.styled";

export default function CatList() {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const { selectedCategory, catImageList } = useSelector(
    (state: IShowCatState) => state
  );

  const loadCats = useCallback(
    async (categoryId: string) => {
      setLoading(true);
      setPageNumber(1);
      let result = await searchCats(categoryId, 1);
      dispatch(setCatImageList(result.data));
      setLoading(false);
    },
    [dispatch]
  );

  useEffect(() => {
    loadCats(selectedCategory);
  }, [loadCats, selectedCategory]);

  const loadMore = async (categoryId: string, pageNumber: number) => {
    setPageNumber(pageNumber);
    let result = await searchCats(categoryId, pageNumber);
    dispatch(setMoreCatImageList(result.data));
    setLoading(false);
  };
  return (
    <div>
      <StyledCatList>
        {catImageList.map((cat: ICatImage) => {
          return <CatImage {...cat} />;
        })}
        {!!loading && <Spin />}
      </StyledCatList>

      <StyledButton
        onClick={() => {
          setLoading(true);
          loadMore(selectedCategory, pageNumber + 1);
        }}
      >
        Load More
      </StyledButton>
    </div>
  );
}
