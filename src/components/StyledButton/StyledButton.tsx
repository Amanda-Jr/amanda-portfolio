import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
    onClick: ()=> void
}

const StyledButton: React.FC <StyledButtonProps> = ({children, onClick}) => {

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
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
