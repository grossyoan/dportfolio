import React from "react"
import PropTypes from "prop-types"

const CategoryGallery = ({ children, heroButtonClicked, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "4px 4px",
        marginBottom: "100px",
      }}
    >
      {children}
    </div>
  )
}

CategoryGallery.propTypes = {
  children: PropTypes.object,
}

CategoryGallery.defaultProps = {
  children: {},
}

export default CategoryGallery
