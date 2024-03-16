import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../components/contexts/theme-context"
import { useParams } from "react-router-dom"
import { colours } from "../../components/colorTypes/colorTypes"
import { TypeComponent } from "../../components/typeComponent/typeComponent"
import { Loading } from "../../components/loading/loading"

import { FaArrowLeft } from "react-icons/fa";
import { Header } from "../../components/header/header"
import { getPokeAbility, getPokemon } from "../../services/requestApi"
import { scrollToTop } from "../../services/functionsDefault"

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState(null)
    const [abilitiesFinal, setAbilitiesFinal] = useState(null)
    const [isPending, setIsPending] = useState(true)

    const { theme } = useContext(ThemeContext)

    const namePoke = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemon(namePoke.namePoke)
                .then(async res => {
                    setPokemon(res)
                    setAbilitiesFinal(await getPokeAbility(res.abilities))
                }).catch()

            scrollToTop()
            setIsPending(false)
        }
        fetchData()
    }, [])

    return (
        <>
            <Header />
            {isPending && <Loading />}
            {pokemon &&
                <Main theme={theme} type={pokemon.types[0].type.name}>
                    <div className="container-arrow">
                        <a href="/" className="link-arrow">
                            <FaArrowLeft className="icon-arrow" />
                        </a>
                    </div>
                    <div className="pokemon-page">
                        <div className="info-pokemon">
                            <h1 className="title-pokemon">{pokemon.name}</h1>
                            <div className="container-type info">
                                <h3 className="title-type title">Type</h3>
                                <div className="types">
                                    {pokemon.types
                                        .map((types) =>
                                            <TypeComponent key={Math.floor(Math.random() * 1000)} type={types.type.name} theme={theme} className="type-component">
                                                {types.type.name}
                                            </TypeComponent>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <img src={pokemon.sprites.front_default} alt="Pokemon imagem" className="pokemon-imagem" />
                    </div>
                    <div className="abilities-container">
                        <h3 className="title-abilities title">Abilities</h3>
                        {
                            abilitiesFinal &&

                            abilitiesFinal.map((abilitys) =>
                                <div key={Math.floor(Math.random() * 1000) + abilitys.id}>
                                    <h4 className="title-ability">{abilitys.name}</h4>
                                    <div className="text-ability">
                                        {abilitys.effect_entries.length == 0 ? '' : abilitys.effect_entries[1].effect}
                                    </div>
                                </div>
                            )

                        }

                    </div>
                    <div className="moves-container">
                        <h3 className="title-moves title">Moves</h3>
                        {pokemon.moves.map((move) =>
                            <span key={move.move.name} className="move">{move.move.name}</span>
                        )
                        }
                    </div>

                </Main>
            }
        </>
    )
}



const Main = styled.main`
    background-color: ${(theme) => theme.theme.background};
    color: ${(theme) => theme.theme.color};
    display: flex;
    min-height: 90vh;
    align-items: center;
    flex-direction: column;
    font-family: Rubik;
    padding-bottom: 30px;
    padding-top: 50px;
    .container-arrow {
        width: 100%;
    }

    .link-arrow {
        background-color: ${(type) => colours[type.type]};
        padding: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        margin-left: 80px;
    }

    .icon-arrow {  
        color: #fff;
    }

    .pokemon-page {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 10px;
    }

    .info-pokemon {
        padding: 20px;
        border-radius: 10px;
        background-color: ${(type) => colours[type.type]};
        width:400px;
    }

    .title-pokemon {
        font-size: 50px;
        text-align: center;
        margin-bottom: 40px;
    }

    .pokemon-imagem {
        width: 400px;
    }

    .title {
        text-align: center;
        margin-bottom: 15px;
    }

    .title-ability {
        margin: 30px 0 5px;
    }

    .text-ability {
        min-width: 225px;
    }

    .types {
        display: flex;
        justify-content: space-evenly;
    }
    
    .type-component {
        margin: 0;
    }

    .abilities-container {
        background-color: ${(type) => colours[type.type]};
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
        width: 1000px;
    }

    .moves-container {
        background-color: ${(type) => colours[type.type]};
        margin:10px;
        padding: 20px;
        border-radius: 10px;
        width: 1000px;
    }

    .move {
        display: inline-block;
        margin: 10px 10px 0 0;
        border-radius: 10px;
        padding: 5px 7px;
        background-color: ${(theme) => theme.theme.backgroundInfos};
    }

    @media (min-width: 1450px) {
        .pokemon-imagem {
            width: 700px;
        }
    } 

    @media (max-width: 1050px) {
        .moves-container {
            width: 90%;
        }

        .abilities-container {
            width: 90%;
        }
    } 

    @media (max-width: 850px) {

        .link-arrow {
            margin-left: 40px;
        }

        .pokemon-page {
            justify-content: center;
        }

        .pokemon-imagem {
            width: 300px;
        }

        .title-pokemon {
            font-size: 30px;
        }

        .info-pokemon {
            width: 300px;
        }
    } 

    @media (max-width: 680px) {
        .pokemon-imagem {
            width: 240px;
        }

        .info-pokemon {
            width: 240px;
        }
    } 

    @media (max-width:500px) {
        .pokemon-page {
            flex-direction: column-reverse;
        }

        .pokemon-imagem {
            width: 260px;
            margin-bottom: 20px;
        }

        .title-pokemon {
            font-size: 30px;
        }

        .info-pokemon {
            width: 260px;
        }
    } 

`

export { PokemonInfo }