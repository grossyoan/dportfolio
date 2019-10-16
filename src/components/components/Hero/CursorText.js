import React, {forwardRef, useEffect} from "react";
import PropTypes from "prop-types";
import cursorTextFollowing from "helpers/cursorTextFollowing";
import {H1} from "baseui/typography"
import {styled} from "baseui"

const StyledCursor = styled('h3', ({ref,...props}) => 
    ({
        position:"absolute",
        color:"white "
    }),
)

const CursorText = forwardRef(({children,...props}, ref) => {
    useEffect(() => {
        cursorTextFollowing(ref.current)
    })    
    return(
        <StyledCursor
        ref={ref}
        >{children}</StyledCursor>
    )
})



export default CursorText;