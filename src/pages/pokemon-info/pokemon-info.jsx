import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../components/contexts/theme-context"
import { useParams } from "react-router-dom"
import { TypeComponent } from "../../components/typeComponent/typeComponent"
import { Loading } from "../../components/loading/loading"
import { FaArrowLeft } from "react-icons/fa";
import { Header } from "../../components/header/header"
import { getPokeAbility, getPokemon } from "../../services/requestApi"
import { scrollToTop } from "../../services/functionsDefault"
import { Main } from "../../styled/styledPokemonInfo"

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




export { PokemonInfo }