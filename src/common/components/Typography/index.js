import { Container } from "./style";

function Typography({
    variant = "",
    type = "", 
    bold = false,
    color = "",
    children
}) {
    return(
        <Container color={color} variant={variant} type={type} bold={bold}> 
            {children}
        </Container>
    )
}

export default Typography;