import styled from "styled-components";

export const Container = styled.div `
    width: 21px;
    height: 29px;
    padding: 4px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: ${props => {
        return props.theme.colors.primary.primary4;
    }};

    color: ${props => {
        return props.theme.colors.secondary.secondary4;
    }};
`