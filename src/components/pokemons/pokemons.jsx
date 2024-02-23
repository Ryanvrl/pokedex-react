import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { urlDefault } from "../../services/urls/urls"
import { CardPokemon } from "../pokemon/pokemon"
import { BarFunctions } from "../barFunctions/BarFunctions"
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom"


const Pokemons = () => {
    const [pokemon, setPokemon] = useState([])
    const [numberPerPage, setNumberPerPage] = useState(10)
    const [search, setSearch] = useState('')
    const [types, setTypes] = useState([])
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        getCardPokemon()
    }, [numberPerPage])

    const getCardPokemon = () => {
        var endpoints = []
        for (var i = 1; i <= numberPerPage; i++) {
            endpoints.push(`${urlDefault}/${i}/`)
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res))

    }


    return (
        <Main style={{ backgroundColor: theme.background }} >
            <div className="container-main">
                <BarFunctions search={search} setSearch={setSearch} />
                <div className="container-list">
                    <ul className="container-cards">
                        {pokemon
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

                <button className="carregar-mais" onClick={() => setNumberPerPage(numberPerPage + 10)} style={{ color: theme.color }}>Load More</button>
            </div>
        </Main>
    )
}

const Main = styled.main`
    padding: 0px;
    display: flex;   
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    flex-direction: column;
    min-height: 100vh;

    ul {
        list-style-type: none;
    }

    .link {
        text-decoration: none;
    }

    .carregar-mais {
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px;
        border-radius: 10px;
        background-color:  #E3350D;
        color: #fff;
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