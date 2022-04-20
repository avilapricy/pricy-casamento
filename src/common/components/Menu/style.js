import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 8px;
    

`

export const Item = styled.li`
    cursor: pointer;
    width: 123px;
    height: 32px;
    display: flex;
    justify-content: center;
    padding: 10px;
    &:hover {
        background: ${props => {
        return props.theme.colors.basic.basic4;
        }}
    }
    
        color: ${props => {
        return props.theme.colors.secondary.secondary1;
    }}

`