import styled from "styled-components"

const Function = styled.div`
    background-color: #202C37;    
    padding: 15px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .bar-search { 
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        }
    
    .input-pokemon {
        background-color: transparent;
        border: 0;
        font-size: 15px;
        color: #fff;
        outline: none;
        margin-right: 8px;
        width: 180px;
    }    
    
    .input-pokemon::placeholder {
        color: #f1f1f1;
    }
    
    @media (max-width: 550px) {
        .input-pokemon {
            width: 90px;
        }
    }
`

export { Function }