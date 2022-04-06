import { Container } from "./style";

function Typography({
    variant = "",
    type = "", 
    bold = false,
    color = "",
    textAlign ="",
    children
}) {
    return(
        <Container textAlign={textAlign}color={color} variant={variant} type={type} bold={bold}> 
            {children}
        </Container>
    )
}

export default Typography;