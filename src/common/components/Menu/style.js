import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 5px;
`

export const Item = styled.li`
    cursor: pointer;
    border-radius: 10px;
    width: 123px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    &:hover {
        background: ${props => {
        return props.theme.colors.basic.basic4;
        }}
    }
    
        color: ${props => {
        return props.theme.colors.secondary.secondary1;
    }}


`