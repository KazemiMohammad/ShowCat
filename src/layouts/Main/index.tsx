import React, { useState } from "react";
import CategoryList from "../../components/Category";
import CatList from "../../components/CatList";
import { StyledButton } from "../../components/General/Button.styled";
import {
  StyledCategoryListContainer,
  StyledContainer,
  StyledCatListContainer
} from "./MainLayout.styled";

export default function MainLayout() {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledContainer>
      <StyledCategoryListContainer showMenu={showMenu}>
        <StyledButton className="menuToggle" onClick={toggleMenu} />
        <div className="categoryList">
          <CategoryList />
        </div>
      </StyledCategoryListContainer>
      <StyledCatListContainer>
        <CatList />
      </StyledCatListContainer>
    </StyledContainer>
  );
}
