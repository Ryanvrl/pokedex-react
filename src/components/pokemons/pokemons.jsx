import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { urlDefault } from "../../services/urls/urls"
import { CardPokemon } from "../pokemon-card/pokemon-card"
import { BarFunctions } from "../barFunctions/BarFunctions"
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom"
import { Loading } from "../loading/loading"

const Pokemons = () => {
    const [pokemon, setPokemon] = useState([])
    const [numberPerPage, setNumberPerPage] = useState(10)
    const [search, setSearch] = useState('')
    const [removeLoading, setRemoveLoading] = useState(false)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        getCardPokemon()
        setTimeout(() => {
            setRemoveLoading(true)
        }, 400);
        setRemoveLoading(false)
    }, [numberPerPage])

    const getCardPokemon = () => {
        var endpoints = []
        for (var i = 1; i <= numberPerPage; i++) {
            endpoints.push(`${urlDefault}/${i}/`)
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res))
    }

    // AO ROLAR A PAGINA INICIAL PARA BAIXO E CLICAR NO PIKACHU POR EXEMPLO, A SCROLL BAR DA PAGINA DE DETALHES DO POKEMON COMEÇA POR BAIXO, NÃO CONSEGUI RESOLVER ISSO. E TAMBÉM OS AVISOS DO CONSOLE SOBRE A FONTE DA LOGO.

    return (
        <Main theme={theme}>
            <div className="container-main">
                <BarFunctions search={search} setSearch={setSearch} />
                <div className="container-list">
                    <ul className="container-cards">
                        {(numberPerPage == 10 || numberPerPage > 10) && pokemon
                            .filter((poke) =>
                                poke.data.name.toLowerCase()
                                    .includes(search.toLowerCase())
                                || (poke.data.types[0].type.name.toLowerCase()
                                    .includes(search.toLowerCase())
                                    || poke.data.types[1] && poke.data.types[1].type.name.toLowerCase()
                                        .includes(search.toLowerCase()))
                            )
                            .map((poke) =>
                                <Link to={`pokemon/${poke.data.id}`} key={poke.data.id} className="link">
                                    <CardPokemon pokemon={poke.data} />
                                </Link>
                            )
                        }
                    </ul>
                </div>

                {!removeLoading && <Loading />}

                <button className="load-more" onClick={() => setNumberPerPage(numberPerPage + 10)} >Load more</button>
            </div>


        </Main>

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
        color: ${(theme) => theme.theme.color};
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