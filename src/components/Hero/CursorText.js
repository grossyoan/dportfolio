import React, { forwardRef, useEffect } from "react"
import cursorTextFollowing from "../../helpers/cursorTextFollowing"
import { styled } from "baseui"

const StyledCursor = styled("h3", ({ ref, ...props }) => ({
  position: "absolute",
  color: "white ",
  fontSize: ".7em",
}))

const CursorText = forwardRef(({ children, ...props }, ref) => {
  useEffect(() => {
    cursorTextFollowing(ref.current)
  }, [])
  return (
    <StyledCursor ref={ref} {...props}>
      {children}
    </StyledCursor>
  )
})

export default CursorText
