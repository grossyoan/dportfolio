import { styled } from "baseui";

const GalleryImage = styled("img", ({ ...props }) => ({
  objectFit: "cover",
  width: "100%",
  height: "auto"
}));

export default GalleryImage;
