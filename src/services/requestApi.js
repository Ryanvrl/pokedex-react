import axios from "axios";

async function getPokemons(limit, offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemons = await response.data.results
    return pokemons
}

async function getPokemon(name) {
    await name
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.data
    return pokemon
}

async function getPokeAbility(abilities) {
    let urls = []
    let abilitiesFinal = []
    urls = abilities.map((ability) => urls = (ability.ability.url))
    const response = await axios.all(urls.map((url) => axios.get(url).then((res) => abilitiesFinal.push(res.data))))
    return abilitiesFinal
}


export { getPokemons, getPokemon, getPokeAbility }