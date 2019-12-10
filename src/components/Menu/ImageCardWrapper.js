import React, { useState } from "react"
import useHover from "../../helpers/useHover"
import ImageCard from "./ImageCard"
import ImageText from "./ImageText"
const ImageCardWrapper = ({
  gridArea,
  children,
  src,
  imageAnimationDelay,
  textAnimationDelay,
  font,
  heightanimation,
  ...props
}) => {
  const [hoverRef, ishovered] = useHover()
  const [selected, setSelected] = useState(false)
  return (
    <div
      ref={hoverRef}
      onClick={() => {
        setSelected(!selected)
      }}
      css={{
        position: "relative",
        background: "black",
        gridArea: gridArea,
        overflow: "hidden",
        transition: "transform 1s ease",
        width: "100%",
      }}
      {...props}
    >
      <ImageCard
        heightanimation={heightanimation}
        src={src}
        animationdelay={imageAnimationDelay}
        ishovered={ishovered}
        isSelected
      />
      <ImageText animationdelay={textAnimationDelay} font={font}>
        {children}
      </ImageText>
    </div>
  )
}

export default ImageCardWrapper
