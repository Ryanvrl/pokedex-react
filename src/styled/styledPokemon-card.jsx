import styled from "styled-components"
import { colours } from "../components/colorTypes/colorTypes"

const Card = styled.li` 
    margin: 3px;
    margin-bottom: 30px;
    font-family: rubik;
    padding-bottom: 10px;
    border-radius: 10px;
    
    
    .link {
        border-radius: 10px;
        display: flex;   
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        text-decoration: none;
        transition: ease-in-out 0.3s;
        color: ${(theme) => theme.theme.colorPokemon};
    }

    .link:hover .img-card {
        box-shadow: none;
    }

    .link:hover { 
        cursor: pointer;
        border-radius: 10px;
        color: ${(theme) => theme.theme.colorPokemonHover};
        background-color: ${(type) => colours[type.type]};
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    
    
    .number {
        font-weight: 300; 
    }

    .img-card {
        height: 230px;
        width: 230px;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 10px;
        background-color: ${(type) => colours[type.type]};
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .name-pokemon {
        font-size: 20px;   
        font-weight: 400;
    }

    .types {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    @media (min-width: 1400px) {
        .img-card {
            height: 270px;
            width: 270px;
        }
    } 

    @media (min-width: 1600px) {
        .img-card {
            height: 300px;
            width: 300px;
        }
    }  

    @media (min-width: 1850px) {
        .img-card {
            height: 340px;
            width: 340px;
        }
    } 
    
    @media (max-width: 850px) {
        .img-card {
            height: 150px;
            width: 150px;
        }

        .name-pokemon {
            font-size: 16px;   
        }
    }
    
    @media (max-width: 390px) {
        .img-card {
            height: 110px;
            width: 110px;
        }
    }   
`

export { Card}