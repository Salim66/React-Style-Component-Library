import styled from "styled-components"


export const Button = styled.button`
    display: 'inline-block';
    background-color: ${({bg, color}) => bg };
    border: 1 px solid ${({bg, color}) => bg };
    border-radius: 5px;
    color: ${({bg, color}) => color ?? '#FFF' };
    padding: 5px 10px;

    &:hover {
        background: transparent;
        color: ${({bg, color}) => bg };
    }
`