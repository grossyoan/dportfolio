import * as React from "react"
import Link from "./Link"
export default ({ href, children, ...props }) => (
  <div
    css={{
      position: "absolute",
      bottom: "2%",
    }}
  >
    <div
      css={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        fontSize: ".6em",
        flexWrap: "wrap",
        marginBottom: "10px",
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
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        right: "0",
        bottom: "2%",
        fonSize: "inherit",
        fontSize: ".4em",
      }}
    >
      <a
        css={{
          color: "white",
          textDecoration: "none",
        }}
        href="https://grossyoan.fr"
      >
        Developed with ❤️ by Yoan Gross
      </a>
    </div>
  </div>
)
