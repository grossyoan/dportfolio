import * as React from 'react';
import {StyledLink} from 'baseui/link';
import {Block} from 'baseui/block';

export default ({href, children, ...props}) => (
  <Block font="font450"
  overrides={{
      Block:{
          style:{
              position: "absolute",
              right: "5%",
              bottom: "5%",
          }
      }
  }}
  >
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  </Block>
);
