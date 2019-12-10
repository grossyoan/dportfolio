import * as React from "react"
import Link from "./Link"
export default ({ href, children, ...props }) => (
  <div
    css={{
      position: "absolute",
      bottom: "6%",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      fontSize: ".6em",
      flexWrap: "wrap",
    }}
  >
    <div css={{ margin: "0px 3% 0px 0px" }}>
      <Link href="https://www.instagram.com/doriane_o/?hl=fr">Instagram</Link>
    </div>
    <div css={{ margin: "0px 3%" }}>
      <Link href="https://www.arstation.com">Artstation</Link>
    </div>
    <div css={{ margin: "0px 3%" }}>
      <Link href="https://www.malt.fr/profile/dorianeolivier">Malt</Link>
    </div>
    <div css={{ margin: "0px 3%" }}>
      <Link href="mailto:doriane.olivier@gmail.com">E-Mail</Link>
    </div>
  </div>
)
