import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/fotoAmanda.jpg"
import StyledButton from "../../../../components/StyledButton/StyledButton"


const Hero = () => {

    const StyledHero = styled("div")(({theme})=> ({
        //backgroundColor:" #E3D0EA",
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        paddingTop: "50px",
        
    }))

    const StyledImg = styled("img")(({theme})=> ({
        width: "100%",
        border: `5px solid ${theme.palette.secondary.main}`
    }))

    return (
        <>
            
            <StyledHero>

                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box>
                                <StyledImg src={Avatar}/>
                                <Typography color="#3a1636" variant="h4" textAlign="center" >Amanda da Silva</Typography>
                                <Typography color="#3a1636" variant="h5" textAlign="center" >Desenvolvedora Backend</Typography>
                            </Box>
                            
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }} alignContent={"center"} >
                            
                            <Typography  color="#374126" variant="h5" textAlign="center" > "Cada linha de código é uma semente que planto com carinho" </Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                                
                                <Grid size={{ xs: 12, md: 3 }}  display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <Typography>Contato</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }}  display={"flex"} justifyContent={"center"}>
                                    
                                    <StyledButton>
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
