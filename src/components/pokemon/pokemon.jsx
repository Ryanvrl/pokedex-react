import styled from "styled-components"
import './pokemon.css'
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { useState } from "react"
import { TypeComponent } from "../typeComponent/typeComponent"

const CardPokemon = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)
    const [isHover, setIsHover] = useState(false);


    const handleMouseEnter = () => {
        setIsHover(true);
    }
    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const boxStyle = {
        backgroundColor: isHover ? theme.backgroundPokemon : '',
    }

    return (

        <Card className="cards" style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img src={pokemon ? pokemon.sprites.other.home.front_default: '<div>Carregando...</div>'} alt={pokemon.name} className='img-card' style={{ backgroundColor: theme.backgroundPokemon }} />
            <span className="number" style={{ color: theme.colorPokemon }}>Nº{pokemon.id}</span>
            <h3 style={{ color: theme.colorPokemon }} className="name-pokemon">{pokemon.name}</h3>
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
    &:hover { 
        cursor: pointer;
    }
    
    .number {
        font-weight: 300; 
    }

    .img-card {
        width: 230px;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 10px;
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