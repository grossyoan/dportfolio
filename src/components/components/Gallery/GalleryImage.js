import { styled } from "baseui";

const GalleryImage = styled("img", ({ ...props }) => ({
  objectFit: "cover",
  padding: "4px 4px",
  width: "350px",
  height: "200px"
}));

export default GalleryImage;
