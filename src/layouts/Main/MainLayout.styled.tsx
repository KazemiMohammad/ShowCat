import styled from "styled-components";
import { colors, deviceSize } from "../../utils/styleConst";
import menu from "../../assets/images/menu.png"
import close from "../../assets/images/close.png"
export const StyledContainer = styled.div`
  background-color: #f6f7eb;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  height: 100%;
  @media (max-width: ${deviceSize.mobileL}) {
    grid-template-columns: 50px 3fr;
  }
`;
interface StyledCategoryListContainerProps {
  showMenu: boolean;
}
export const StyledCategoryListContainer = styled.div<StyledCategoryListContainerProps>`
  background-color: ${colors.oceanGreen};
  grid-area: 1 / 1 / 2 / 2;
  padding: 10px;
  -webkit-box-shadow: 5px 0px 13px 1px rgba(63, 129, 161, 0.5);
  box-shadow: 5px 0px 13px 1px rgba(63, 129, 161, 0.5);
  display: flex;
  flex-direction: column;
  transition-duration: .5s;
  .menuToggle {
    visibility: hidden;
    background-image:url(${(props) => (props.showMenu ? close : menu)});
    background-repeat: no-repeat;
    background-position: center;

  }

  @media (max-width: ${deviceSize.mobileL}) {
    padding-top:70px;
    position: fixed;
    top:0;
    height:100vh;
    width: ${(props) => (props.showMenu ? "150px" : "30px")};
    z-index:1;
    .categoryList {
      display: ${(props) => (props.showMenu ? "visible" : "none")};
    }
    .menuToggle {
      height:50px;
      width:50px;
      position:absolute;
      top:0;
      left:0;
      visibility: visible;

    }
  }
`;
export const StyledCatListContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  overflow-x: scroll;
`;
