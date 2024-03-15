import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { CardPokemon } from "../../components/pokemon-card/pokemon-card"
import { BarFunctions } from "../../components/barFunctions/BarFunctions"
import { useContext } from "react"
import { ThemeContext } from "../../components/contexts/theme-context"
import { Link } from "react-router-dom"
import { Loading } from "../../components/loading/loading"
import { Header } from "../../components/header/header"
import { getPokemon, getPokemons } from "../../services/requestApi"

const Pokemons = () => {
    const paginationLimit = 10

    const [pokemon, setPokemon] = useState([])
    const [paginationOffSet, setPaginationOffSet] = useState(0)


    const [search, setSearch] = useState('')
    const [isPending, setIsPending] = useState(true)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemons(paginationLimit, paginationOffSet)
            const pokemonsNames = response.map(pokemon => pokemon.name)
            const pokemonsPromises = pokemonsNames.map(async (pokemonName) => await getPokemon(pokemonName))
            const paginatedPokemons = await Promise.all(pokemonsPromises)
            setPokemon([...pokemon, ...paginatedPokemons])
            setIsPending(false)
        }

        fetchData()
    }, [paginationOffSet])

    // AO ROLAR A PAGINA INICIAL PARA BAIXO E CLICAR NO PIKACHU POR EXEMPLO, A SCROLL BAR DA PAGINA DE DETALHES DO POKEMON COMEÇA POR BAIXO, NÃO CONSEGUI RESOLVER ISSO.


    return (
        <>
            <Header />
            <Main theme={theme}>
                <BarFunctions search={search} setSearch={setSearch} />
                <div className="container-main">
                    <div className="container-list">
                        <ul className="container-cards">

                            <CardPokemon pokemon={
                                pokemon.filter((poke) =>
                                    poke.name.toLowerCase()
                                        .includes(search.toLowerCase())
                                    || (poke.types[0].type.name.toLowerCase()
                                        .includes(search.toLowerCase())
                                        || poke.types[1] && poke.types[1].type.name.toLowerCase()
                                            .includes(search.toLowerCase()))
                                ).map((poke) => poke)

                            } />




                        </ul>
                    </div>
                    {isPending && <Loading />}

                    <button className="load-more" onClick={() => {
                        setPaginationOffSet(paginationOffSet + 10)
                        setIsPending(true)
                    }}>
                        Load more
                    </button>
                </div>
            </Main >
        </>

    )
}



const Main = styled.main`
    background-color: ${(theme) => theme.theme.background};
    padding: 0px;
    padding-bottom: 40px;
    display: flex;   
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;

    ul {
        list-style-type: none;
    }

    .link {
        text-decoration: none;
    }

    .load-more {
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px;
        border-radius: 10px;
        background-color:  #E3350D;
        color: ${(theme) => theme.theme.background};
        margin: 20px;
        font-weight: 700;
    }

    .container-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container-cards {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .container-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export { Pokemons }