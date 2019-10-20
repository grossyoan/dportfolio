import * as React from "react";
import { Block } from "baseui/block";
import { StyledLink } from "baseui/link";

export default ({ href, children, ...props }) => (
  <Block
    overrides={{
      Block: {
        style: {
          position: "absolute",
          bottom: "50px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontSize: ".8em",
          flexWrap: "wrap"
        }
      }
    }}
  >
    <Block overrides={{ Block: { style: { margin: "0px 5% 0px 0px" } } }}>
      <StyledLink href="https://www.instagram.com/doriane_o/?hl=fr">
        Instagram
      </StyledLink>
    </Block>
    <Block overrides={{ Block: { style: { margin: "0px 5%" } } }}>
      <StyledLink href="https://www.arstation.com">Artstation</StyledLink>
    </Block>
    <Block overrides={{ Block: { style: { margin: "0px 5%" } } }}>
      <StyledLink href="https://www.malt.fr/profile/dorianeolivier">
        Malt
      </StyledLink>
    </Block>
    <Block overrides={{ Block: { style: { margin: "0px 5%" } } }}>
      <StyledLink href="mailto:doriane.olivier@gmail.com">E-Mail</StyledLink>
    </Block>
  </Block>
);
