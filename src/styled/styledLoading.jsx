import styled from "styled-components"

const LoadingComp = styled.div`
    background-color: ${(theme) => theme.theme.background};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rubik;
    color: ${(theme) => theme.theme.colorPokemon}; 
    padding: 20px 0;
    
    .loading-icon {
        margin-left: 5px;
        animation: rotate 0.3s infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
            
        }
    
        to {
            transform: rotate(360deg);
        }
    }
`

export { LoadingComp }