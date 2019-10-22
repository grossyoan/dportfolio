import * as React from "react"

export default ({ href, children, ...props }) => (
  <a
    href={href}
    style={{
      color: "white",
      textDecoration: "none",
    }}
  >
    {children}
  </a>
)
