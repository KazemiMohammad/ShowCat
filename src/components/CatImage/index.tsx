import React from 'react'
import { ICatImage } from '../../redux/types'
import { StyledCatImage, StyledWrapper } from './CatImage.styled';


function CatImage({height,width,url,id}:ICatImage) {
  return (
    <StyledWrapper>
      <StyledCatImage height={"100%"} width={"100%"} src={url} alt={id} />
    </StyledWrapper>
  )
}

export default React.memo(CatImage)