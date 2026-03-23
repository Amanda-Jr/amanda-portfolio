import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}

const StyledButton: React.FC <StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(({theme})=> ({
        backgroundColor: `${theme.palette.secondary.main}`,
        border: "none",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: `${theme.palette.secondary.contrastText}`,
        '&:hover':{
            backgroundColor: `${theme.palette.secondary.dark}`
        }
    }))

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
