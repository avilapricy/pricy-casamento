import Typography from "../Typography";
import { ContainerPricy, Content, Gato, Folha, Info } from "./style";
import theme from "../../theme"

function Pricy () {
    return(
        <ContainerPricy>
            <Folha src="/pricy/folha.svg" />
            <Content>
                <Info>
                    <Typography color={theme.colors.secondary.secondary3} variant="secondary" type="h2">Pricy Ávila</Typography>
                    <Typography color={theme.colors.secondary.secondary3} variant="primary" type="subtitle">Te amo sem saber como, nem quando, nem onde, te amo diretamente sem problemas nem orgulho: assim te amo porque não sei amar de outra maneira.</Typography>
                </Info>
            <Gato src="/pricy/gato pricila.png"/>    
            </Content>
        </ContainerPricy>
    )
}

export default Pricy;