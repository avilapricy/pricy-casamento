import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: 480px) {
        font-size: 47px;
        text-align: center;
    }
    `

export const LogoContent = styled.div`
    &:hover {
        transform: scale(1.3);
        trasition: transform .6s;
    }
`
