import styled from "styled-components"

export const StyledCategoryList = styled.ul`
    padding:0;
    line-height:2rem;
    font-size:1rem;
    font-weight:bold;
    color:white;
`
interface StyledCategoryItemProps {
    isSelected: boolean
}
export const StyledCategoryItem = styled.li<StyledCategoryItemProps>`
    cursor:pointer;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    text-shadow: ${(props) => (props.isSelected ? `2px 2px #145d60` : '')};
    font-size: ${(props) => (props.isSelected ? `1.3rem` : '')};
`