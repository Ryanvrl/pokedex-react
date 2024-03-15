import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { TypeComponent } from "../typeComponent/typeComponent"
import { colours } from "../colorTypes/colorTypes"
import { getPokemon } from "../../services/requestApi"

const CardPokemon = ({ pokemon }) => {
    const pokemonsList = pokemon
    const { theme } = useContext(ThemeContext)

    return (
        <>
            {pokemonsList.map((element, index) => {
                return (  <Card className="cards" theme={theme} type={element.types[0].type.name} key={index}>
                <img src={element.sprites.front_default} alt={element.name} className='img-card' />
                <span className="number">Nº{element.id}</span>
                <h3 className="name-pokemon">{element.name}</h3>
                <div className="types">
                    {element.types.
                        map((types) =>
                            <TypeComponent key={types.type.name} type={types.type.name} theme={theme}>
                                {types.type.name}
                            </TypeComponent>
                        )}
                </div>
            </Card>

                )
            })
               
            }

        </>

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
        height: 230px;
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
    }
    
    @media (max-width: 390px) {
        .img-card {
            height: 110px;
            width: 110px;
        }
    }   
`

export { CardPokemon }