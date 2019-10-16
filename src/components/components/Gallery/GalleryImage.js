import PropTypes from "prop-types";
import { styled } from "baseui";

const GalleryImage = styled("img", ({ ...props }) => ({
  objectFit: "cover",
  padding: "4px 4px"
}));

GalleryImage.propTypes = {
  src: PropTypes.string,
  animationDelay: PropTypes.string,
  heightAnimation: PropTypes.bool,
  isHovered: PropTypes.bool
};

GalleryImage.defaultProps = {
  src: "",
  animationDelay: "0s",
  heightAnimation: false,
  isHovered: false
};

export default GalleryImage;
