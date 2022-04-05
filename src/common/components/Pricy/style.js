import styled from "styled-components"

export const ContainerPricy = styled.div`
    background: ${props => {
        return props.theme.colors.primary.primary4;
    }};
        display: flex;
        flex-direction: row-reverse;    
        justify-content: start;
        height: 400px;
        padding: 16px;
        position: relative;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const Gato = styled.img`
    
`

export const Folha = styled.img`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    transform: rotate(-126deg);
    bottom: 0;
`   

export const Info = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-itens: end;
    gap: 32px;
`