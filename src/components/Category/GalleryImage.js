import { styled } from "baseui"

const GalleryImage = styled("img", ({ ...props }) => ({
  objectFit: "cover",
  width: "auto",
  height: "100%",
  "@media screen and (max-width: 880px)": {
    width: "100%",
    height: "auto",
  },
}))

export default GalleryImage
