import styled from "styled-components";

export const StyledWrapper = styled.div`
    height:80px;
    width:80px;
    padding:5px;
`
export const StyledCatImage = styled.img`
    position: relative;
    &:hover{
        transform: scale(110%);
        transition: 0.3s ease-out;
    }
`
