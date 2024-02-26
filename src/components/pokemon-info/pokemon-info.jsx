import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { urlDefault } from "../../services/urls/urls"
import { ThemeContext } from "../contexts/theme-context"
import { useParams } from "react-router-dom"
import { BarFunctions } from "../barFunctions/BarFunctions"
import { TypeComponent } from "../typeComponent/typeComponent"
import { Loading } from "../loading/loading"



const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState({})
    const [image, setImage] = useState('')
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
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
            setTimeout(async () => {
                setRemoveLoading(true)
                await response
            }, 500);
            setRemoveLoading(false)
        }
        fetchData()
    }, [])

    const getPokemon = async (id) => {
        const response = await axios.get(`${urlDefault}/${id}`)
        return await response.data
    }

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
        setAbilities(abilitiesFinal)
    }

    // AO ROLAR A PAGINA INICIAL PARA BAIXO E CLICAR NO PIKACHU POR EXEMPLO, A SCROLL BAR DA PAGINA DE DETALHES DO POKEMON COMEÇA POR BAIXO, NÃO CONSEGUI RESOLVER ISSO. E TAMBÉM OS AVISOS DO CONSOLE SOBRE A FONTE DA LOGO.

    return (
        <Main theme={theme}>
            <div className="functions">
                <BarFunctions />
            </div>
            {removeLoading === true &&
                <>
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
                                <h4 className="title-ability">{abilitys.name}</h4>
                                <div className="text-ability">
                                    {abilitys.effect_entries.length == 0 ? '' : abilitys.effect_entries[1].effect}
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
                </>
            }
            {!removeLoading && <Loading />}
        </Main>
    )
}

const Main = styled.main`
    background-color: ${(theme) => theme.theme.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    font-family: Rubik;
    padding-bottom: 30px;

    

    .pokemon-page {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 10px;
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

    .title-ability {
        margin: 30px 0 5px;
    }

    .text-ability {
        margin-left: 10px;
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
        background-color: ${(theme) => theme.theme.backgroundPokemon};
        color: ${(theme) => theme.theme.colorPokemon};
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
    }

    .moves-container {
        color: ${(theme) => theme.theme.colorPokemon};
        background-color: ${(theme) => theme.theme.backgroundPokemon};
        margin:10px;
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

    @media (min-width: 1450px) {
        .pokemon-imagem {
            width: 700px;
        }
    } 

    @media (max-width: 850px) {
        .pokemon-imagem {
            width: 300px;
        }

        .title-pokemon {
            font-size: 40px;
        }

        .info-pokemon {
            width: 300px;
        }
    } 

    @media (max-width: 600px) {
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