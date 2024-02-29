import styled from "styled-components";

const ErrorGet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(theme) => theme.theme.colorPokemon}; 
    background-color: ${(theme) => theme.theme.background}; 
    min-height: 80vh;
`

export  { ErrorGet }