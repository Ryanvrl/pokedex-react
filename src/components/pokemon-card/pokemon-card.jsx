import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { TypeComponent } from "../typeComponent/typeComponent"
import { colours } from "../colorTypes/colorTypes"

const CardPokemon = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Card className="cards" theme={theme} type={pokemon.types[0].type.name}>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className='img-card' />
            <span className="number">Nº{pokemon.id}</span>
            <h3 className="name-pokemon">{pokemon.name}</h3>
            <div className="types">
                {pokemon.types.
                    map((types) =>
                        <TypeComponent key={types.type.name} type={types.type.name} theme={theme}>
                            {types.type.name}
                        </TypeComponent>
                    )}
            </div>
        </Card>
    )
}

const Card = styled.li` 
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin: 3px;
    margin-bottom: 30px;
    font-family: rubik;
    border-radius: 10px;
    transition: ease-in-out 0.3s;
    padding-bottom: 10px;
    color: ${(theme) => theme.theme.colorPokemon};
    &:hover { 
        cursor: pointer;
        color: ${(theme) => theme.theme.colorPokemonHover};
        background-color: ${(type) => colours[type.type]};
    }
    
    .number {
        font-weight: 300; 
    }

    .img-card {
        width: 230px;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 10px;
        background-color: ${(type) => colours[type.type]};
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
            width: 270px;
        }
    } 

    @media (min-width: 1600px) {
        .img-card {
            width: 300px;
        }
    }  

    @media (min-width: 1850px) {
        .img-card {
            width: 340px;
        }
    } 

    @media (max-width: 850px) {
        .img-card {
            width: 150px;
        }
    }

    @media (max-width: 390px) {
        .img-card {
            width: 110px;
        }
    }   
`

export { CardPokemon }