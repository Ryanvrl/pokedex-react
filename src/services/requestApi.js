import axios from "axios";

async function getPokemons (limit, offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemons = await response.data.results
    return pokemons
}

async function getPokemon(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.data
    return pokemon
}

async function getPokeAbility(url) {
    const response = await await axios.get(url)
    const ability = await response.data
    return ability
}

export { getPokemons, getPokemon, getPokeAbility }