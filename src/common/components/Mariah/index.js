import theme from "../../theme";
import Typography from "../Typography";
import { useMediaQuery } from '@chakra-ui/react'
import { ContainerMariah, Content, Folha, Gato, Info } from "./style";

function Mariah() {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')
    
    return (
        <ContainerMariah>
            <Folha src="/mariah/folha.svg" />
            <Content>
                <Info>
                    <Typography textAlign="end" color={theme.colors.primary.primary3} variant="secondary" type={isMobile ? "subtitle1" : "h2"}> Mariah Eduarda </Typography>
                    <Typography textAlign="end" color={theme.colors.primary.primary3} variant="primary" type={isMobile ? "paragraphy1" : "subtitle2"} >Te amo sem saber como, nem quando, nem onde, te amo diretamente sem problemas nem orgulho: assim te amo porque não sei amar de outra maneira.</Typography>
                </Info>
                <Gato src="/mariah/gato mariah.png" />
            </Content>
        </ContainerMariah>
    )
}

export default Mariah;