import theme from "../../theme";
import Typography from "../Typography";
import { ContainerMariah, Content, Folha, Gato, Info } from "./style";

function Mariah() {
    return (
        <ContainerMariah>
            <Folha src="/mariah/folha.svg" />
            <Content>
                <Info>
                    <Typography color={theme.colors.primary.primary3} variant="secondary" type="h2"> Mariah Eduarda </Typography>
                    <Typography color={theme.colors.primary.primary3} variant="primary" type="subtitle2" >Te amo sem saber como, nem quando, nem onde, te amo diretamente sem problemas nem orgulho: assim te amo porque não sei amar de outra maneira.</Typography>
                </Info>
                <Gato src="/mariah/gato mariah.png" />
            </Content>
        </ContainerMariah>
    )
}

export default Mariah;