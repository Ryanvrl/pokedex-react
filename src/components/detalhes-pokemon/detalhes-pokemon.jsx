import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { urlDefault } from "../../services/urls/urls"
import { ThemeContext } from "../contexts/theme-context"
import { useParams } from "react-router-dom"
import { BarFunctions } from "../barFunctions/BarFunctions"
import { TypeComponent } from "../typeComponent/typeComponent"


const getPokemon = async (id) => {
    const response = await axios.get(`${urlDefault}/${id}`)
    return await response.data
}

const DetalhesPokemon = () => {
    const [pokemon, setPokemon] = useState({})
    const [image, setImage] = useState('')
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])
    const { theme } = useContext(ThemeContext)
    const idPoke = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemon(idPoke.idPoke)
            setPokemon(response)
            setImage(response.sprites.other.home.front_default)
            getMoves(response)
            getAbilities(response)
            setTypes(response.types)
        }
        fetchData()
    }, [])

    const getMoves = (pokemon) => {
        const movesTotal = []
        for (let i = 0; i <= pokemon.moves.length - 1; i++) {
            movesTotal.push(pokemon.moves[i])
        }
        setMoves(movesTotal);
    }

    const getAbilities = async (pokemon) => {
        let urlAbility = []
        let abilitiesFinal = []
        urlAbility = pokemon.abilities.map((abili) => urlAbility = (abili.ability.url))

        const response = await axios.all(urlAbility.map((url) => axios.get(url).then((res) => abilitiesFinal.push(res.data))))
        console.log(abilitiesFinal);
        setAbilities(abilitiesFinal)
    }

    return (
        <Main theme={theme}>
            <div className="functions">
                <BarFunctions />

            </div>
            <div className="pokemon-page">
                <div className="info-pokemon">
                    <h1 className="title-pokemon">{pokemon.name}</h1>
                    <div className="container-type info">
                        <h3 className="title-type title">Type</h3>
                        <div className="types">
                            {types
                                .map((types) =>
                                    <TypeComponent key={types.type.name} type={types.type.name} theme={theme} className="type-component"> 
                                        {types.type.name}
                                    </TypeComponent>
                                )
                            }
                        </div>
                    </div>

                </div>
                <img src={image} alt="Pokemon imagem" className="pokemon-imagem" />
            </div>
            <div className="abilities-container">
                <h3 className="title-abilities title">Abilities</h3>
                {abilities.map((abilitys) =>
                    <div key={abilitys.id}>
                        {abilitys.name}
                        <div>
                            {abilitys.effect_entries[1].effect}
                        </div>
                    </div>
                )}

            </div>
            <div className="moves-container">
                <h3 className="title-moves title">Moves</h3>
                {moves.map((move) =>
                    <span key={move.move.name}
                        className="move"
                    >{move.move.name}</span>
                )
                }
            </div>
        </Main>
    )
}

const Main = styled.main`
    background-color: ${(theme) => theme.theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    font-family: Rubik;

    .pokemon-page {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .functions {
        width: 100%;
    }

    .info-pokemon {
        padding: 20px;
        border-radius: 10px;
        background-color: ${(theme) => theme.theme.backgroundPokemon};
        color: ${(theme) => theme.theme.colorPokemon};
        width:400px;
    }

    .title-pokemon {
        font-size: 50px;
        text-align: center;
        margin-bottom: 40px;
    }

    .pokemon-imagem {
        width: 400px;
        border-radius: 10px;
        padding-bottom: 10px;
        background-color: ${(theme) => theme.theme.backgroundPokemon};
    }

    .title {
        text-align: center;
        margin-bottom: 15px;
    }

    .types {
        display: flex;
        justify-content: space-evenly;
    }
    
    .type-component {
        margin: 0;
    }

    .abilities-container {
        background-color: ${(theme) => theme.theme.backgroundPokemon};
        color: ${(theme) => theme.theme.colorPokemon};
        margin: 40px 20px;
        padding: 20px;
        border-radius: 10px;
    }

    .moves-container {
        color: ${(theme) => theme.theme.colorPokemon};
        background-color: ${(theme) => theme.theme.backgroundPokemon};
        margin:20px;
        padding: 20px;
        border-radius: 10px;
    }

    .move {
        display: inline-block;
        margin: 10px 10px 0 0;
        border-radius: 10px;
        padding: 5px 7px;
        background-color: ${(theme) => theme.theme.backgroundInfos};
        color: ${(theme) => theme.theme.colorPokemon};
    }

    @media (min-width: 1250px) {
        .pokemon-imagem {
            width: 700px;
        }
    } 
`

export { DetalhesPokemon }