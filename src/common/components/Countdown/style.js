import styled from "styled-components";

export const Container = styled.div`
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => {
        return props.theme.colors.primary.primary2;
    }};

    color: ${props => {
        return props.theme.colors.secondary.secondary4;
    }};
`

export const Content = styled.div`
    width: fit-content;
    display: flex;
    gap: 6px;
`


export const ContainerItemCountdown = styled.div`
    display: flex;
    gap: 2px;
    flex-direction: column;
`

export const ItemsItemCountdown = styled.div`
    display: flex;
    gap: 2px;
}
`