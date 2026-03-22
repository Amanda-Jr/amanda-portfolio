import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/amandaDev-moldura.png"


const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor:" #E3D0EA",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
    }))

    return (
        <>
            
            <StyledHero>

                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar}/>
                            <Typography variant="h4" textAlign="center" >Amanda da Silva</Typography>
                            <Typography variant="h6" textAlign="center" >Desenvolvedora Backend</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h4" textAlign="center" > "Cada linha de código é uma semente que planto com carinho" </Typography>
                            <Grid container display={"flex"} justifyContent={"center"}>
                                <Grid size={{ xs: 12, md: 3 }} display={"flex"} justifyContent={"center"}>
                                    <button>
                                        Baixar currículo
                                    </button>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }}  display={"flex"} justifyContent={"center"}>
                                    <button>
                                        Contato
                                    </button>
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
