import styled from "styled-components";

export const Container = styled.div`
    trasition: transform .2s;
    &:hover {
        transform: scale(1.3);
        trasition: transform .6s;
    }
    @media (min-width: 480px) {
        font-size: 47px;
        text-align: center;
    }
    `
