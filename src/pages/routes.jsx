import { Route, Routes } from "react-router-dom";
import { Pokemons } from "../components/pokemons/pokemons";
import { PokemonInfo } from "../components/pokemon-info/pokemon-info";


const AppRoutes = () => {
  return (
   
      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route exact path='/pokemon/:idPoke' element={<PokemonInfo />} />
      </Routes>
    
  );
};

export { AppRoutes };