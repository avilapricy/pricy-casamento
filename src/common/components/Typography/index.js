import { Container } from "./style";

function Typography({
    variant = "",
    type = "", 
    children
}) {
    return(
        <Container variant={variant} type={type}> 
            {children}
        </Container>
    )
}

export default Typography;