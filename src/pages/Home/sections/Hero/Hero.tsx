import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/fotoAmanda.jpg"
import StyledButton from "../../../../components/StyledButton/StyledButton"
import theme from "../../../../theme"


const Hero = () => {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",  
        
    }))

    const StyledImg = styled("img")(({theme})=> ({
        width: "95%",
        border: `5px solid ${theme.palette.secondary.main}`,
        
    }))

    return (
        <>
            
            <StyledHero >

                <Container maxWidth="lg" >

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }} marginTop={{xs:10, md:0}}>
                            <Box display={"flex"} justifyContent={"center"}>
                                <StyledImg src={Avatar}/>
                            </Box>
                            <Typography color="#3a1636" variant="h4" textAlign="center" pt={1} >Amanda da Silva</Typography>
                            <Typography color="#3a1636" variant="h5" textAlign="center" >Desenvolvedora Backend</Typography>
                            
                            
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }} alignContent={"center"} >
                            
                            <Typography  color="#374126" variant="h4" textAlign="center" pb={2} fontFamily={"Pixelify Sans"} > "Cada linha de código é uma semente que planto com carinho" </Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                                
                                <Grid size={{ xs: 12, md: 3 }}  display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick ={()=> console.log("contact")} >
                                        <Typography>Contato</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }}  display={"flex"} justifyContent={"center"}>
                                    
                                    <StyledButton onClick ={()=> console.log("download")} >
                                        <Typography>Baixar CV</Typography>
                                    </StyledButton>
                                </Grid>
                                
                            </Grid>
                            
                        </Grid>
                    </Grid>

                </Container>

            </StyledHero>
        </>
    )
}

export default Hero
