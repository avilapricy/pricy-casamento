import styled from "styled-components"

export const ContainerMariah = styled.div`
    display: flex;
    position: relative;
    justify-content: end;
    height: 400px;
    padding: 16px;
    overflow: hidden;
    
    @media (max-width: 375px) and (max-height: 667px) {
        height: 202px;
    }
`

export const Content = styled.div`
    display: flex;
    gap: 90px;
    @media (max-width: 375px) and (max-height: 667px) {
        gap: 18px;
    }
`

export const Duda = styled.img`
    display: flex;
    justify-content: flex-end;
    width: 297px;
    height: 354px;
    border-radius: 155px;
    &:hover {
        transform: scale(1.3);
        trasition: transform .6s;
    }
    @media (max-width: 375px) and (max-height: 667px) {
            width: 202px;
            height: 140px;
    }
`

export const Folha = styled.img`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    left: -171.12px;
    transform: rotate(45deg);
    opacity: 0.2;
    width: 634px;
    height: 486px;
    top: -68.71px;
    @media (max-width: 375px) and (max-height: 667px) {
        transform: rotate(40deg);
        top: -145.7px;
        width: 600px;
    }
`

export const Info = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-itens: end;
    gap: 32px;
    @media (max-width: 375px) and (max-height: 667px) {
        gap: 9px;
    }
`

