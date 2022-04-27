import Typography from "../Typography";
import { useMediaQuery } from '@chakra-ui/react'
import { Container, LogoContent } from "./style";

function Logo() {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')


    return (
            <Container>
                <LogoContent>
                    <Typography variant="secondary" type={isMobile ? "subtitle1" : "h1" }> ( Mariah e Pricy ) </Typography>
                </LogoContent>
                
            </Container>
            
    )
}

export default Logo;