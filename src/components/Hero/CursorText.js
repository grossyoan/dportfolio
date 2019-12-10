import React, { forwardRef, useEffect } from "react"
import cursorTextFollowing from "../../helpers/cursorTextFollowing"

const CursorText = forwardRef(({ children, ...props }, ref) => {
  useEffect(() => {
    cursorTextFollowing(ref.current)
  }, [])
  return (
    <h3
      css={{
        position: "absolute",
        color: "white ",
        fontSize: ".7em",
      }}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  )
})

export default CursorText
