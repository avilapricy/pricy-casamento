import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 200px;

    background: ${(props) => {
        return props.theme.colors.secondary.secondary1;
    }};
` 