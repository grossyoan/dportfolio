import React, { useEffect, useRef, useState } from "react"
import { css } from "@emotion/core"

export default ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(undefined)
  useEffect(() => {
    const cb = () => {
      setIsLoaded(true)
    }
    ref.current.addEventListener("load", cb)

    return () => ref.current.removeEventListener("load", cb)
  }, [])
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      css={css`
        object-fit: cover;
        width: auto;
        height: 100%;
        @media screen and (max-width: 880px) {
          width: 100%;
          height: auto;
        }
        transition: opacity, 0.5s ease;
        opacity: ${isLoaded ? 1 : 0};
      `}
    />
  )
}
