import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { TypeComponent } from "../typeComponent/typeComponent"
import { Link } from "react-router-dom"
import { Card } from "../../styled/styledPokemon-card"

const CardPokemon = ({ pokemon }) => {
    const pokemonsList = pokemon
    const { theme } = useContext(ThemeContext)

    return (
        <>
            {pokemonsList.map((element, index) => {
                return (
                    <Card className="cards" theme={theme} type={element.types[0].type.name} key={element.name}>
                        <Link to={`pokemon/${element.name}`} className="link">
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
                        </Link >
                    </Card>
                )
            })
            }
        </>

    )
}

export { CardPokemon }