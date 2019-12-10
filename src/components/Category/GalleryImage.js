import styled from "@emotion/styled"

const GalleryImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  @media screen and (max-width: 880px) {
    width: 100%;
    height: auto;
  }
`

export default GalleryImage
