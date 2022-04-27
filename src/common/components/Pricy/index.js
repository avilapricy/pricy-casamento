import Typography from "../Typography";
import { ContainerPricy, Content, Pri, Folha, Info } from "./style";
import theme from "../../theme"
import { useMediaQuery } from "@chakra-ui/react";

function Pricy () {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')

    return(
        <ContainerPricy>
            <Folha src="/pricy/folha.svg" />
            <Content>
                <Info>
                    <Typography color={theme.colors.secondary.secondary3} variant="secondary" type={isMobile ? "subtitle1" : "h2"}>Pricy Ávila</Typography>
                    <Typography color={theme.colors.secondary.secondary3} variant="primary" type={isMobile ? "paragraphy2" : "subtitle2"}>Te amo sem saber como, nem quando, nem onde, te amo diretamente sem problemas nem orgulho: assim te amo porque não sei amar de outra maneira.</Typography>
                </Info>
                <Pri src="/pricy/prii.jpeg"/>    
            </Content>
        </ContainerPricy>
    )
}

export default Pricy;